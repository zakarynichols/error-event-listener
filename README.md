# Error Event Listener

The `errorEventListener()` function is a type-safe way to listen for all exceptions/rejections and render an optional fallback ui when a fatal error occurs.

The main motivation for this project was to listen to exceptions/rejections outside React and optionally provide a fallback ui to prevent a user from proceeding further with the app in a fatal state.

_Note_ - This can be used in any application, but React is a prime example to showcase the listeners usage when a fatal error occurs outside its render tree.

## Usage

```ts
// Register the exception listener.
errorEventListener({
  type: "error", // String literal type to help TypeScript
  onError, // Perform some logic when the error event fires
  ui, // Return an Element instance or extend it
});
```
