import React from "react";
import renderer from "react-test-renderer";
import { ModalContextProvider } from "../../context/modalContext";
import ItemList from "../ItemList";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ModalContextProvider>
        <ItemList />
      </ModalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
