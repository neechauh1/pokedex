import React from "react";
import Search from "../Search";
const MockedDropDown = (props) => <Search />;
jest.mock("../Search", () => {
  return (props) => <MockedDropDown {...props} />;
});
// jest.mock("../CheckBoxList", () => {
//   return (props) => <MockedRadioListComponent {...props} />;
// });
