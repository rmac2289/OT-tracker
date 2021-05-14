import React from "react";
import renderer from "react-test-renderer";
import { ModalContextProvider } from "../../context/modalContext";
import UpdateOtModal from "../UpdateOtModal";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ModalContextProvider>
        <UpdateOtModal />
      </ModalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
