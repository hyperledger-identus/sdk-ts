# Pluto

Pluto is the SDK storage layer, responsible for the saving and retrieval of data within the SDK.
As storage is a complex issue Pluto has been designed to try and enable maximum flexibility balanced with ease-of-use. Multiple levels of abstraction are provided so an implementation can be curated specifically to the use-case.
In an effort to reduce the minimum amount of work required to get started with the SDK, implementations of the top-most abstractions are provided, but the underlying data layer is not and will require some work.

The levels of abstraction are described below:


## Top level interface
An SDK specific interface, detailing all the necessary storage functions for operation.

This interface defines the specific functions requried by the SDK, and while it's input and output are all Domain classes, it provides no opinion on how they are handled internally.
This approach allows for maximum customisation, constrained only by the interface contract.

The top level interface can be found at [SDK.Domain.Pluto](../sdk/overview/namespaces/Domain/namespaces/Pluto/README.md) alongside our other top level interfaces.


```TS
  import { Domain } from "@hyperledger/identus-edge-agent-sdk";

  class CustomPluto implements Domain.Pluto {
    storeMessage(message: Domain.Message): Promise<void> {
      // implementation
    }

    getAllMessages(): Promise<Domain.Message[]> {
      // implementation
    }

    // ...etc
  }

  const pluto = new CustomPluto();
  const agent = Agent.initialize({ pluto, ...etc });
```


## Store
A general purpose CRUD interface, with a pre-designed Table structure and significantly smaller footprint than the top level interface.

Designed to be used with the existing Pluto implementation, where Pluto handles the logic and orchestration from Domain classes to Storable models, and the Store handles the persistence of those models.

The Store revolves around a storable object, which is an arbitrary object with a `uuid` property that uniquely identifies the object. 
The interface can be found at [SDK.Pluto.Store](../sdk/overview/namespaces/Pluto/interfaces/Store.md)

```TS
  import { Domain, Pluto, Agent } from "@hyperledger/identus-sdk";

  class CustomStore implements Domain.Pluto.Store {
    insert<T extends Domain.Pluto.Storable>(table: string, model: T): Promise<void> {
      // implementation
    }

    query<T extends Domain.Pluto.Storable>(table: string, query?: MangoQuery<T>): Promise<T[]> {
      // implementation
    }

    update<T extends Domain.Pluto.Storable>(table: string, model: T): Promise<void> {
      // implementation
    }

    delete(table: string, uuid: string): Promise<void> {
      // implementation
    }
  }

  const store = new CustomStore();
  const pluto = new Pluto(store, apollo);
  const agent = Agent.initialize({ pluto, apollo, ...etc });
```