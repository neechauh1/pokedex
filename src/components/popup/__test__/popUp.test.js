import React from "react";
import renderer from "react-test-renderer";
import PopUp from "../PopUp";

it("Image should render correctly", () => {
  const tree = renderer
    .create(<PopUp source={{ uri: "fake-image" }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
