import { describe, expect, test, beforeEach, afterEach, vi } from 'vitest';
import type { DisclosureFrame, PresentationFrame, } from '@sd-jwt/types';

import { DIF } from '../../../src/plugins/internal/dif/types';
import { Task } from '../../../src/utils';
import { Apollo, Castor } from '../../../src';
import { JWT, SDJWT } from "../../../src/pollux/utils/jwt";
import { PresentationVerify } from '../../../src/plugins/internal/dif/PresentationVerify';
import { Curve, KeyTypes } from '@hyperledger/identus-domain';
import { DIFModule } from '../../../src/plugins/internal/dif/module';
import { JWTCredentialPayload, JWTPresentationPayload } from '../../../src/pollux/models/JWTVerifiableCredential';

describe("Plugins - DIF", () => {
  let ctx: Task.Context<{
    SDJWT: SDJWT,
    JWT: JWT,
    Apollo: Apollo,
    Castor: Castor,
    DIF: DIFModule;
  }>;

  beforeEach(() => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    ctx = new Task.Context<any>({
      Apollo: apollo,
      Castor: castor,
      JWT: new JWT(),
      SDJWT: new SDJWT(),
      DIF: new DIFModule(),
    });
  });

  describe("PresentationVerify", () => {
    describe("JWT", () => {
      const presentation: DIF.EmbedTarget = {
        presentation_submission: {
          id: "0b17b996-7d52-4b2a-81fd-e6ffcd6dd188",
          definition_id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
          descriptor_map: [{
            id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
            format: "jwt_vp",
            path: "$.verifiablePresentation[0]",
            path_nested: {
              id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
              format: "jwt_vc",
              path: "$.vp.verifiableCredential[0]",
            },
          },
          ],
        },
        verifiablePresentation: [
          "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3NjcyMjU2MDAsImlzcyI6ImRpZDpwcmlzbTpmMDJjNTgyOTE2NmI2MjJmMTgyYzEzMjZlYTg5MzQzODk1MDNkMGI3M2NjNjU3NjZhMmVlOTA1NGJjOTA2OWQyOkNtRUtYeEpkQ2dodFlYTjBaWEl0TUJBQlFrOEtDWE5sWTNBeU5UWnJNUklnbnlHMjdsYTdDRVlqMVRPa0FZQno0bDA2TFVlUTRkOFNDTjJrdnRWZmxsNGFJQVltaFdpYnIxeUtMRHI4WnV6WEQzZmdHNGJKR25VMk93eUFmWkxURlpjRSIsIm5iZiI6MTc2NzIyNTYwMCwidnAiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlUHJlc2VudGF0aW9uIl0sInZlcmlmaWFibGVDcmVkZW50aWFsIjpbImV5SmhiR2NpT2lKRlV6STFOa3NpTENKMGVYQWlPaUpLVjFRaWZRLmV5SnBZWFFpT2pFM05qY3lNalUyTURBc0ltVjRjQ0k2TVRnNU16UTFOakF3TUN3aWFYTnpJam9pWkdsa09uQnlhWE50T2pZNE5EVTBOVGMzWm1JM05ESmlZemMyTURrd05XWmhaalV5WldOak5EY3haRGd5WVRoaFpEZzJZV0UyTXpObVlUVmxOamxqTVRjM05tTmlaak15TUdRNlEyMUZTMWg0U21SRFoyaDBXVmhPTUZwWVNYUk5Ra0ZDVVdzNFMwTllUbXhaTTBGNVRsUmFjazFTU1dkWGJqTXRiV2hmT1VGbVUzRkROMjR4YVdoRmEyc3dXblE0U1RoS2FVSlphVGhyTFVwR2RYTXRWMUpCWVVsTmFrZEhZMVExUWpCUVJXVllYMlpmUmtOTk5uTmZjbWhJY3kxaFpWTlhWM0I0ZUZWdlVVMDBXV2RJSWl3aWJtSm1Jam94TnpZM01qSTFOakF3TENKemRXSWlPaUprYVdRNmNISnBjMjA2WmpBeVl6VTRNamt4TmpaaU5qSXlaakU0TW1NeE16STJaV0U0T1RNME16ZzVOVEF6WkRCaU56TmpZelkxTnpZMllUSmxaVGt3TlRSaVl6a3dOamxrTWpwRGJVVkxXSGhLWkVObmFIUlpXRTR3V2xoSmRFMUNRVUpSYXpoTFExaE9iRmt6UVhsT1ZGcHlUVkpKWjI1NVJ6STNiR0UzUTBWWmFqRlVUMnRCV1VKNk5Hd3dOa3hWWlZFMFpEaFRRMDR5YTNaMFZtWnNiRFJoU1VGWmJXaFhhV0p5TVhsTFRFUnlPRnAxZWxoRU0yWm5SelJpU2tkdVZUSlBkM2xCWmxwTVZFWmFZMFVpTENKMll5STZleUpBWTI5dWRHVjRkQ0k2V3lKb2RIUndjem92TDNkM2R5NTNNeTV2Y21jdk1qQXhPQzlqY21Wa1pXNTBhV0ZzY3k5Mk1TSmRMQ0owZVhCbElqcGJJbFpsY21sbWFXRmliR1ZEY21Wa1pXNTBhV0ZzSWwwc0ltbHpjM1ZsY2lJNkltUnBaRHB3Y21semJUbzJPRFExTkRVM04yWmlOelF5WW1NM05qQTVNRFZtWVdZMU1tVmpZelEzTVdRNE1tRTRZV1E0Tm1GaE5qTXpabUUxWlRZNVl6RTNOelpqWW1Zek1qQmtPa050UlV0WWVFcGtRMmRvZEZsWVRqQmFXRWwwVFVKQlFsRnJPRXREV0U1c1dUTkJlVTVVV25KTlVrbG5WMjR6TFcxb1h6bEJabE54UXpkdU1XbG9SV3RyTUZwME9FazRTbWxDV1drNGF5MUtSblZ6TFZkU1FXRkpUV3BIUjJOVU5VSXdVRVZsV0Y5bVgwWkRUVFp6WDNKb1NITXRZV1ZUVjFkd2VIaFZiMUZOTkZsblNDSXNJbWx6YzNWaGJtTmxSR0YwWlNJNklqSXdNall0TURFdE1ERlVNREE2TURBNk1EQXVNREF3V2lJc0ltTnlaV1JsYm5ScFlXeFRkV0pxWldOMElqcDdJbU52ZFhKelpTSTZJa2xrWlc1MGRYTWdWSEpoYVc1cGJtY2dZMjkxY25ObElFTmxjblJwWm1sallYUnBiMjRnTWpBeU5DSjlmWDAuY3RCN2tMRE9EU3l3SlVOZ2JnVGh5YTl1SHczcWVUdlAzZ2pkNjdDM1BnQW5MVnlsUUY3WFNKSnJ0MmNpSzEwbm15cTY2Q1hudHRkdzJKQ0N5V2dSbnciXX19.SuVyT6nH5-RbYWruF-WM3IWeuiME5hMZ1ZNpVlTcYTMq3CPDwl_DuylViZDeAsl84YoN7OBRnNbGmm5EHN4E8A",
        ],
      };

      const presentationRequest: DIF.Presentation.Request = {
        presentation_definition: {
          id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
          input_descriptors: [
            {
              id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
              name: "Presentation",
              purpose: "Verifying Credentials",
              constraints: {
                fields: [
                  {
                    path: [
                      "$.vc.credentialSubject.course",
                      "$.credentialSubject.course",
                      "$.course",
                    ],
                    id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
                    optional: false,
                    filter: {
                      type: "string",
                      pattern: "Identus Training course Certification 2024",
                    },
                    name: "course",
                  },
                  {
                    path: [
                      "$.vc.issuer",
                      "$.issuer",
                      "$.iss",
                      "$.vc.iss",
                    ],
                    id: "6a6fa378-d701-43e7-81d5-ee1cd80c585e",
                    optional: false,
                    name: "issuer",
                    filter: {
                      type: "string",
                      pattern: "did:prism:68454577fb742bc760905faf52ecc471d82a8ad86aa633fa5e69c1776cbf320d:CmEKXxJdCghtYXN0ZXItMBABQk8KCXNlY3AyNTZrMRIgWn3-mh_9AfSqC7n1ihEkk0Zt8I8JiBYi8k-JFus-WRAaIMjGGcT5B0PEeX_f_FCM6s_rhHs-aeSWWpxxUoQM4YgH",
                    },
                  },
                ],
                limit_disclosure: "required",
              },
              format: {
                jwt: {
                  alg: [
                    "ES256K",
                  ],
                },
              },
            },
          ],
          format: {
            jwt: {
              alg: [
                "ES256K",
              ],
            },
          },
        },
        options: {
          challenge: "sign this",
          domain: "N/A",
        },
      };

      test("returns Payload ('valid', true) - when the presentation and request are valid", async () => {
        const sut = new PresentationVerify({ presentation, presentationRequest });
        const result = await ctx.run(sut);

        expect(result.pid).toBe("valid");
        expect(result.data).toBe(true);
      });

      describe("validation", () => {
        test("Should Verify false when the Credential subject does not provide required field", async () => {
          const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));
          failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
            path: [
              "$.vc.credentialSubject.not_a_course",
              "$.credentialSubject.not_a_course",
              "$.not_a_course",
            ],
            id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
            optional: false,
            filter: {
              type: "string",
              pattern: "Identus Training course Certification 2024",
            },
            name: "not_a_course",
          }];
          const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow("Verification failed for credential (eyJhbGciOi...): reason -> Invalid Claim: Expected one of the paths $.vc.credentialSubject.not_a_course, $.credentialSubject.not_a_course, $.not_a_course to exist.");
        });

        test("Should Verify false when the Credential subject does not match given pattern", async () => {
          const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));
          failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
            path: [
              "$.vc.credentialSubject.course",
              "$.credentialSubject.course",
              "$.course",
            ],
            id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
            optional: false,
            filter: {
              type: "string",
              pattern: "not the expected pattern",
            },
            name: "course",
          }];
          const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow('Verification failed for credential (eyJhbGciOi...): reason -> Invalid Claim: Expected the $.vc.credentialSubject.course field to be "not the expected pattern" but got "Identus Training course Certification 2024"');
        });

        test("invalid presentation - not an object - returns false", async () => {
          const presentation = "fail" as any;
          const sut = new PresentationVerify({ presentation, presentationRequest });
          const result = await ctx.run(sut);

          expect(result.data).toBe(false);
        });

        test("invalid presentation - missing presentation_submission - returns false", async () => {
          const invalid = { ...presentation, presentation_submission: undefined } as any;
          const sut = new PresentationVerify({ presentation: invalid, presentationRequest });
          const result = await ctx.run(sut);

          expect(result.data).toBe(false);
        });

        test("invalid presentation - no matching format - returns false", async () => {
          const invalid: DIF.EmbedTarget = {
            ...presentation,
            presentation_submission: {
              ...presentation.presentation_submission,
              descriptor_map: [{
                format: "invalid" as any,
                id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                path: "$.verifiablePresentation[0]",
                path_nested: {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.vp.verifiableCredential[0]",
                },
              }],
            },
          };

          const sut = new PresentationVerify({ presentation: invalid, presentationRequest });
          const result = await ctx.run(sut);

          expect(result.data).toBe(false);
        });

        test("invalid presentationRequest - not an object - returns false", async () => {
          const sut = new PresentationVerify({ presentation, presentationRequest: "fail" as any });
          const result = await ctx.run(sut);

          expect(result.data).toBe(false);
        });

        test("Should verify false when presentation is valid using jwt_vc and jwt_vp with nested paths but presentation signature is invalid", async () => {
          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: issuerSeed.value,
          });
          const issuerAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: issuerSeed.value,
          });

          const holderMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: holderSeed.value,
          });
          const holderAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: holderSeed.value,
          });

          const issuerDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: issuerMasterSK,
                ISSUING_KEY: [issuerAuthenticationSK]
              }
            }
          );


          const holderDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: holderMasterSK,
                ISSUING_KEY: [holderAuthenticationSK]
              }
            }
          );

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = Math.floor(currentDate.getTime() / 1000);
          const expirationDate = Math.floor(nextMonthDate.getTime() / 1000);

          const vcPayload: JWTCredentialPayload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, vcPayload, undefined, issuerAuthenticationSK);

          const vpPayload: JWTPresentationPayload = {
            iss: holderDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            vp: {
              "@context": ["https://www.w3.org/2018/presentations/v1"],
              type: ["VerifiablePresentation"],
              verifiableCredential: [
                jwt
              ]
            }
          };
          const presentationJWT = await ctx.JWT.signWithDID(holderDID, vpPayload, undefined, issuerAuthenticationSK);


          const presentation: DIF.EmbedTarget = {
            presentation_submission: {
              id: "0b17b996-7d52-4b2a-81fd-e6ffcd6dd188",
              definition_id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
              descriptor_map: [{
                id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                format: "jwt_vp",
                path: "$.verifiablePresentation[0]",
                path_nested: {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.vp.verifiableCredential[0]",
                },
              },
              ],
            },
            verifiablePresentation: [
              presentationJWT
            ]
          };

          const presentationRequest: DIF.Presentation.Request = {
            presentation_definition: {
              id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
              input_descriptors: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  name: "Presentation",
                  purpose: "Verifying Credentials",
                  constraints: {
                    fields: [
                      {
                        path: [
                          "$.vc.credentialSubject.course",
                          "$.credentialSubject.course",
                          "$.course",
                        ],
                        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
                        optional: false,
                        filter: {
                          type: "string",
                          pattern: "Identus Training course Certification 2024",
                        },
                        name: "course",
                      },
                      {
                        path: [
                          "$.vc.issuer",
                          "$.issuer",
                          "$.iss",
                          "$.vc.iss",
                        ],
                        id: "6a6fa378-d701-43e7-81d5-ee1cd80c585e",
                        optional: false,
                        name: "issuer",
                        filter: {
                          type: "string",
                          pattern: "did:prism:0858c30daf6d0cc3e0b1ae31b7cb212f4446a6e0f47a5926b3ba7dc64986157b:CmEKXxJdCghtYXN0ZXItMBABQk8KCXNlY3AyNTZrMRIgM3HxlER-HNHG59NAGoJJ7OdA5XlQAbOU5JqPGmnkZiQaIFYj9QUSo_xiemYiLHlBBkwHjZZKR1FjSA2OlgKI9iC9",
                        },
                      },
                    ],
                    limit_disclosure: "required",
                  },
                  format: {
                    jwt: {
                      alg: [
                        "ES256K",
                      ],
                    },
                  },
                },
              ],
              format: {
                jwt: {
                  alg: [
                    "ES256K",
                  ],
                },
              },
            },
            options: {
              challenge: "sign this",
              domain: "N/A",
            },
          };





          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow(
            `Verification failed for credential (eyJhbGciOi...): reason -> Invalid Verifiable Presentation JWS Signature`
          );
        });



        test("Should verify false when presentation is valid using jwt_vc and jwt_vp with nested paths but credential signature is invalid", async () => {
          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: issuerSeed.value,
          });
          const issuerAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: issuerSeed.value,
          });

          const holderMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: holderSeed.value,
          });
          const holderAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: holderSeed.value,
          });

          const issuerDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: issuerMasterSK,
                ISSUING_KEY: [issuerAuthenticationSK]
              }
            }
          );


          const holderDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: holderMasterSK,
                ISSUING_KEY: [holderAuthenticationSK]
              }
            }
          );

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = Math.floor(currentDate.getTime() / 1000);
          const expirationDate = Math.floor(nextMonthDate.getTime() / 1000);

          const vcPayload: JWTCredentialPayload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, vcPayload, undefined, holderAuthenticationSK);

          const vpPayload: JWTPresentationPayload = {
            iss: holderDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            vp: {
              "@context": ["https://www.w3.org/2018/presentations/v1"],
              type: ["VerifiablePresentation"],
              verifiableCredential: [
                jwt
              ]
            }
          };
          const presentationJWT = await ctx.JWT.signWithDID(holderDID, vpPayload, undefined, holderMasterSK);


          const presentation: DIF.EmbedTarget = {
            presentation_submission: {
              id: "0b17b996-7d52-4b2a-81fd-e6ffcd6dd188",
              definition_id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
              descriptor_map: [{
                id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                format: "jwt_vp",
                path: "$.verifiablePresentation[0]",
                path_nested: {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.vp.verifiableCredential[0]",
                },
              },
              ],
            },
            verifiablePresentation: [
              presentationJWT
            ]
          };

          const presentationRequest: DIF.Presentation.Request = {
            presentation_definition: {
              id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
              input_descriptors: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  name: "Presentation",
                  purpose: "Verifying Credentials",
                  constraints: {
                    fields: [
                      {
                        path: [
                          "$.vc.credentialSubject.course",
                          "$.credentialSubject.course",
                          "$.course",
                        ],
                        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
                        optional: false,
                        filter: {
                          type: "string",
                          pattern: "Identus Training course Certification 2024",
                        },
                        name: "course",
                      },
                      {
                        path: [
                          "$.vc.issuer",
                          "$.issuer",
                          "$.iss",
                          "$.vc.iss",
                        ],
                        id: "6a6fa378-d701-43e7-81d5-ee1cd80c585e",
                        optional: false,
                        name: "issuer",
                        filter: {
                          type: "string",
                          pattern: "did:prism:0858c30daf6d0cc3e0b1ae31b7cb212f4446a6e0f47a5926b3ba7dc64986157b:CmEKXxJdCghtYXN0ZXItMBABQk8KCXNlY3AyNTZrMRIgM3HxlER-HNHG59NAGoJJ7OdA5XlQAbOU5JqPGmnkZiQaIFYj9QUSo_xiemYiLHlBBkwHjZZKR1FjSA2OlgKI9iC9",
                        },
                      },
                    ],
                    limit_disclosure: "required",
                  },
                  format: {
                    jwt: {
                      alg: [
                        "ES256K",
                      ],
                    },
                  },
                },
              ],
              format: {
                jwt: {
                  alg: [
                    "ES256K",
                  ],
                },
              },
            },
            options: {
              challenge: "sign this",
              domain: "N/A",
            },
          };

          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow(
            `Verification failed for credential (eyJhbGciOi...): reason -> Invalid Verifiable Credential JWS Signature`
          );
        });

        test("Should verify true when presentation is valid using jwt_vc and jwt_vp with nested paths", async () => {
          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = await ctx.run(sut);

          expect(result.data).toBe(true);
        });

        test("Should verify true when the presentation is valid,using jwt_vc only", async () => {

          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: issuerSeed.value,
          });
          const issuerAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: issuerSeed.value,
          });

          const holderMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: holderSeed.value,
          });
          const holderAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: holderSeed.value,
          });

          const issuerDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: issuerMasterSK,
                ISSUING_KEY: [issuerAuthenticationSK]
              }
            }
          );


          const holderDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: holderMasterSK,
                ISSUING_KEY: [holderAuthenticationSK]
              }
            }
          );

          const presentationRequest: DIF.Presentation.Request = {
            presentation_definition: {
              id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
              input_descriptors: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  name: "Presentation",
                  purpose: "Verifying Credentials",
                  constraints: {
                    fields: [
                      {
                        path: [
                          "$.vc.credentialSubject.course",
                          "$.credentialSubject.course",
                          "$.course",
                        ],
                        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
                        optional: false,
                        filter: {
                          type: "string",
                          pattern: "Identus Training course Certification 2024",
                        },
                        name: "course",
                      },
                      {
                        path: [
                          "$.vc.issuer",
                          "$.issuer",
                          "$.iss",
                          "$.vc.iss",
                        ],
                        id: "6a6fa378-d701-43e7-81d5-ee1cd80c585e",
                        optional: false,
                        name: "issuer",
                        filter: {
                          type: "string",
                          pattern: issuerDID.toString(),
                        },
                      },
                    ],
                    limit_disclosure: "required",
                  },
                  format: {
                    jwt: {
                      alg: [
                        "ES256K",
                      ],
                    },
                  },
                },
              ],
              format: {
                jwt: {
                  alg: [
                    "ES256K",
                  ],
                },
              },
            },
            options: {
              challenge: "sign this",
              domain: "N/A",
            },
          };

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = Math.floor(currentDate.getTime() / 1000);
          const expirationDate = Math.floor(nextMonthDate.getTime() / 1000);

          const payload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, payload, undefined, issuerAuthenticationSK);

          const presentation: DIF.EmbedTarget<'verifiableCredential'> = {
            presentation_submission: {
              id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
              definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
              descriptor_map: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.verifiableCredential[0]",
                },
              ],
            },
            verifiableCredential: [
              jwt,
            ],
          };


          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = await ctx.run(sut);

          expect(result.data).toBe(true);
        });

        test("Should verify true when the presentation is valid,using jwt_vc only and a secondary path", async () => {

          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: issuerSeed.value,
          });
          const issuerAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: issuerSeed.value,
          });

          const holderMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: holderSeed.value,
          });
          const holderAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: holderSeed.value,
          });

          const issuerDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: issuerMasterSK,
                ISSUING_KEY: [issuerAuthenticationSK]
              }
            }
          );


          const holderDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: holderMasterSK,
                ISSUING_KEY: [holderAuthenticationSK]
              }
            }
          );

          const presentationRequest: DIF.Presentation.Request = {
            presentation_definition: {
              id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
              input_descriptors: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  name: "Presentation",
                  purpose: "Verifying Credentials",
                  constraints: {
                    fields: [
                      {
                        path: [
                          "$.course",
                          "$.credentialSubject.course",
                          "$.vc.credentialSubject.course",
                        ],
                        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
                        optional: false,
                        filter: {
                          type: "string",
                          pattern: "Identus Training course Certification 2024",
                        },
                        name: "course",
                      },
                      {
                        path: [
                          "$.vc.issuer",
                          "$.issuer",
                          "$.iss",
                          "$.vc.iss",
                        ],
                        id: "6a6fa378-d701-43e7-81d5-ee1cd80c585e",
                        optional: false,
                        name: "issuer",
                        filter: {
                          type: "string",
                          pattern: issuerDID.toString(),
                        },
                      },
                    ],
                    limit_disclosure: "required",
                  },
                  format: {
                    jwt: {
                      alg: [
                        "ES256K",
                      ],
                    },
                  },
                },
              ],
              format: {
                jwt: {
                  alg: [
                    "ES256K",
                  ],
                },
              },
            },
            options: {
              challenge: "sign this",
              domain: "N/A",
            },
          };

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = Math.floor(currentDate.getTime() / 1000);
          const expirationDate = Math.floor(nextMonthDate.getTime() / 1000);

          const payload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, payload, undefined, issuerAuthenticationSK);

          const presentation: DIF.EmbedTarget<'verifiableCredential'> = {
            presentation_submission: {
              id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
              definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
              descriptor_map: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.verifiableCredential[0]",
                },
              ],
            },
            verifiableCredential: [
              jwt,
            ],
          };


          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = await ctx.run(sut);

          expect(result.data).toBe(true);
        });

        test("Should verify false when the presentation is invalid, wrong signature,using jwt_vc only", async () => {

          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: issuerSeed.value,
          });


          const holderMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: holderSeed.value,
          });


          const issuerDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: issuerMasterSK,
              }
            }
          );

          const presentationRequest: DIF.Presentation.Request = {
            presentation_definition: {
              id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
              input_descriptors: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  name: "Presentation",
                  purpose: "Verifying Credentials",
                  constraints: {
                    fields: [
                      {
                        path: [
                          "$.vc.credentialSubject.course",
                          "$.credentialSubject.course",
                          "$.course",
                        ],
                        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
                        optional: false,
                        filter: {
                          type: "string",
                          pattern: "Identus Training course Certification 2024",
                        },
                        name: "course",
                      },
                      {
                        path: [
                          "$.vc.issuer",
                          "$.issuer",
                          "$.iss",
                          "$.vc.iss",
                        ],
                        id: "6a6fa378-d701-43e7-81d5-ee1cd80c585e",
                        optional: false,
                        name: "issuer",
                        filter: {
                          type: "string",
                          pattern: issuerDID.toString(),
                        },
                      },
                    ],
                    limit_disclosure: "required",
                  },
                  format: {
                    jwt: {
                      alg: [
                        "ES256K",
                      ],
                    },
                  },
                },
              ],
              format: {
                jwt: {
                  alg: [
                    "ES256K",
                  ],
                },
              },
            },
            options: {
              challenge: "sign this",
              domain: "N/A",
            },
          };

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = Math.floor(currentDate.getTime() / 1000);
          const expirationDate = Math.floor(nextMonthDate.getTime() / 1000);

          const payload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: issuerDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, payload, undefined, holderMasterSK);

          const presentation: DIF.EmbedTarget<'verifiableCredential'> = {
            presentation_submission: {
              id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
              definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
              descriptor_map: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.verifiableCredential[0]",
                },
              ],
            },
            verifiableCredential: [
              jwt,
            ],
          };


          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow(
            `Verification failed for credential (eyJhbGciOi...): reason -> Invalid Verifiable Credential JWS Signature`
          );

        });

        test("Should verify false when the presentation is invalid wrong issuer did,using jwt_vc only", async () => {

          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: issuerSeed.value,
          });
          const issuerAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: issuerSeed.value,
          });

          const holderMasterSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: holderSeed.value,
          });
          const holderAuthenticationSK = await ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: holderSeed.value,
          });

          const issuerDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: issuerMasterSK,
                ISSUING_KEY: [issuerAuthenticationSK]
              }
            }
          );


          const holderDID = await ctx.Castor.createDID(
            'prism',
            {
              keys: {
                MASTER_KEY: holderMasterSK,
                ISSUING_KEY: [holderAuthenticationSK]
              }
            }
          );

          const presentationRequest: DIF.Presentation.Request = {
            presentation_definition: {
              id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
              input_descriptors: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  name: "Presentation",
                  purpose: "Verifying Credentials",
                  constraints: {
                    fields: [
                      {
                        path: [
                          "$.vc.credentialSubject.course",
                          "$.credentialSubject.course",
                          "$.course",
                        ],
                        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
                        optional: false,
                        filter: {
                          type: "string",
                          pattern: "Identus Training course Certification 2024",
                        },
                        name: "course",
                      },
                      {
                        path: [
                          "$.vc.issuer",
                          "$.issuer",
                          "$.iss",
                          "$.vc.iss",
                        ],
                        id: "6a6fa378-d701-43e7-81d5-ee1cd80c585e",
                        optional: false,
                        name: "issuer",
                        filter: {
                          type: "string",
                          pattern: holderDID.toString(),
                        },
                      },
                    ],
                    limit_disclosure: "required",
                  },
                  format: {
                    jwt: {
                      alg: [
                        "ES256K",
                      ],
                    },
                  },
                },
              ],
              format: {
                jwt: {
                  alg: [
                    "ES256K",
                  ],
                },
              },
            },
            options: {
              challenge: "sign this",
              domain: "N/A",
            },
          };

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = Math.floor(currentDate.getTime() / 1000);
          const expirationDate = Math.floor(nextMonthDate.getTime() / 1000);

          const payload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, payload, undefined, issuerAuthenticationSK);

          const presentation: DIF.EmbedTarget<'verifiableCredential'> = {
            presentation_submission: {
              id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
              definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
              descriptor_map: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.verifiableCredential[0]",
                },
              ],
            },
            verifiableCredential: [
              jwt,
            ],
          };


          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow(
            `Verification failed for credential (eyJraWQiOi...): reason -> Invalid Claim: Expected the $.vc.issuer field to be "${holderDID.toString()}" but got "${issuerDID.toString()}"`
          );

        });
      });
    });
  });

  describe("SDJWT", () => {

    // The hardcoded SD-JWT fixture has nbf: 1736514899794 (ms, ~Jan 10 2025)
    // and exp: 1739193299794 (ms, ~Feb 10 2025). Freeze time within that window
    // so the credential passes exp/nbf validation added in PR #556.
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date("2025-01-20T00:00:00Z"));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    const presentation: DIF.EmbedTarget = {
      presentation_submission: {
        id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
        definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
        descriptor_map: [
          {
            id: "c3fd00a4-129d-49dc-a640-d84ad32826d9",
            format: "sd_jwt",
            path: "$.verifiablePresentation[0]",
          },
        ],
      },
      verifiablePresentation: [
        "eyJ0eXAiOiJ2YytzZC1qd3QiLCJraWQiOiJkaWQ6cHJpc206YjNiOTNhOGYzODI0YmMzOTMzZDAyMmFmNjhhNTU4NWM2MmE1ZjRhNmQ1MzlkZmU0YjQxYzA5NTZkYzAwMWUxNzpDajBLT3hJNUNnaHRZWE4wWlhJdE1CQUJTaXNLQjBWa01qVTFNVGtTSUhQNC0ycGF1dzRRX2RPc2tXZHdYLUZNdHBEMFFLcUVhcWxJTnNQbDJ4bk4jbWFzdGVyLTAiLCJhbGciOiJlZGRzYSJ9.eyJpc3MiOiJkaWQ6cHJpc206YjNiOTNhOGYzODI0YmMzOTMzZDAyMmFmNjhhNTU4NWM2MmE1ZjRhNmQ1MzlkZmU0YjQxYzA5NTZkYzAwMWUxNzpDajBLT3hJNUNnaHRZWE4wWlhJdE1CQUJTaXNLQjBWa01qVTFNVGtTSUhQNC0ycGF1dzRRX2RPc2tXZHdYLUZNdHBEMFFLcUVhcWxJTnNQbDJ4bk4iLCJuYmYiOjE3MzY1MTQ4OTk3OTQsImV4cCI6MTczOTE5MzI5OTc5NCwic3ViIjoiZGlkOnByaXNtOjIyZWRlZDQ3MDYyNzRkZGQwYzIzNmNkZjNiNTY1YjBkODQ3MzFkM2I4MGQ3M2JiYzJhMTI1ZTQzMGQ2NjJhZmY6Q2owS094STVDZ2h0WVhOMFpYSXRNQkFCU2lzS0IwVmtNalUxTVRrU0lQX1JFaWF2cHp6WXlydVJYZVdHdFhJcTdMR2QxaEgxeHJUalRHRGRUdWlvIiwidmN0IjoiZGlkOnByaXNtOmIzYjkzYThmMzgyNGJjMzkzM2QwMjJhZjY4YTU1ODVjNjJhNWY0YTZkNTM5ZGZlNGI0MWMwOTU2ZGMwMDFlMTc6Q2owS094STVDZ2h0WVhOMFpYSXRNQkFCU2lzS0IwVmtNalUxTVRrU0lIUDQtMnBhdXc0UV9kT3NrV2R3WC1GTXRwRDBRS3FFYXFsSU5zUGwyeG5OIiwiX3NkIjpbIk1FZHljRFg0UlFyTGRxdlcxcmFCck1DRFZxZDJLUEhkZWRqbEFuLW1kZ2MiXSwiX3NkX2FsZyI6InNoYTI1NiJ9.Y9y1hoRxZLxuBMEhSCr0Jp37DNX7ebUIDjCxys_DS_x21Ka2w1N-c7kIPZhfM7p1ptfJOmYMpJkbuP6FotXPAA~WyI1NjJkNmE2MTg2NGYwMTZhIiwidmMiLHsiX3NkIjpbIkJaUy1hN2RPM3FKdUE5V2lsdEduUFpWd0xXdUhjNjhhSFNpWWc4WDFsdkEiLCJCdllZTzhtWFRubnZJYTVEc2ZybjA0UHR3V1pnS1d4bkFQQWdDLWNWb3lJIiwiU0Y1VTRlYm0ySzhhQ2pLS0JfRkg3N09sQ1VSeTFQY0JqNEJDZ2t5M3Y5SSIsIlVxVzlFVS1tVWpFMjZDd290VW51aG5iQ19EdkNYYkxmZFQzM05rek5lWEEiLCJubkZlRVFQUEJNQW12WkNVbVU4MkU5X0Z3YWx1aUg2aTRPRkx3VndxaFVrIl19XQ~WyIzZjA2OTU1YzBjZGU4NWY2IiwiY3JlZGVudGlhbFN1YmplY3QiLHsiX3NkIjpbIkY1N1JVdGpLZkRvZFZlUnF0RlQtdnZNZVdhVENmZG1wM1FYODZfQ3p2aGsiLCJRN0tWVnBEZ28zNHhNVXBfZXdyeVptaWJJdzdBb2ZlNWNTV2g3X0U0ZFJJIl19XQ~WyJmNjdkNDA4NmIwNGQ3NmI3IiwiZmlyc3RuYW1lIiwiaG9sYSJd~",
      ],
    };

    const presentationRequest: DIF.Presentation.Request = {
      presentation_definition: {
        id: "acd86273-5017-4980-a9be-dab6c725c811",
        input_descriptors: [
          {
            id: "c3fd00a4-129d-49dc-a640-d84ad32826d9",
            name: "Presentation",
            purpose: "Verifying Credentials",
            constraints: {
              fields: [
                {
                  path: [
                    "$.vc.credentialSubject.firstname",
                    "$.credentialSubject.firstname",
                    "$.firstname",
                  ],
                  id: "2c46f1ee-ac0a-4ba0-9e8d-84dd63f5b407",
                  optional: false,
                  filter: {
                    type: "string",
                    pattern: "hola",
                  },
                  name: "firstname",
                },
              ],
              limit_disclosure: "required",
            },
            format: {
              sdjwt: {
                alg: [
                  "EdDSA",
                ],
              },
            },
          },
        ],
        format: {
          sdjwt: {
            alg: [
              "EdDSA",
            ],
          },
        },
      },
      options: {},
    };

    test("returns Payload ('valid', true)", async () => {
      const sut = new PresentationVerify({ presentation, presentationRequest });
      const result = await ctx.run(sut);

      expect(result.pid).toBe("valid");
      expect(result.data).toBe(true);
    });

    test("Should Verify false when the Credential subject does not provide required field", async () => {
      const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));
      failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
        path: [
          "$.vc.credentialSubject.not_a_course",
          "$.credentialSubject.not_a_course",
          "$.not_a_course",
        ],
        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
        optional: false,
        filter: {
          type: "string",
          pattern: "Identus Training course Certification 2024",
        },
        name: "not_a_course",
      }];
      const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
      const result = ctx.run(sut);

      // With requiredClaimKeys enforcement (issue #366), SDJWT.verify() now rejects
      // credentials that do not disclose the required claim before reaching validateField().
      await expect(result).rejects.toThrow(/Verification failed for credential/);
    });

    test("Should Verify false when the Credential subject does not match given pattern", async () => {
      const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));
      failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
        path: [
          "$.vc.credentialSubject.course",
          "$.credentialSubject.course",
          "$.course",
        ],
        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
        optional: false,
        filter: {
          type: "string",
          pattern: "not the expected pattern",
        },
        name: "course",
      }];
      const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
      const result = ctx.run(sut);

      // With requiredClaimKeys enforcement (issue #366), SDJWT.verify() now rejects
      // credentials that do not disclose the required claim before reaching validateField().
      await expect(result).rejects.toThrow(/Verification failed for credential/);
    });

    test("Should Verify false when at least one of the input_descriptors does not match the presentation", async () => {
      const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));

      //Valid input descriptor
      failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
        path: [
          "$.vc.credentialSubject.course",
          "$.credentialSubject.course",
          "$.course",
        ],
        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
        optional: false,
        filter: {
          type: "string",
          pattern: "Identus Training course Certification 2024",
        },
        name: "course",
      }];

      //Invalid input descriptor 
      failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
        path: [
          "$.vc.credentialSubject.firstname",
          "$.credentialSubject.firstname",
          "$.firstname",
        ],
        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
        optional: false,
        filter: {
          type: "string",
          pattern: "not hola",
        },
        name: "firstname",
      }];
      const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
      const result = ctx.run(sut);

      await expect(result).rejects.toThrow('Verification failed for credential (eyJ0eXAiOi...): reason -> Invalid Claim: Expected the $.vc.credentialSubject.firstname field to be "not hola" but got "hola"');
    });

    test("Should Verify false when the verifier asks for a field that was not disclosed by the user", async () => {
      const issuerSeed = ctx.Apollo.createRandomSeed().seed;
      const holderSeed = ctx.Apollo.createRandomSeed().seed;

      const issuerMasterSK = await ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: issuerSeed.value,
      });
      const issuerAuthenticationSK = await ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.ED25519,
        seed: issuerSeed.value,
      });

      const holderMasterSK = await ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: holderSeed.value,
      });
      const holderAuthenticationSK = await ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.ED25519,
        seed: holderSeed.value,
      });

      const issuerDID = await ctx.Castor.createDID(
        'prism',
        {
          keys: {
            MASTER_KEY: issuerMasterSK,
            ISSUING_KEY: [issuerAuthenticationSK]
          }
        }
      );


      const holderDID = await ctx.Castor.createDID(
        'prism',
        {
          keys: {
            MASTER_KEY: holderMasterSK,
            ISSUING_KEY: [holderAuthenticationSK]
          }
        }
      );

      const currentDate = new Date();
      const nextMonthDate = new Date(currentDate);
      nextMonthDate.setMonth(currentDate.getMonth() + 1);
      const issuanceDate = Math.floor(currentDate.getTime() / 1000);
      const expirationDate = Math.floor(nextMonthDate.getTime() / 1000);

      const payload = {
        iss: issuerDID.toString(),
        nbf: issuanceDate,
        exp: expirationDate,
        sub: holderDID.toString(),
        vc: {
          "@context": ["https://www.w3.org/2018/credentials/v1"],
          type: ["VerifiableCredential"],
          issuer: issuerDID.toString(),
          issuanceDate: new Date(issuanceDate).toISOString(),
          credentialSubject: {
            firstname: "hola",
            email: 'secret@email.com'
          },
        },
        vct: issuerDID.toString()
      };

      const claims = {
        firstname: {
          type: 'string',
          pattern: 'hola'
        },
        email: {
          type: 'string',
          pattern: '*'
        }
      };

      const presentationFrame: PresentationFrame<typeof payload> = {
        vc: {
          credentialSubject: {
            firstname: true,
            email: false
          }
        }
      };

      const disclosureFrame: DisclosureFrame<typeof payload> = {
        _sd: ["vc"],
        vc: {
          _sd: [
            "@context",
            "credentialSubject",
            "issuanceDate",
            "issuer",
            "type"
          ],
          credentialSubject: {
            _sd: ['email', 'firstname']
          }
        }
      };

      const jwt = await ctx.SDJWT.sign({
        issuerDID,
        payload,
        disclosureFrame,
        privateKey: issuerAuthenticationSK
      });

      const presentationDefinition = await ctx.DIF.createPresentationDefinition(claims, {
        issuer: issuerDID.toString()
      });

      const presentationSubmissionJWS = await ctx.SDJWT.createPresentationFor<typeof payload>({
        jws: jwt,
        privateKey: issuerAuthenticationSK,
        presentationFrame
      });

      const [descriptor] = presentationDefinition.presentation_definition.input_descriptors;
      const presentation: DIF.EmbedTarget = {
        presentation_submission: {
          id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
          definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
          descriptor_map: [
            {
              id: descriptor.id,
              format: "sd_jwt",
              path: "$.verifiablePresentation[0]",
            },
          ],
        },
        verifiablePresentation: [
          presentationSubmissionJWS
        ],
      };

      const sut = ctx.run(new PresentationVerify({
        presentation,
        presentationRequest: presentationDefinition
      }));

      // With requiredClaimKeys enforcement (issue #366), SDJWT.verify() now rejects
      // credentials that do not disclose the required claim before reaching validateField().
      await expect(sut).rejects.toThrow(/Verification failed for credential/);

    });

    describe("requiredClaimKeys", () => {
      // Helper to build a full SD-JWT sign → present → verify pipeline
      async function buildSDJWTPipeline(opts: {
        claims: Record<string, { type: string; pattern: string }>;
        presentationFrame: PresentationFrame<any>;
        optionalFieldNames?: string[];
      }) {
        const issuerSeed = ctx.Apollo.createRandomSeed().seed;
        const holderSeed = ctx.Apollo.createRandomSeed().seed;

        const issuerMasterSK = await ctx.Apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.SECP256K1,
          seed: issuerSeed.value,
        });
        const issuerAuthenticationSK = await ctx.Apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.ED25519,
          seed: issuerSeed.value,
        });

        const holderMasterSK = await ctx.Apollo.createPrivateKey({
          type: KeyTypes.EC,
          curve: Curve.SECP256K1,
          seed: holderSeed.value,
        });

        const issuerDID = await ctx.Castor.createDID(
          'prism',
          {
            keys: {
              MASTER_KEY: issuerMasterSK,
              ISSUING_KEY: [issuerAuthenticationSK]
            }
          }
        );

        const holderDID = await ctx.Castor.createDID(
          'prism',
          {
            keys: {
              MASTER_KEY: holderMasterSK,
            }
          }
        );

        const currentDate = new Date();
        const nextMonthDate = new Date(currentDate);
        nextMonthDate.setMonth(currentDate.getMonth() + 1);
        const issuanceDate = Math.floor(currentDate.getTime() / 1000);
        const expirationDate = Math.floor(nextMonthDate.getTime() / 1000);

        const payload = {
          iss: issuerDID.toString(),
          nbf: issuanceDate,
          exp: expirationDate,
          sub: holderDID.toString(),
          vc: {
            "@context": ["https://www.w3.org/2018/credentials/v1"],
            type: ["VerifiableCredential"],
            issuer: issuerDID.toString(),
            issuanceDate: new Date(issuanceDate).toISOString(),
            credentialSubject: {
              firstname: "hola",
              email: "secret@email.com",
            },
          },
          vct: issuerDID.toString()
        };

        const disclosureFrame: DisclosureFrame<typeof payload> = {
          _sd: ["vc"],
          vc: {
            _sd: [
              "@context",
              "credentialSubject",
              "issuanceDate",
              "issuer",
              "type"
            ],
            credentialSubject: {
              _sd: ['email', 'firstname']
            }
          }
        };

        const jwt = await ctx.SDJWT.sign({
          issuerDID,
          payload,
          disclosureFrame,
          privateKey: issuerAuthenticationSK
        });

        // Build presentation definition with requested claims
        const constraintFields: DIF.Presentation.Definition.Field[] = Object.keys(opts.claims)
          .map<DIF.Presentation.Definition.Field>((key) => ({
            path: [
              `$.vc.credentialSubject.${key}`,
              `$.credentialSubject.${key}`,
              `$.${key}`
            ],
            id: `field-${key}`,
            optional: opts.optionalFieldNames?.includes(key) ?? false,
            filter: opts.claims[key],
            name: key
          }));

        const presentationDefinition: DIF.Presentation.Request = {
          presentation_definition: {
            id: "test-def-id",
            input_descriptors: [{
              id: "test-descriptor",
              name: "Presentation",
              purpose: "Verifying Credentials",
              constraints: {
                fields: constraintFields,
                limit_disclosure: "required",
              },
              format: {
                sdjwt: { alg: ["EdDSA"] },
              },
            }],
            format: {
              sdjwt: { alg: ["EdDSA"] },
            },
          },
          options: {},
        };

        const presentationSubmissionJWS = await ctx.SDJWT.createPresentationFor<typeof payload>({
          jws: jwt,
          privateKey: issuerAuthenticationSK,
          presentationFrame: opts.presentationFrame,
        });

        const [descriptor] = presentationDefinition.presentation_definition.input_descriptors;
        const presentation: DIF.EmbedTarget = {
          presentation_submission: {
            id: "test-submission-id",
            definition_id: "test-def-id",
            descriptor_map: [{
              id: descriptor.id,
              format: "sd_jwt",
              path: "$.verifiablePresentation[0]",
            }],
          },
          verifiablePresentation: [presentationSubmissionJWS],
        };

        return { presentation, presentationDefinition };
      }

      test("Should fail verification when required claims are not disclosed", async () => {
        // Request both firstname AND email, but only disclose firstname
        const { presentation, presentationDefinition } = await buildSDJWTPipeline({
          claims: {
            firstname: { type: 'string', pattern: 'hola' },
            email: { type: 'string', pattern: '*' },
          },
          presentationFrame: {
            vc: {
              credentialSubject: {
                firstname: true,
                email: false, // NOT disclosed
              }
            }
          },
        });

        const sut = ctx.run(new PresentationVerify({
          presentation,
          presentationRequest: presentationDefinition,
        }));

        // Should fail at the SD-JWT required claims layer
        await expect(sut).rejects.toThrow();
      });

      test("Should pass verification when all required claims are disclosed", async () => {
        // Request both firstname AND email, disclose both
        const { presentation, presentationDefinition } = await buildSDJWTPipeline({
          claims: {
            firstname: { type: 'string', pattern: 'hola' },
            email: { type: 'string', pattern: 'secret@email.com' },
          },
          presentationFrame: {
            vc: {
              credentialSubject: {
                firstname: true,
                email: true, // Both disclosed
              }
            }
          },
        });

        const sut = new PresentationVerify({
          presentation,
          presentationRequest: presentationDefinition,
        });
        const result = await ctx.run(sut);

        expect(result.pid).toBe("valid");
        expect(result.data).toBe(true);
      });

      test("Should not include optional fields in required claim keys", async () => {
        // Request firstname (required) and email (optional), only disclose firstname
        const { presentation, presentationDefinition } = await buildSDJWTPipeline({
          claims: {
            firstname: { type: 'string', pattern: 'hola' },
            email: { type: 'string', pattern: '*' },
          },
          presentationFrame: {
            vc: {
              credentialSubject: {
                firstname: true,
                email: false, // NOT disclosed, but field is optional
              }
            }
          },
          optionalFieldNames: ['email'],
        });

        // Should pass because email is optional — not included in requiredClaimKeys
        // It will still fail at the DescriptorPath validation layer if the claim
        // is needed, but it should not fail at the SD-JWT required claims layer.
        // Since email is optional in the input descriptor, verification should pass.
        const sut = new PresentationVerify({
          presentation,
          presentationRequest: presentationDefinition,
        });
        const result = await ctx.run(sut);

        expect(result.pid).toBe("valid");
        expect(result.data).toBe(true);
      });
    });

    test("Should throw 'key not found' when DID has no ISSUING_KEY and default purpose is used", async () => {
      const issuerSeed = ctx.Apollo.createRandomSeed().seed;

      const issuerMasterSK = await ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: issuerSeed.value,
      });
      const issuerAuthenticationSK = await ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.ED25519,
        seed: issuerSeed.value,
      });

      // Legacy API: key goes into AUTHENTICATION_KEY only, not ISSUING_KEY
      const issuerDID = await ctx.Castor.createDID(
        'prism',
        {
          keys: {
            MASTER_KEY: issuerMasterSK,
          }
        }
      );

      const payload = {
        iss: issuerDID.toString(),
        vct: issuerDID.toString(),
        iat: Math.floor(Date.now() / 1000),
      };

      const disclosureFrame = { _sd: [] as (keyof typeof payload)[] };

      // Default purpose is ISSUING_KEY → looks at assertionMethod → no key → throws
      await expect(
        ctx.SDJWT.sign({
          issuerDID,
          payload,
          disclosureFrame,
          privateKey: issuerAuthenticationSK,
        })
      ).rejects.toThrow("key not found");
    });
  });
});
