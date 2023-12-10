import React from "react";
import { render, screen } from "@testing-library/react";
import Fanzone from "../pages/Fanzone";

describe("Fanzone component", () => {
  test("renders banner text", () => {
    render(<Fanzone />);
    const bannerText = screen.getByText("WELCOME TO THE FAN ZONE");
    expect(bannerText).toBeInTheDocument();
  });

  test("renders Forum component", () => {
    render(<Fanzone />);
    const forumComponent = screen.getByTestId("forum-component");
    expect(forumComponent).toBeInTheDocument();
  });
});
