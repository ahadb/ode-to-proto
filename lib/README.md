### Ode To Prototypes and Instance creation

People still write JavaScript this way ;-) Create a medium or large sized JavaScript libarary and expose it to the
world using these fundamental patterns.

* Prototype
* Create instance (bind, extend)
* CommonJS for modules

This library has no dependencies, just take a note of that, pause and think about it. There are also many of the usual suspects you see in a standard repo as a baseline.

If you decide to have a quick peak under the hood, things should be self documenting. Beware, you'll need to package it up whichever way you choose as you give birth to your lovely object for the world to consume.

```bash
[Function: wrap] {
  get: [Function: wrap],
  set: [Function: wrap],
  hasOwnProperty: [Function: wrap],
  propetyIsEnumerable: [Function: wrap],
  toString: [Function: wrap],
  valueOf: [Function: wrap],
  defaults: { 
      baz: { quux: false, baam: true }, 
      init: [Function: init] },
  foo: { 
        baz: Map(0) {}, 
        bar: Set(0) {} 
      },
  Explode: [Function: Explode],
  VERSION: { 
        version: '0.01' 
      }
}
```

