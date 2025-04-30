## Plugins
The plugins are designed to enable extending the behaviours of the SDK without modifying the source code.

There are currently two parts to a plugin:

### Modules
A module gets added to the Context that all Tasks run within.
Allowing a means of defining a shared interface across all Tasks.

### Tasks
Tasks allow for registering of handlers that implement the desired functionality.
They are registered with an identifier by which they are searched for and executed.


```TS
export type Modules = { MyModuleKey: MyModule; };
export type Context = Plugins.Context<Modules>;

const plugin = new Plugin();
plugin.addModule("MyModuleKey", new MyModule())
plugin.register("myTaskIdentifier", MyTaskHandler)
```

Currently the main use case is on receiving a DIDComm Message, we search for and run a task based on the `piuri`.

In the above example code, if the SDK was to receive a DIDComm message 
with a `piuri` of `myTaskIdentifier` then it would find an run `MyTaskHandler`.
