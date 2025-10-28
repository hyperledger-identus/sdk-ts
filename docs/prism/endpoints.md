---
id: endpoints
title: Community DID:PRISM Resolver Endpoints
---

This page provides a list of community-maintained resolver endpoints for `did:prism`. These endpoints can be used to resolve `did:prism` DIDs without needing to run your own infrastructure.

## Public Resolver Endpoints

Here is a list of public endpoints that you can use:

| Endpoint URL | Maintained By | Notes |
| :--- | :--- | :--- |
| `https://Your endpoint` | Community | Mainnet resolver. |

To resolve a DID, you can make a `GET` request to the resolver's `/1.0/identifiers/{did}` path.

**Example using cURL:**

```bash
curl 'https://Your endpoint/1.0/identifiers/did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae' | jq
```

## Running Your Own Resolver

If you prefer to run your own resolver, you can use the community-provided Docker image. This gives you a private instance that you control.

The source code for the resolver driver can be found on [GitHub](https://github.com/FabioPinheiro/uni-resolver-driver-did-prism).

### Using Docker

The resolver is available as a Docker image.

**1. Pull the Docker image:**

```bash
docker pull ghcr.io/fabiopinheiro/uni-resolver-driver-did-prism:1.1
```

**2. Run the Docker container:**
The container listens on port `9090` by default. You can map it to any port on your host machine.

```bash
docker run -it --rm -p 9090:9090 ghcr.io/fabiopinheiro/uni-resolver-driver-did-prism:1.1
```

**3. Test your local resolver:**
Once the container is running, you can test it by trying to resolve a DID:

```bash
curl 'http://localhost:9090/1.0/identifiers/did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae' | jq
```

If you wish to contribute by adding your public resolver to this list, please submit a pull request to update this page.
