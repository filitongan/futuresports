import { render, screen } from "@testing-library/react";
import PlaceholderText from "../components/PlaceholderText";

test("renders PlaceHolderText component with expected text", () => {
  render(<PlaceholderText />);

  const textElements = screen.getAllByText(/Lorem/i);

  expect(textElements.length).toBeGreaterThan(1);
});
