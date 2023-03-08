const Mediator = {
  createTable: `CREATE TABLE IF NOT EXISTS Mediator (
    id TEXT NOT NULL UNIQUE, -- VARCHAR(36)
    mediatorDIDId TEXT NOT NULL,
    hostDIDId TEXT,
    routingDIDId TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (mediatorDIDId) REFERENCES DID(did),
    FOREIGN KEY (hostDIDId) REFERENCES DID(did),
    FOREIGN KEY (routingDIDId) REFERENCES DID(did)
);

`,

  insert: `
    INSERT INTO Mediator(id, mediatorDIDId, hostDIDId, routingDIDId)
VALUES (?, ?, ?, ?);
    `,

  fetchAllMediators: `
    SELECT Mediator.id, mediatorDID.did AS MediatorDID, hostDID.did AS HostDID, routingDID.did AS RoutingDID
FROM Mediator
JOIN DID AS mediatorDID
ON Mediator.mediatorDIDId = mediatorDID.methodId
JOIN DID AS hostDID
ON Mediator.hostDIDId = hostDID.methodId
JOIN DID AS routingDID
ON Mediator.routingDIDId = routingDID.methodId;
    `,

};

export type MediatorQueriesTypes = "createTable" | "insert" | "fetchAllMediators"
export default Mediator;
