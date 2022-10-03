import { errorEventListener } from "../errors";

beforeEach(() => {
  // JSDOM doesn't clean up the DOM so we must do it manually.
  document.body.firstChild?.remove();
});

it("uncaught exception", () => {
  // Notice the `ErrorEvent` instance.
  const onError = jest.fn(function onError(_ev: ErrorEvent) {
    // no-op
  });

  errorEventListener({ type: "error", onError });

  expect(onError).not.toHaveBeenCalled();

  window.dispatchEvent(new Event("error"));

  expect(onError).toHaveBeenCalledTimes(1);
});

it("unhandled rejection", () => {
  // Notice the `PromiseRejectionEvent` instance.
  const onError = jest.fn(function onError(_ev: PromiseRejectionEvent) {
    // no-op
  });

  errorEventListener({
    type: "unhandledrejection",
    onError,
  });

  expect(onError).not.toHaveBeenCalled();

  window.dispatchEvent(new Event("unhandledrejection"));

  expect(onError).toHaveBeenCalledTimes(1);
});

it("renders a fallback ui", () => {
  const errorText = "an unhandled rejection occurred";

  // Build a fallback ui with the built-in DOM methods. When an error occurs
  // this function will be called and the returned element appended to the `body`.
  function ui() {
    const el = document.createElement("div");
    el.textContent = errorText;
    return el;
  }

  const mockUi = jest.fn(ui);

  errorEventListener({
    type: "unhandledrejection",
    onError: jest.fn(),
    ui: mockUi,
  });

  expect(mockUi).not.toHaveBeenCalled();
  expect(document.body.firstChild).toBeNull();

  window.dispatchEvent(new Event("unhandledrejection"));

  expect(mockUi).toHaveBeenCalledTimes(1);

  expect(document.body.firstChild).toBeInstanceOf(HTMLDivElement);
  expect(document.body.firstChild?.textContent).toBe(errorText);
});
