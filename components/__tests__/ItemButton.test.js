import React from "react";
import renderer from "react-test-renderer";
import { ModalContextProvider } from "../../context/modalContext";
import ItemButton from "../ItemButton";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ModalContextProvider>
        <ItemButton />
      </ModalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
