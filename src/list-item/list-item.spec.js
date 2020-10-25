import React from "react";
import ListItem from "./list-item";
import { render, fireEvent } from "@testing-library/react";

describe("<ListItem />", () => {
  describe("should display a checkbox", () => {
    it("for each items of the list", () => {
      const { container } = render(
        <ListItem todo={{ label: 2, done: false }} />
      );

      expect(
        container.querySelector("input[type='checkbox']")
      ).toBeInTheDocument();
    });
    it("that is checked for completed tasks", () => {
      const { container } = render(
        <ListItem todo={{ label: 2, done: true }} />
      );

      expect(container.querySelector("input")).toBeChecked();
    });
    it("that is unchecked for uncompleted tasks", () => {
      const { container } = render(
        <ListItem todo={{ label: 2, done: false }} />
      );

      expect(container.querySelector("input")).not.toBeChecked();
    });
    describe("when we click on it", () => {
      it("should call the function", () => {
        const callback = jest.fn();
        const { container } = render(
          <ListItem todo={{ label: 1 }} onCheck={callback} />
        );
        fireEvent.click(container.querySelector("input"));
        expect(callback).toHaveBeenCalledWith({ label: 1 });
      });
    });
  });
});
