import React from "react";
import renderer from "react-test-renderer";
import { ModalContextProvider } from "../../context/modalContext";
import Schedule from "../Schedule.tsx";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ModalContextProvider>
        <Schedule />
      </ModalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
