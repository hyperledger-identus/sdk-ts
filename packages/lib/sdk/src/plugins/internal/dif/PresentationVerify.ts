import * as Domain from "@hyperledger/identus-domain";
import { asArray, asJsonObj } from "../../../utils";
import { IsCredentialRevoked } from "./IsCredentialRevoked";
import { Payload } from "@hyperledger/identus-domain";
import { JWTCredential } from "../../../pollux/models/JWTVerifiableCredential";
import { SDJWTCredential } from "../../../pollux/models/SDJWTVerifiableCredential";
import { DescriptorPath } from "../../../pollux/utils/DescriptorPath";
import { type DIF } from "./types";
import type { Context } from "./index";
import { Plugins } from "../../../plugins";

interface Args {
  presentation: DIF.EmbedTarget;
  presentationRequest: DIF.Presentation.Request;
}


export class PresentationVerify extends Plugins.Task<Args> {

  private get knownFormats() {
    const formats: DIF.Presentation.Submission.Format[] = ["jwt_vc", "jwt_vp", "sd_jwt"];
    return formats;
  }
  async run(ctx: Context) {
    const presentation = this.args.presentation;
    const presentationRequest = this.args.presentationRequest;

    const validPresentation = this.isValidPresentation(presentation);
    const validRequest = this.isValidPresentationRequest(presentationRequest);
    const valid = validPresentation && validRequest
      ? await this.verify(ctx, presentation, presentationRequest)
      : false;

    return Payload.make("valid", valid);
  }

  private isValidPresentation(data: unknown): data is DIF.EmbedTarget {
    if (!data || typeof data !== "object") {
      return false;
    }

    const obj = data as Record<string, unknown>;
    const { presentation_submission } = obj;

    if (!presentation_submission || typeof presentation_submission !== "object") {
      return false;
    }

    const descriptorMaps = asArray((presentation_submission as Record<string, unknown>).descriptor_map);
    return descriptorMaps.some((x) => {
      const descriptor = asJsonObj(x) as Record<string, unknown>;
      const format = descriptor.format;
      return typeof format === "string" && (this.knownFormats as readonly unknown[]).includes(format);
    });
  }

  private isValidPresentationRequest(data: unknown): data is DIF.Presentation.Request {
    return typeof data === "object";
  }

  private async getCredential(
    ctx: Context,
    descriptorItem: DIF.Presentation.Submission.DescriptorItem,
    value: string
  ) {
    if (descriptorItem.format === "jwt_vc" || descriptorItem.format === "jwt_vp") {
      // for jwt_vc and jwt_vp both are JWT objects and fromJWS will load the right object
      const credential = JWTCredential.fromJWS(value);
      const jwtIssuer = Domain.DID.fromString(credential.issuer);

      // only the jwt_vc credentials have a subject, verifiable presentations not
      const jwtSubject = descriptorItem.format === "jwt_vc" && credential.subject ?
        Domain.DID.fromString(credential.subject) :
        undefined;

      const valid = await ctx.JWT.verify({
        holderDID: jwtSubject,
        issuerDID: jwtIssuer,
        jws: credential.id as string
      });
      if (!valid) {
        return null;
      }
      return credential;
    }
    if (descriptorItem.format === "sd_jwt") {
      const credential = SDJWTCredential.fromJWS(value);
      const valid = await ctx.SDJWT.verify({
        issuerDID: Domain.DID.fromString(credential.issuer as string),
        jws: credential.id as string,
        // We leave them empty, we won't be checking here
        // but instead disclosing all the values and then validating the claims against input_descriptors
        requiredClaimKeys: []
      });
      if (!valid) {
        return null;
      }
      return credential;
    }

    throw new Domain.PolluxError.InvalidVerifyFormatError(
      `Invalid Submission, ${descriptorItem.path} expected to have one of the following formats ${this.knownFormats.join(", ")} but got ${descriptorItem.format as string}`
    );
  }

  private async verifyJWTClaims(
    ctx: Context,
    inputDescriptor: DIF.Presentation.Definition.InputDescriptor,
    credential: JWTCredential,
  ) {
    try {
      const revocationTask = new IsCredentialRevoked({ credential: credential });
      const isRevoked = await ctx.run(revocationTask);
      if (isRevoked.data) {
        throw new Domain.PolluxError.InvalidVerifyCredentialError(credential.id as string, "Invalid Verifiable Presentation, credential is revoked");
      }
    } catch (err) {
      if (err instanceof Domain.PolluxError.InvalidVerifyCredentialError) {
        throw err;
      } else {
        const message = err instanceof Error ? err.message : String(err);
        throw new Domain.PolluxError.InvalidVerifyCredentialError(credential.id as string, `Invalid Verifiable Presentation, could not verify if the credential is revoked, reason: ${message}`);
      }
    }
    const mapper = new DescriptorPath(credential);
    return this.validateInputDescriptor(
      credential.id as string,
      mapper,
      inputDescriptor
    );
  }

  private async verifySDJWTClaims(
    ctx: Context,
    inputDescriptor: DIF.Presentation.Definition.InputDescriptor,
    credential: SDJWTCredential,
  ) {
    const claims = await ctx.SDJWT.reveal(
      credential.core.jwt?.payload ?? {},
      credential.core.disclosures ?? [],
    );
    const mapper = new DescriptorPath(claims);
    return this.validateInputDescriptor(
      credential.id as string,
      mapper,
      inputDescriptor
    );
  }

  private async processDescriptorItem(
    ctx: Context,
    inputDescriptor: DIF.Presentation.Definition.InputDescriptor,
    descriptorItem: DIF.Presentation.Submission.DescriptorItem,
    value: unknown,
  ): Promise<boolean> {
    const isPresentation = descriptorItem.format === "jwt_vp";
    if (descriptorItem.path_nested) {
      const credential = await this.getCredential(ctx, descriptorItem, value as string);
      if (!credential) {
        throw new Domain.PolluxError.InvalidVerifyCredentialError(
          value as string,
          `Invalid ${isPresentation ? 'Verifiable Presentation' : 'Verifiable Credential'} JWS Signature`
        );
      }
      const nestedMapper = new DescriptorPath(credential);
      const nestedValue = nestedMapper.getValue(descriptorItem.path_nested.path) as unknown;
      if (!nestedValue) {
        throw new Domain.PolluxError.InvalidVerifyFormatError(
          `Invalid Submission, ${descriptorItem.path_nested.path} not found in submission`
        );
      }
      return this.processDescriptorItem(
        ctx,
        inputDescriptor,
        descriptorItem.path_nested,
        nestedValue,
      );
    }

    const credential = await this.getCredential(ctx, descriptorItem, value as string);
    if (!credential) {
      //TODO: Improve this error, can be presentation or credential
      throw new Domain.PolluxError.InvalidVerifyCredentialError(
        value as string,
        `Invalid ${isPresentation ? 'Verifiable Presentation' : 'Verifiable Credential'} JWS Signature`
      );
    }

    return credential instanceof JWTCredential ?
      this.verifyJWTClaims(ctx, inputDescriptor, credential) :
      this.verifySDJWTClaims(ctx, inputDescriptor, credential);
  }

  private async verify(
    ctx: Context,
    presentationSubmission: DIF.EmbedTarget,
    presentationRequest: DIF.Presentation.Request
  ): Promise<boolean> {
    const inputDescriptors = presentationRequest.presentation_definition.input_descriptors;
    const presentationSubmissionMapper = new DescriptorPath(presentationSubmission);
    const descriptorMaps = presentationSubmission.presentation_submission.descriptor_map;

    // return true if all descriptorItems are valid
    for (const descriptorItem of descriptorMaps) {
      //Check descriptor format, and path or nested path
      const inputDescriptor = inputDescriptors.find(({ id }) => id === descriptorItem.id);
      if (!inputDescriptor) {
        throw new Domain.PolluxError.InvalidVerifyFormatError(`Invalid Submission, undefined input descriptor`);
      }
      const value = presentationSubmissionMapper.getValue(descriptorItem.path) as unknown;
      const valid = await this.processDescriptorItem(
        ctx,
        inputDescriptor,
        descriptorItem,
        value
      );
      if (!valid) {
        return false;
      }
    }
    return true;
  }

  private validateField(
    vc: string,
    mapper: DescriptorPath,
    path: string | undefined,
    field: DIF.Presentation.Definition.Field,
  ) {
    try {
      if (!path) {
        throw new Domain.PolluxError.InvalidVerifyCredentialError(
          vc,
          `Invalid Claim: Expected one of the paths ${field.path.join(", ")} to exist.`
        );
      }

      const value: unknown = mapper.getValue(path);

      if (field.filter && value !== null) {
        const filter = field.filter;

        if (filter.pattern) {
          const pattern = new RegExp(filter.pattern);
          if (!pattern.test(value as string) && value !== filter.pattern) {
            throw new Domain.PolluxError.InvalidVerifyCredentialError(
              vc, `Invalid Claim: Expected the ${path} field to be "${filter.pattern}" but got "${value as string}"`
            )
          } else {
            return true;
          }

        } else if (filter.enum) {
          if (!filter.enum.includes(value as DIF.Presentation.Definition.PredicateType)) {
            throw new Domain.PolluxError.InvalidVerifyCredentialError(
              vc, `Invalid Claim: Expected the ${path} field to be one of ${filter.enum.join(", ")} but got ${value as string}`
            )
          } else {
            return true
          }

        } else if (filter.const && value === filter.pattern) {
          if (value !== filter.const) {
            throw new Domain.PolluxError.InvalidVerifyCredentialError(
              vc, `Invalid Claim: Expected the ${path} field to be "${JSON.stringify(filter.const)}" but got "${value as string}"`
            )
          } else {
            return true;
          }

        }
      }

      throw new Domain.PolluxError.InvalidVerifyCredentialError(
        vc, `Invalid Claim: Expected one of the paths ${field.path.join(", ")} to exist.`
      )
    } catch (err) {
      if (err instanceof Domain.PolluxError.InvalidVerifyCredentialError) {
        return err;
      }
      return err instanceof Error ? err : new Error(String(err));
    }
  }

  private validateInputDescriptor(
    vc: string,
    descriptorMapper: DescriptorPath,
    inputDescriptor: DIF.Presentation.Definition.InputDescriptor
  ) {
    const constraints = inputDescriptor.constraints;
    const fields = constraints.fields;

    if (constraints.limit_disclosure === "required") {
      const requiredFields = fields.filter((field) => !field.optional);

      for (const field of requiredFields) {
        const validatedPaths = field.path.map((path) => this.validateField(vc, descriptorMapper, path, field));
        const hasValid = validatedPaths.some((path) => path === true);
        if (hasValid) {
          continue;
        }
        const errors: Domain.PolluxError.InvalidVerifyCredentialError[] = validatedPaths.filter((path) => path instanceof Domain.PolluxError.InvalidVerifyCredentialError);
        const [notFound] = errors.filter((error) => error.reason === `Invalid Claim: Expected one of the paths ${field.path.join(", ")} to exist.`);
        const [error] = errors.filter((error) => error.reason !== `Invalid Claim: Expected one of the paths ${field.path.join(", ")} to exist.`);
        if (error) {
          throw error;
        }
        throw notFound;
      }
    }

    return true;
  }
}
