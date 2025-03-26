import SDK from "@hyperledger/identus-sdk";
import { useState } from "react";
import { Credential } from "./Credential";
import { useAgent } from "@/hooks";



function MessageTitle(props: { message: SDK.Domain.Message, title: string }) {
  const { message, title } = props;
  return <div className="text-xl font-bold">
    <b>{title}: </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
  </div>;
}

function CredentialDisplay(props: { message: SDK.Domain.Message }) {
  const { message } = props;
  const attachments = message.attachments.reduce<SDK.Domain.Credential[]>((acc, x) => {
    if (x.format === "prism/jwt") {
      return acc.concat(SDK.JWTCredential.fromJWS(x.payload));
    }

    if (x.format === "vc+sd-jwt") {
      return acc.concat(SDK.SDJWTCredential.fromJWS(x.payload));
    }

    try {
      const parsed = JSON.parse(x.payload);
      return acc.concat(parsed);
    }
    catch (err) { }

    return acc;
  }, []);

  const attachment = attachments.at(0)!;
  const parsed = { ...message };
  if (typeof parsed.body === "string") {
    (parsed as any).body = JSON.parse(parsed.body);
  }
  const format = message.attachments?.at(0)?.format;
  return (
    <div className="w-full mt-5 p-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="pt-6 px-6">
        <MessageTitle message={message} title={`Credential (${format})`} />
      </div>

      <div className="p-0  space-y-6">
        <Credential credential={attachment} />
      </div>
    </div>
  );
}

function CredentialRequestMessage(message: SDK.Domain.Message) {
  const parsed = { ...message };
  if (typeof parsed.body === "string") {
    (parsed as any).body = JSON.parse(parsed.body);
  }
  const format = parsed.body.formats?.at(0)?.format ?? 'unknown';
  return <div
    className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
  >
    <div>
      <MessageTitle message={message} title="Credential Request" />
      <p>You requested the Credential through this Credential Request Message of type {format}</p>
    </div>
  </div>;
}

const InputFields: React.FC<{ fields: any[]; }> = props => {
  return <>
    Should proof the following claims:
    {
      props.fields.map((field, i) => {
        return <div key={`field${i}`} >
          <p className=" text-sm font-normal text-gray-500 dark:text-gray-400">
            {
              field.name
            }
            {
              field.filter ? `must match ${JSON.stringify(field.filter)
                }` : ``
            }
          </p>
        </div>;

      })
    }
  </>;
};

function replacePlaceholders(text: string, args: any[]): string {
  return text.replace(/\{(\d+)\}/g, (match, index) => {
    const idx = parseInt(index) - 1; // Adjust for zero-based array index
    return args[idx] !== undefined ? args[idx] : match; // Replace or keep original if undefined
  });
}

export function Message({ message }: { message: SDK.Domain.Message }) {
  const { agent, messages } = useAgent();
  const [response, setResponse] = useState<string>("");
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [options, setOptions] = useState<any>({});
  const [isAnswering, setIsAnswering] = useState<boolean>(false);
  const body = message.body;

  const parsed = { ...message };
  if (typeof parsed.body === "string") {
    (parsed as any).body = JSON.parse(parsed.body);
  }

  const attachments = message.attachments.reduce((acc, x) => {
    if ("base64" in x.data) {
      if (x.format === "prism/jwt") {
        const decodedFirst = Buffer.from(x.data.base64, "base64").toString();
        const decoded = Buffer.from(decodedFirst.split(".")[1], "base64").toString();
        const parsed = JSON.parse(decoded);
        return acc.concat(parsed);
      }
      const decoded = Buffer.from(x.data.base64, "base64").toString();
      try {
        const parsed = JSON.parse(decoded);
        return acc.concat(parsed);
      } catch (err) {

      }
    }
    return acc;
  }, []);

  const handleSend = async () => {
    const text = response;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const from = message?.from as SDK.Domain.DID;
    const to = message?.to as SDK.Domain.DID;
    const thid = message?.thid || message?.id;
    try {
      if (!agent) {
        throw new Error("Start the agent first");
      }
      await agent.sendMessage(
        new SDK.BasicMessage(
          { content: text },
          to,
          from,
          thid
        ).makeMessage()

      );
    }
    catch (e) {
      console.log(e);
    }
  };

  const hasResponse = messages.find(({ message: appMessage }) => {
    if (!message.thid || !appMessage.thid) {
      return false;
    }
    if (appMessage.id === message.id) {
      return false;
    }
    const messageCreatedTime = message.createdTime;
    const appMessageCreatedTime = appMessage.createdTime;
    const response = appMessage.thid === message.thid && messageCreatedTime < appMessageCreatedTime;
    return response;
  });

  const isReceived = message.direction !== SDK.Domain.MessageDirection.SENT;

  if (message.piuri === SDK.ProtocolType.DidcommBasicMessage) {
    return <div
      className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
      <div>
        <b>Basic Message: </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
        <p>from {message.from?.toString()}</p>
        <p>to {message.to?.toString()}</p>
        <pre style={{
          textAlign: "left",
          wordWrap: "break-word",
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
        }}
        >
          {JSON.stringify(parsed.body.content, null, 2)}
        </pre>
        {attachments.length > 0 && (
          <pre style={{
            textAlign: "left",
            wordWrap: "break-word",
            wordBreak: "break-all",
            whiteSpace: "pre-wrap",
          }}
          >
            <b>Attachments:</b>
            {attachments.map(x => JSON.stringify(x, null, 2))}
          </pre>
        )}

      </div>
      {
        isAnswering && <>
          <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </>
      }
      {
        !isAnswering && isReceived && !hasResponse && <>
          <input
            className="block mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={response} placeholder="Your response" onChange={(e) => setResponse(e.target.value)} />

          <button className="mt-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={() => {
            handleSend();
          }}>Respond</button>
        </>
      }
    </div>;
  }

  if (message.piuri === SDK.ProtocolType.DidcommConnectionRequest) {
    return <div
      className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
      <div>
        <b>Connection Request: </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
        <pre style={{
          textAlign: "left",
          wordWrap: "break-word",
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
        }}
        >
          {JSON.stringify(parsed.body, null, 2)}
        </pre>
      </div>

    </div>;
  }

  if (message.piuri === SDK.ProtocolType.DidcommConnectionResponse) {
    return <div
      className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
      <div>
        <b>Connection established: </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
        <pre style={{
          textAlign: "left",
          wordWrap: "break-word",
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
        }}
        >
          {JSON.stringify(parsed.body, null, 2)}
        </pre>


      </div>

    </div>;
  }

  if (message.piuri === SDK.ProtocolType.DidcommRequestCredential) {
    return <CredentialRequestMessage {...message} />;
  }

  if (message.piuri === SDK.ProtocolType.DidcommIssueCredential) {
    return <CredentialDisplay message={message} />;
  }

  // if (message.piuri === SDK.ProtocolType.DidcommOfferCredential) {
  //   const data = body.credential_preview.body.attributes.map(({ name }: any) => name);
  //   return <div
  //     className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
  //   >
  //     <div>
  //       <p
  //         className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
  //         <b>Credential Offer </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
  //       </p>

  //       Credential will contain the following fields
  //       {
  //         data.map((field: any, i: number) => {
  //           return <p
  //             key={`field${i}`}
  //             className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
  //             {field}
  //           </p>;

  //         })
  //       }

  //       {isReceived && !hasResponse && <>
  //         {
  //           isAnswering && <>
  //             <div role="status">
  //               <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
  //                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
  //               </svg>
  //               <span className="sr-only">Loading...</span>
  //             </div>
  //           </>
  //         }
  //         {
  //           !isAnswering && <>
  //             {
  //               message?.error && <p>{JSON.stringify(message.error.message)}</p>
  //             }

  //             <button className="mt-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={() => {
  //               if (!agent) {
  //                 throw new Error("Start the agent first");
  //               }
  //               app.acceptCredentialOffer({ agent: agent, message: message });
  //             }}>Accept</button>

  //             <button className="mt-5 mx-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={() => {
  //               if (!agent) {
  //                 throw new Error("Start the agent first");
  //               }
  //               if (!app.db.instance) {
  //                 throw new Error("Start the database first");
  //               }
  //               app.rejectCredentialOffer({ message: message, pluto: app.db.instance });
  //             }}>Reject</button>
  //           </>
  //         }
  //       </>}

  //     </div>
  //   </div>;
  // }

  // if (message.piuri === SDK.ProtocolType.DidcommRequestPresentation) {

  //   return <div
  //     className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
  //   >
  //     <div>
  //       <p
  //         className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
  //         <b>Verification Proof </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
  //       </p>
  //       <div
  //         className="overflow-x-auto h-auto text-sm font-normal text-gray-500dark:text-gray-400">
  //         <p>You have sent proof in the past to {message.to.toString()}</p>
  //         <AgentRequire text="to verify a proof">
  //           <button
  //             className="mt-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
  //             style={{ width: 120 }}
  //             onClick={() => {
  //               app.agent.instance?.handlePresentation(SDK.Presentation.fromMessage(message))
  //                 .then((valid) => {
  //                   setOptions({ valid: valid });
  //                 })
  //                 .catch((err) => {
  //                   setOptions({ valid: false, reason: err.message });
  //                 });
  //             }}>
  //             Verify the Proof
  //           </button>
  //           <p>{
  //             options && <>
  //               {
  //                 options.valid === true && <>Presentation is VALID</>
  //               }
  //               {
  //                 options.valid === false && <>Presentation is NOT VALID: {options.reason || 'unknown'} </>
  //               }
  //             </>}</p>
  //         </AgentRequire>
  //       </div>
  //     </div>
  //   </div>;
  // }

  // if (message.piuri === SDK.ProtocolType.ProblemReporting) {
  //   const content = replacePlaceholders(message.body.comment, message.body.args);

  //   return <div className="flex items-center justify-center">
  //     <div className="w-full bg-red-300 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-lg my-5 w-full">
  //       <div className="flex">
  //         <svg
  //           className="w-6 h-6 text-red-500 mr-3"
  //           fill="none"
  //           stroke="currentColor"
  //           viewBox="0 0 24 24"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
  //           ></path>
  //         </svg>
  //         <div>
  //           <p className="font-bold">Error {message.id}</p>
  //         </div>
  //       </div>
  //       <div className="mt-5">
  //         <div className="w-full shadow-lg bg-white px-10 py-4 rounded-lg">An error ocurred, {content}, CODE {message.body.code}</div>
  //       </div>
  //     </div>
  //   </div>;
  // }

  // if (message.piuri === SDK.ProtocolType.DidcommRequestPresentation) {
  //   const requestPresentationMessage = SDK.RequestPresentation.fromMessage(message);
  //   const requestPresentation = requestPresentationMessage.decodedAttachments.at(0);
  //   const requestPresentationFormat = requestPresentationMessage.attachments.at(0)?.format;
  //   const shouldRespond = isReceived && !hasResponse;

  //   if (requestPresentationFormat === "dif/presentation-exchange/definitions@v1.0") {
  //     const credentials = app.credentials.filter((c) => c instanceof SDK.JWTCredential || c instanceof SDK.SDJWTCredential);
  //     const fields = requestPresentation.presentation_definition ?
  //       requestPresentation.presentation_definition.input_descriptors.at(0)?.constraints.fields ?? [] :
  //       [];

  //     return <div
  //       className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
  //     >
  //       <div>
  //         <p
  //           className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
  //           <b>Verification request </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
  //         </p>

  //         <InputFields fields={fields} />

  //         {shouldRespond && <AgentRequire>
  //           {
  //             isAnswering && <Loading />
  //           }
  //           {
  //             !isAnswering && <>
  //               {
  //                 message?.error && <p>{JSON.stringify(message.error.message)}</p>
  //               }

  //               <button
  //                 onClick={() => {
  //                   if (collapsed) {
  //                     setCollapsed(false);
  //                   }
  //                 }}
  //                 id="dropdownRadioBgHoverButton"
  //                 data-dropdown-toggle="dropdownRadioBgHover"
  //                 style={{ height: 47 }}
  //                 className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  //                 Accept with Credential <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  //                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
  //                 </svg>
  //               </button>

  //               <div id="dropdownRadioBgHover" className={(collapsed ? 'hidden ' : '') + `z-10  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
  //                 <ul className="px-5 py-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
  //                   {
  //                     credentials.map((credential, i) => {
  //                       const fields = credential.claims.reduce<any>((all, claim) => [
  //                         ...all,
  //                         Object.keys(claim).slice(0, 3).join(",")
  //                       ], []);
  //                       let credentialText = `Credential with ${fields}`;
  //                       if (credential.issuer) {
  //                         credentialText += ` from ${credential.issuer.slice(0, 30)}...`;
  //                       }
  //                       return <li key={`cred${i}`}>
  //                         <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
  //                           {
  //                             app.agent.isSendingMessage === false && <button
  //                               onClick={() => {
  //                                 if (!agent) {
  //                                   throw new Error("Start the agent first");
  //                                 }
  //                                 app.acceptPresentationRequest({
  //                                   agent,
  //                                   message,
  //                                   credential
  //                                 });
  //                                 setCollapsed(true);
  //                               }}
  //                             >
  //                               <span className="ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 overflow-x-auto h-auto">
  //                                 {credentialText}
  //                               </span>
  //                             </button>
  //                           }

  //                           {
  //                             app.agent.isSendingMessage === true && <button><Loading /></button>
  //                           }
  //                         </div>
  //                       </li>;
  //                     })
  //                   }
  //                 </ul>
  //               </div>

  //               <button className="mt-5 mx-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={() => {
  //                 if (!app.db.instance) {
  //                   throw new Error("Start the db first");
  //                 }
  //                 app.rejectCredentialOffer({ message: message, pluto: app.db.instance });
  //               }}>Reject</button>
  //             </>
  //           }
  //         </AgentRequire>}

  //       </div>
  //     </div>;
  //   } else {

  //     const verificationType = requestPresentationMessage.attachments.at(0)?.format;
  //     const credentials: SDK.Domain.Credential[] = app.credentials.filter((credential) => credential.credentialType == verificationType);
  //     const fields = Object.keys(requestPresentation?.claims ?? {}).map((field) => ({ name: field, path: [`$.${field}`] }));
  //     return <div
  //       className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
  //     >
  //       <div>
  //         <p
  //           className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
  //           <b>Cloud Agent [{verificationType?.toUpperCase()}] Verification request </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
  //         </p>

  //         <InputFields fields={fields} />

  //         {shouldRespond && <AgentRequire>
  //           {
  //             isAnswering && <Loading />
  //           }
  //           {
  //             !isAnswering && <>
  //               {
  //                 message?.error && <p>{JSON.stringify(message.error.message)}</p>
  //               }

  //               <button
  //                 onClick={() => {
  //                   if (collapsed) {
  //                     setCollapsed(false);
  //                   }
  //                 }}
  //                 id="dropdownRadioBgHoverButton"
  //                 data-dropdown-toggle="dropdownRadioBgHover"
  //                 style={{ height: 47 }}
  //                 className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  //                 Accept with Credential <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  //                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
  //                 </svg>
  //               </button>

  //               <div id="dropdownRadioBgHover" className={(collapsed ? 'hidden ' : '') + `z-10  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
  //                 <ul className="px-5 py-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
  //                   {
  //                     credentials.map((credential, i) => {
  //                       const fields = credential.claims.reduce<any>((all, claim) => [
  //                         ...all,
  //                         Object.keys(claim).slice(0, 3).join(",")
  //                       ], []);
  //                       let credentialText = `Credential with ${fields}`;
  //                       if (credential.issuer) {
  //                         credentialText += ` from ${credential.issuer.slice(0, 30)}...`;
  //                       }
  //                       return <li key={`cred${i}`}>
  //                         <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
  //                           {
  //                             app.agent.isSendingMessage === false && <button
  //                               onClick={() => {
  //                                 if (!agent) {
  //                                   throw new Error("Start the agent first");
  //                                 }
  //                                 app.acceptPresentationRequest({
  //                                   agent,
  //                                   message,
  //                                   credential
  //                                 });
  //                                 setCollapsed(true);
  //                               }}
  //                             >
  //                               <span className="ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 overflow-x-auto h-auto">
  //                                 {credentialText}
  //                               </span>
  //                             </button>
  //                           }
  //                           {
  //                             app.agent.isSendingMessage === true && <button><Loading /></button>
  //                           }
  //                         </div>
  //                       </li>;
  //                     })
  //                   }
  //                 </ul>
  //               </div>

  //               <button className="mt-5 mx-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={() => {
  //                 if (!app.db.instance) {
  //                   throw new Error("Start the db first");
  //                 }
  //                 app.rejectCredentialOffer({ message: message, pluto: app.db.instance });
  //               }}>Reject</button>
  //             </>
  //           }
  //         </AgentRequire>}

  //       </div>
  //     </div>;

  //   }




  //   return <>Unsupported {message.piuri}</>;
  // }

  return <><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Message ID</h3>
      <p className="text-sm font-mono break-all">{message.id}</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Protocol URI</h3>
      <p className="text-sm font-mono break-all">{message.piuri}</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">From</h3>
      <p className="text-sm font-mono break-all">{message.from?.toString() || 'N/A'}</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">To</h3>
      <p className="text-sm font-mono break-all">{message.to?.toString() || 'N/A'}</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Direction</h3>
      <p className="text-sm">{message.direction === SDK.Domain.MessageDirection.SENT ? 'Sent' : 'Received'}</p>
    </div>
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Created Time</h3>
      <p className="text-sm">{new Date(message.createdTime * 1000).toLocaleString()}</p>
    </div>
  </div>
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Message Body</h3>
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <pre className="text-sm font-mono whitespace-pre-wrap break-all">
          {JSON.stringify(message.body, null, 2)}
        </pre>
      </div>
    </div>
    {
      message.attachments.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Attachments</h3>
          <div className="space-y-4">
            {message.attachments.map((attachment, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Attachment {index + 1}</span>
                    {attachment.mediaType && (
                      <span className="text-xs text-gray-500">{attachment.mediaType}</span>
                    )}
                  </div>
                  {attachment.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{attachment.description}</p>
                  )}
                  {attachment.filename && (
                    <p className="text-sm font-mono">{attachment.filename}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    {
      Object.keys(message.extraHeaders).length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Extra Headers</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all">
              {JSON.stringify(message.extraHeaders, null, 2)}
            </pre>
          </div>
        </div>
      )
    }
  </>
}
