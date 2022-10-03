import React from "react";
import { ReactDOM } from "react-dom";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Option from "../Option";

it("Button Test case with More", () => {
  const tree = renderer.create(<Option title="More Button" type={"more"} />);
  expect(tree).toMatchSnapshot();
});

test("background color should be  white", () => {
  render(<Option />);

  //   const styles = getComputedStyle(element);

  expect(Option.background).toEqual("#C9DDE2");
});

it("Renders with a className equal to the variant", () => {
  const { isOptionActive } = render(<Option variant="default" />);

  expect(isOptionActive).toHaveClass("white-class");
});
