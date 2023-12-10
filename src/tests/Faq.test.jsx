import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Faq from "../pages/Faq";

describe("Faq component", () => {
  test("renders banner text", () => {
    render(<Faq />);
    const bannerText = screen.getByText("FREQUENTLY ASKED QUESTIONS");
    expect(bannerText).toBeInTheDocument();
  });

  test("updates search input value", () => {
    render(<Faq />);
    const searchInput = screen.getByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "Test Query" } });

    expect(searchInput.value).toBe("Test Query");
  });
  test("highlights text on search button click", () => {
    render(<Faq />);

    const searchButton = screen.getByText("SEARCH");
    const searchInput = screen.getByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "Lorem" } });
    fireEvent.click(searchButton);

    const elementsWithClassName =
      document.getElementsByClassName("highlighted");
    expect(elementsWithClassName.length).toBeGreaterThan(0);
  });
});
