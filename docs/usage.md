# Usage

The only requirement is to register the listener in module scope, not function

```ts
/*
    Register the listener at the highest level of the app, preferably outside the root app. 

    If using React, make sure to register outside `root.render`.
*/
errorEventListener({
  type: "unhandledrejection",
  onError,
  ui,
});

function app() {
  /* Example main function that wraps the app. */
}

/*
    Both functions below are hoisted and used in the listener above.
*/

// Create a basic fallback ui
function ui() {
  const el = document.createElement("div");
  el.textContent = "example fatal error text.";
  return el;
}

// Log the `ErrorEvent` instance to the console
function onError(ev: ErrorEvent) {
  console.error("app exception occurred: ", ev);
}
```
