import React from "react";
import renderer from "react-test-renderer";
import { ModalContextProvider } from "../../context/modalContext";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ModalContextProvider>
        <ConfirmDeleteModal />
      </ModalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
