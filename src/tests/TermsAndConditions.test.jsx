import React from "react";
import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../pages/TermsAndConditions";

describe("TermsAndConditions component", () => {
  test("renders banner text", () => {
    render(<TermsAndConditions />);
    const bannerText = screen.getByText("TERMS AND CONDITIONS");
    expect(bannerText).toBeInTheDocument();
  });
});
