import { errorEventListener } from "../errors";

it("uncaught exception", () => {
  const onError = jest.fn(function onError(ev: ErrorEvent) {});

  errorEventListener({ type: "error", onError });

  expect(onError).not.toHaveBeenCalled();

  const ev = new Event("error");
  window.dispatchEvent(ev);

  expect(onError).toHaveBeenCalledTimes(1);

  expect(document.body.firstChild).toBeNull(); // Didn't pass a ui callback. First child is null
});

it("unhandled rejection", () => {
  const onError = jest.fn(function onError(ev: PromiseRejectionEvent) {});

  const errorText = "an unhandled rejection occurred";
  errorEventListener({
    type: "unhandledrejection",
    onError,
    ui: () => {
      const el = document.createElement("div");
      el.textContent = errorText;
      return el;
    },
  });

  expect(onError).not.toHaveBeenCalled();

  const ev = new Event("unhandledrejection");
  window.dispatchEvent(ev);

  expect(onError).toHaveBeenCalledTimes(1);

  expect(document.body.firstChild).toBeInstanceOf(HTMLDivElement); // Did pass a ui callback. First child is a `div` element
  expect(document.body.firstChild?.textContent).toBe(errorText);
});
