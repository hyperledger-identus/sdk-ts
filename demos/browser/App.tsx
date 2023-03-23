import React, {FormEventHandler, useCallback, useEffect, useLayoutEffect, useState} from "react";
import "./App.css";
import * as jose from "jose";
import {useAtom} from "jotai";

import * as SDK from "../../index";
import * as Domain from '../../domain';
import {
  MnemonicWordList,
  Service as DIDDocumentService,
  ServiceEndpoint as DIDDocumentServiceEndpoint
} from '../../domain';
import {PrismDIDInfo} from '../../domain/models/PrismDIDInfo';
import Pluto from '../../pluto/Pluto';
import {mnemonicsAtom} from "./state";
import {trimString} from "./utils";
import Spacer from "./Spacer";
import {Box} from "./Box";
import {BasicMessage} from "../../prism-agent/protocols/other/BasicMessage";

const mediatorDID = SDK.Domain.DID.fromString(
    "did:peer:2.Ez6LScuuNiWo8rwnpYy5dXbq7JnVDv6yCgsAz6viRUWCUbCJk.Vz6MkfzL1tPPvpXioYDwuGQRdpATV1qb4x7mKmcXyhCmLcUGK.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLmpyaWJvLmtpd2kiLCJhIjpbImRpZGNvbW0vdjIiXX0"
);
const apollo = new SDK.Apollo();
const castor = new SDK.Castor(apollo);
const api = new SDK.ApiImpl();

function Mnemonics() {
  const [mnemonics, setMnemonics] = useAtom(mnemonicsAtom);

  function createMnemonics() {
    setMnemonics(apollo.createRandomMnemonics());
  }

  return (
      <Box>
        <h2>Mnemonics and keys</h2>

        <button onClick={createMnemonics}>Generate random mnemonics</button>
        <Spacer/>
        <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
        >
          {mnemonics
              ? mnemonics.map((word, i) => (
                  <span
                      key={i + word}
                      style={{
                        margin: 7,
                        padding: "4px 10px",
                        background: "lightgray",
                        borderRadius: 6,
                      }}
                  >
              {i + 1}. {word}
            </span>
              ))
              : null}
        </div>
      </Box>
  );
}

function KeyPair({curve = SDK.Domain.Curve.SECP256K1}: { curve?: SDK.Domain.Curve }) {
  const [mnemonics] = useAtom(mnemonicsAtom);
  // let [keyPair, setKeyPair] = React.useState<Domain.KeyPair | null>(null);
  const [keyPair, setKeyPair] = React.useState<SDK.Domain.KeyPair>();

  function createKeyPair() {
    if (!mnemonics) return;

    const seed = apollo.createSeed(mnemonics, "my-secret");
    const keyPair = apollo.createKeyPairFromKeyCurve({
      curve,
    }, seed);
    setKeyPair(keyPair);
  }

  return (
      <div
          style={{
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 20,
            margin: 20,
          }}
      >
        <h3> {curve} key pair</h3>
        <button onClick={createKeyPair}>Generate key pair</button>
        <Spacer/>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
        >
          {keyPair ? (
              <div>
                <p>
                  <b>Curve:</b> {keyPair.keyCurve.curve}
                </p>
                <p>
                  <b>Public key:</b>{" "}
                  {trimString(jose.base64url.encode(keyPair.publicKey.value), 50)}
                </p>
                <p>
                  <b>Private key:</b>{" "}
                  {trimString(jose.base64url.encode(keyPair.privateKey.value), 50)}
                </p>

                <hr/>

                <Signatures keyPair={keyPair}/>
              </div>
          ) : (
              <p>No key pair created</p>
          )}
        </div>
      </div>
  );
}

function Signatures({keyPair}: { keyPair: Domain.KeyPair }) {
  const [signatureEncoded, setSignatureEncoded] = React.useState<string | undefined>(undefined);
  const [isSignatureValid, setIsSignatureValid] = React.useState<boolean | undefined>(undefined);

  function signData() {
    const helloWorldSig = apollo.signStringMessage(
        keyPair.privateKey,
        "hello world"
    );

    setSignatureEncoded(jose.base64url.encode(helloWorldSig.value));
  }

  function verifySignature() {
    if (!signatureEncoded) return;

    let isValid;

    try {
      isValid = apollo.verifySignature(
          keyPair.publicKey,
          new TextEncoder().encode("hello world"),
          jose.base64url.decode(signatureEncoded)
      );
    } catch (e) {
      console.warn("Failed to validate signature", e);
      isValid = false;
    }

    setIsSignatureValid(isValid);
  }

  if (keyPair.keyCurve.curve === SDK.Domain.Curve.X25519) {
    return <b>Signatures not supported for X25519 keys!</b>;
  }

  return (
      <div>
        <button onClick={signData}>Sign</button>
        <p>Signature of "hello world":</p>
        <textarea
            value={signatureEncoded}
            onChange={(e) => setSignatureEncoded(e.target.value)}
        />
        <Spacer/>
        <button onClick={verifySignature}>Verify signature</button>
        <p>
          {typeof isSignatureValid === "boolean"
              ? `Signature is ${isSignatureValid ? "valid" : "invalid"}`
              : null}
        </p>
      </div>
  );
}

function Dids() {
  const [mnemonics] = useAtom(mnemonicsAtom);
  const [prismDid, setPrismDid] = React.useState<SDK.Domain.DID | null>(null);
  const [peerDid, setPeerDid] = React.useState<SDK.Domain.DID | null>(null);

  const exampleService = new SDK.Domain.Service("didcomm", ["DIDCommMessaging"], {
    uri: "https://example.com/endpoint",
    accept: ["didcomm/v2"],
    routingKeys: ["did:example:somemediator#somekey"],
  });

  async function createPrismDid() {
    if (!mnemonics) return;

    const seed = apollo.createSeed(mnemonics, "my-secret");
    const keyPair = apollo.createKeyPairFromKeyCurve({
      curve: SDK.Domain.Curve.SECP256K1,
    }, seed);
    const prismDID = await castor.createPrismDID(keyPair.publicKey, [
      exampleService,
    ]);

    setPrismDid(prismDID);
  }

  async function resolvePrismDid() {
    if (!prismDid) return;
    const didStr = prismDid.toString();
    const didDoc = await castor.resolveDID(didStr);

    console.log("DID DOC", didDoc);
  }

  async function createPeerDid() {
    if (!mnemonics) return;

    const seed = apollo.createSeed(mnemonics, "my-secret");
    const authKeyPair = apollo.createKeyPairFromKeyCurve({
      curve: Domain.Curve.ED25519,
    }, seed);
    const keyAgreementKeyPair = apollo.createKeyPairFromKeyCurve({
      curve: Domain.Curve.X25519,
    }, seed);
    const peerDID = await castor.createPeerDID(
        [authKeyPair, keyAgreementKeyPair],
        [exampleService]
    );

    setPeerDid(peerDID);
  }

  async function resolvePeerDid() {
    if (!peerDid) return;
    const didStr = peerDid.toString();
    const didDoc = await castor.resolveDID(didStr);

    console.log("DID DOC", didDoc);
  }

  return (
      <Box>
        <h3>DIDs</h3>
        <button onClick={createPrismDid}>Create PRISM DID</button>
        {prismDid ? (
            <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: 100,
                }}
            >
              <b>PRISM DID: </b>
              <div
                  style={{
                    overflow: "auto",
                    width: "100%",
                  }}
              >
                {prismDid.toString()}
              </div>
              <button style={{width: 120}} onClick={resolvePrismDid}>
                Resolve
              </button>
            </div>
        ) : null}

        <Spacer/>

        <button onClick={createPeerDid}>Create Peer DID</button>
        {peerDid ? (
            <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: 100,
                }}
            >
              <b>Peer DID: </b>
              <div
                  style={{
                    overflow: "auto",
                    width: "100%",
                  }}
              >
                {peerDid.toString()}
              </div>
              <button style={{width: 120}} onClick={resolvePeerDid}>
                Resolve
              </button>
            </div>
        ) : null}
      </Box>
  );
}


export function usePluto() {
  const [pluto, set] = useState<Pluto | null>(null);

  useEffect(() => {
    (async () => {
      const instance = new Pluto({
        type: 'sqljs',
        synchronize: true,
        location: "pluto",
        dropSchema: true,
        // sqlJsConfig: {
        //   locateFile: (filename: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.2.1/dist/${filename}`
        // },
        autoSave: true,
        useLocalForage: true,
      });
      try {
        await instance.start();
        console.log("Started pluto");
        set(instance);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return pluto;
}

export const PlutoApp: React.FC<{ pluto: SDK.Pluto }> = props => {
  // const pluto = usePluto();
  const pluto = props.pluto;
  const [dids, setDids] = useState<PrismDIDInfo[] | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const createDid = useCallback<FormEventHandler>(async (event) => {
    event.preventDefault();
    if (!pluto) {
      return;
    }
    const did = Domain.DID.fromString(value);
    const keyPathIndex = await pluto.getPrismLastKeyPathIndex();
    const privateKey: Domain.PrivateKey = {
      value: Buffer.from(`some value ${Math.random() * 100}`),
      keyCurve: Domain.getKeyCurveByNameAndIndex(Domain.Curve.X25519, keyPathIndex),
    };
    try {
      await pluto.storePrismDID(did, keyPathIndex + 1, privateKey, null, `alias: ${Math.random() * 100}`);

    } catch (error) {
      setError((error as Error).message);
    }
    const data = await pluto.getAllPrismDIDs();
    if (!data) {
      return;
    }

    setValue("");
    setError("");
    setDids(data);
  }, [pluto, value, setValue]);

  const handleInputChange = useCallback<FormEventHandler<HTMLInputElement>>((event) => {
    const {value} = event.currentTarget;
    setValue(value);
  }, []);

  useLayoutEffect(() => {
    if (!pluto || Array.isArray(dids)) {
      return;
    }
    (async () => {

      // const prismDids = await pluto.getAllPrismDIDs();
      // setDids(prismDids);
    })();
  }, [pluto, dids]);

  return (
      <Box>
        <h2>Pluto</h2>

        <button
            onClick={async () => {
              console.log("Fetch PrismDIDs");
              const prismDids = await pluto.getAllPrismDIDs();
              console.log({prismDids});
              setDids(prismDids);
            }}
        >Fetch DIDs
        </button>
        <Spacer/>

        <div className="App">
          <form onSubmit={createDid}>
            <input type="text" name="did" onChange={handleInputChange} value={value}/>
          </form>
          <button onClick={createDid}>Create DID</button>
          {error}
          {
              dids?.map((item, index) => (
                  <div key={index}>{item.did.toString()}</div>
              )) ?? null
          }
        </div>
      </Box>
  );
};

const Agent: React.FC<{ agent: SDK.Agent }> = props => {
  const [state, setState] = React.useState<string>(props.agent.state);
  const [error, setError] = React.useState<any>();
  const [newMessage, setNewMessage] = React.useState<any>([]);
  const [messages, setMessages] = React.useState<any>([]);

  const handleMessages = useCallback((event: any) => {
    const joinedMessages = [...messages, ...event];
    setMessages(joinedMessages);
    setNewMessage(joinedMessages.map(() => ""));
  }, []);


  useEffect(() => {
    props.agent.onMessage(handleMessages);
    return () => {
      props.agent.clearOnMessage(handleMessages);
    };
  }, []);

  const handleOnChange = (e: any, i: number) => {
    setNewMessage([
      ...newMessage.map((message: any, z: number) => {
        if (z === i) {
          return e.target.value;
        }
        return message;
      })
    ]);
  };

  const handleStart = async () => {
    setState("starting");
    try {
      const status = await props.agent.start();
      const mediator = props.agent.currentMediatorDID;
      if (!mediator) {
        throw new Error("Mediator not available");
      }
      const secondaryDID = await props.agent.createNewPeerDID(
          [
            new DIDDocumentService(
                "#didcomm-1",
                ["DIDCommMessaging"],
                new DIDDocumentServiceEndpoint(
                    mediator.toString()
                )
            ),
          ],
          true
      );
      const testMessage = new BasicMessage(
          {content: "Test Message"},
          secondaryDID,
          secondaryDID
      ).makeMessage();
      try {
        await props.agent.sendMessage(testMessage);
      } catch (err) {
        console.log("Safe to ignore, mediator returns null on successfully receiving the message, unpack fails.");
      }
      setState(status);
    } catch (e) {
      setError(e);
      setState("failed");
      throw e;
    }
  };

  const handleSend = async (responseMessageIndex: number) => {
    const text = newMessage[responseMessageIndex];
    setNewMessage(newMessage.map((message: any, i: number) => (i === responseMessageIndex) ? "" : message));
    const message = messages[responseMessageIndex];
    await props.agent.sendMessage(
        new BasicMessage(
            {content: text},
            message.from,
            message.from
        ).makeMessage()
    );
  };

  const handleStop = async () => {
    setState("stopping");
    await props.agent.stop();
    setState("stopped");
  };

  return (
      <Box>
        <h2>Agent</h2>
        <p>
          <b>Status:</b>&nbsp; {props.agent.state}
        </p>
        <div>
          {state === "stopped" && (
              <button style={{width: 120}} onClick={handleStart}>Start</button>
          )}
          {props.agent.state === "running" && (
              <>
                <button style={{width: 120}} onClick={handleStop}>Stop</button>
                {messages.map((message: any, i: number) => {
                  return <div key={`responseField${i}`}>
                    <p>Message {message.id} {JSON.parse(message.body).content}</p>
                    <input type="text" value={newMessage[i]} onChange={(e) => handleOnChange(e, i)}/>
                    <button style={{width: 120}} onClick={() => {
                      handleSend(i);
                    }}>Respond
                    </button>
                  </div>;
                })}
              </>
          )}
        </div>

        {error instanceof Error && (
            <pre>
          Error: {error.message}
        </pre>
        )}
      </Box>
  );
};

const useSDK = () => {
  const pluto = new Pluto({
    type: 'sqljs',
    synchronize: true,
    location: "pluto",
    dropSchema: false,
    // sqlJsConfig: {
    //   locateFile: (filename: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.2.1/dist/${filename}`
    // },
    autoSave: true,
    useLocalForage: true,
  });
  const didcomm = new SDK.DIDCommWrapper(apollo, castor, pluto);
  const mercury = new SDK.Mercury(castor, didcomm, api);
  const store = new SDK.PublicMediatorStore(pluto);
  const handler = new SDK.BasicMediatorHandler(mediatorDID, mercury, store);
  const manager = new SDK.ConnectionsManager(castor, mercury, pluto, handler);
  const words = [
    "trumpet",
    "mass",
    "anger",
    "eyebrow",
    "gadget",
    "sword",
    "debate",
    "spend",
    "move",
    "noble",
    "motor",
    "common",
    "junk",
    "feed",
    "alone",
    "whip",
    "feed",
    "front",
    "radio",
    "rookie",
    "settle",
    "provide",
    "admit",
    "peanut"
  ] as MnemonicWordList;
  const seed = apollo.createSeed(words);
  const agent = new SDK.Agent(
      apollo,
      castor,
      pluto,
      mercury,
      handler,
      manager,
      seed
  );

  return {agent, pluto};
};

function App() {
  const sdk = useSDK();

  return (
      <div className="App">
        <h1>Atala PRISM Wallet SDK Usage Examples</h1>
        <Agent agent={sdk.agent}/>
        <Mnemonics/>
        <Spacer/>

        <KeyPair curve={SDK.Domain.Curve.SECP256K1}/>
        <KeyPair curve={SDK.Domain.Curve.ED25519}/>
        <KeyPair curve={SDK.Domain.Curve.X25519}/>

        <Dids/>
        <PlutoApp pluto={sdk.pluto}/>
        <Spacer/>
      </div>
  );
}

export default App;
