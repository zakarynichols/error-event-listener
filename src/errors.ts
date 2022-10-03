/**
 * Register a global error event listener. Can be used with any JavaScript application to catch all exceptions/rejections.
 *
 * If using React, make sure to register this function in module scope outside of `root.render`.
 *
 * @param type Error event key
 * @param onError Error event handler with accessible error event object
 * @param ui Supply a function that returns a single DOM element to render as a fallback UI
 */
export function errorEventListener<K extends keyof ErrorEventMap>(params: {
  type: K;
  onError: (ev: ErrorEventMap[K]) => void;
  ui?: () => Element;
}) {
  window.addEventListener(params.type, (ev) => {
    params.onError(ev);
    if (params.ui !== undefined) {
      const el = params.ui();
      document.body.replaceChildren(el);
    }
  });
}

// Pick the keys from the window event map we want to use.
type ErrorEventMap = Pick<WindowEventMap, "error" | "unhandledrejection">;
