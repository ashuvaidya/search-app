import React from "react";
import { render } from "@testing-library/react";
import App from "../App.js";

describe("testing for App", () => {
  it("snapshot for App", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
