import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../components/Banner";

describe("Banner component", () => {
  test("renders with correct banner text", () => {
    render(<Banner bannerText="Custom Banner Text" page="team" />);

    const bannerElement = screen.getByText("Custom Banner Text");
    expect(bannerElement).toBeInTheDocument();
  });

  test("throws error without required props", () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    render(<Banner />);
    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});
