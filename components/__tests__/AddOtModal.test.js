import React from "react";
import renderer from "react-test-renderer";
import { ModalContextProvider } from "../../context/modalContext";
import AddOtModal from "../AddOtModal";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ModalContextProvider>
        <AddOtModal />
      </ModalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
