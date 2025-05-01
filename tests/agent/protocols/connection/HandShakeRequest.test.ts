import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Message } from "../../../../src/domain";
import * as Fixtures from "../../../fixtures";
import { HandshakeRequest, ProtocolType } from '../../../../src';

describe("HandShakeRequest Test", () => {
  it("Should create a HandshakeRequest from a valid HandShakeRequest Message", () => {
    const fromDID = Fixtures.DIDs.peerDID1;
    const toDID = Fixtures.DIDs.peerDID2;
    const request = new HandshakeRequest(
      {
        goal: "Test",
        goal_code: "1",
        accept: ["Test1"],
      },
      fromDID,
      toDID,
      "0"
    );

    const message = request.makeMessage();
    expect(message.id).to.equal(request.id);
    expect(message.piuri).to.equal(HandshakeRequest.type);
    expect(message.from?.toString()).to.equal(request.from.toString());
    expect(message.to?.toString()).to.equal(request.to.toString());
    expect(message.thid).to.equal(request.thid);

    const result = HandshakeRequest.fromMessage(message, fromDID);

    expect(result.body).to.deep.equal(request.body);
  });

  it("Should create HandShakeRequest from a valid InvitationMessage", () => {
    const fromDID = Fixtures.DIDs.peerDID1;
    const toDID = Fixtures.DIDs.peerDID2;
    const body = {
      goal: "Test",
      goalCode: "123",
      accept: ["Test1"],
    };

    const exampleMessage = new Message(
      JSON.stringify(body),
      undefined,
      ProtocolType.Didcomminvitation,
      fromDID,
      toDID
    );

    const selfDID = Fixtures.DIDs.peerDID3;

    const request = HandshakeRequest.fromMessage(exampleMessage, selfDID);

    expect(exampleMessage.id).to.not.equal(request.id);
    expect(selfDID.toString()).to.equal(request.from.toString());
    expect(exampleMessage.from?.toString()).to.equal(request.to.toString());
    expect(exampleMessage.id).to.equal(request.thid);
    expect(body).to.deep.equal(request.body);
  });
});
