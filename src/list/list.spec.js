import React from "react";
import { render } from "@testing-library/react";
import List from "./list";
import userEvent from "@testing-library/user-event";

jest.mock("../list-item/list-item", () => ({ label }) => <li>{label}</li>);

describe("<List />", () => {
  describe("should display an HTML list", () => {
    it("should not disply a list", () => {
      const { container } = render(<List />);
      expect(container.querySelector("ul")).toBeNull();
    });
    it("should not disply a list", () => {
      const { container } = render(<List todos={[]} />);
      expect(container.querySelector("ul")).toBeNull();
    });
    it("should not disply a list", () => {
      const { container } = render(
        <List todos={[{ label: 1 }, { label: 2 }]} />
      );
      expect(container.querySelector("ul")).not.toBeNull();
      expect(container.querySelectorAll("li")).toHaveLength(2);
    });
  });
  describe("should display a add input", () => {
    it("the enter button should be disabled if the input is empty", () => {
      const { getByRole } = render(
        <List
          todos={[
            { label: 1, done: true },
            { label: 2, done: false },
          ]}
        />
      );
      expect(getByRole("button")).toBeDisabled();
    });
    it("the enter button should be enabled if the input is not empty", () => {
      const { getByRole } = render(
        <List
          todos={[
            { label: 1, done: true },
            { label: 2, done: false },
          ]}
        />
      );
      userEvent.type(getByRole("searchbox"), "3");
      expect(getByRole("button")).not.toBeDisabled();
    });
    it("the call the onAdd prop after clicking on the button", () => {
      const onAdd = jest.fn();
      const { getByRole } = render(
        <List
          todos={[
            { label: 1, done: true },
            { label: 2, done: false },
          ]}
          onAdd={onAdd}
        />
      );
      userEvent.type(getByRole("searchbox"), "3");
      userEvent.click(getByRole("button"));
      expect(onAdd).toHaveBeenCalledWith({ label: "3" });
      expect(getByRole("searchbox")).toHaveTaskName("");
    });
  });
});
