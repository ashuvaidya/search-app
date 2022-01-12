import React from "react";
import { render } from "@testing-library/react";
import { ResultCard } from "../ResultCard";

describe("testing for result card component", () => {
  it("render result card component", () => {
    const props = {
      data: {
        title: "test",
        description: "test",
        tags: ["test"],
        weight: 0,
      },
      id: "test",
    };
    const { container } = render(<ResultCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
