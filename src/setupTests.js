// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

expect.extend({
  toHaveTaskName(received, value) {
    return received.value === value
      ? {
          pass: true,
          message: () => "OK",
        }
      : {
          pass: false,
          message: () => `KO`,
        };
  },
});
