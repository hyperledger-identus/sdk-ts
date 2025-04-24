import type * as DIDResolver from "did-resolver";
import * as Domain from "../../../domain";
import { Task, asArray, isEmpty } from "../../../utils";
import { AgentContext } from "../../../edge-agent/didcomm/Context";

export interface Args {
  did: string;
}

export class ResolveDID extends Task<DIDResolver.DIDResolutionResult, Args> {
  async run(ctx: AgentContext) {
    const resolved = await ctx.Castor.resolveDID(this.args.did);

    const alsoKnownAs = resolved.coreProperties.find(
      (prop): prop is Domain.DIDDocument.AlsoKnownAs => prop instanceof Domain.DIDDocument.AlsoKnownAs
    );
    const controller = resolved.coreProperties.find(
      (prop): prop is Domain.DIDDocument.Controller => prop instanceof Domain.DIDDocument.Controller
    );
    const verificationMethods = resolved.coreProperties.find(
      (prop): prop is Domain.DIDDocument.VerificationMethods => prop instanceof Domain.DIDDocument.VerificationMethods
    );
    const service = resolved.coreProperties.find(
      (prop): prop is Domain.DIDDocument.Services => prop instanceof Domain.DIDDocument.Services
    );


    const verificationMethod = asArray(verificationMethods?.values).map((vm) => {
      if (vm.publicKeyMultibase) {
        return {
          id: vm.id,
          type: vm.type,
          controller: vm.controller,
          publicKeyMultibase: vm.publicKeyMultibase,
        };
      }

      if (vm.publicKeyJwk) {
        return {
          id: vm.id,
          type: "JsonWebKey2020" as Domain.DIDDocument.VerificationMethod.Type,
          controller: vm.controller,
          publicKeyJwk: vm.publicKeyJwk,
        };
      }

      throw new Error("Invalid KeyType");
    });
    return {
      didResolutionMetadata: { contentType: "application/did+ld+json" },
      didDocumentMetadata: {},
      didDocument: {
        id: resolved.id.toString(),
        alsoKnownAs: alsoKnownAs?.values,
        controller: asArray(controller?.values).map((v) => v.toString()),
        verificationMethod,
        service: asArray(service?.values).reduce<DIDResolver.Service[]>((acc, service) => {
          const type = service.type.at(0);
          return isEmpty(type) ? acc : acc.concat({
            type: type,
            id: service.id,
            serviceEndpoint: service.serviceEndpoint,
          });
        }, []),
      },
    };
  }
}
