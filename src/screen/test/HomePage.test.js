import { render, fireEvent } from "@testing-library/react";
import { HomePage } from "../HomePage";

const setup = () => {
  const { container, getByTestId } = render(<HomePage />);
  return { container, getByTestId };
};

describe("HomePage", () => {
  it("renders homepage component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it("click on search", () => {
    const { container, getByTestId } = setup();
    const searchInput = getByTestId("input-search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe('test');
    const searchBtn = getByTestId("searchBtn");
    fireEvent.click(searchBtn);
    expect(container).toMatchSnapshot();
  });
});
