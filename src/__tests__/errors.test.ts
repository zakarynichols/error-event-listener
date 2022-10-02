import { errorEventListener } from "../errors";

it("does not fail", () => {
  errorEventListener("error", (ev) => {
    console.log("Uncaught Exception: ", ev);
  });
});
