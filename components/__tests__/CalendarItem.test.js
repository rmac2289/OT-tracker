import React from "react";
import renderer from "react-test-renderer";
import { ModalContextProvider } from "../../context/modalContext";
import CalendarItem from "../CalendarItem.tsx";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ModalContextProvider>
        <CalendarItem />
      </ModalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
