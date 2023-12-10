import React from "react";
import { render, screen } from "@testing-library/react";
import PrivacyStatement from "../pages/PrivacyStatement";

describe("PrivacyStatement component", () => {
  test("renders banner text", () => {
    render(<PrivacyStatement />);
    const bannerText = screen.getByText("PRIVACY STATEMENT");
    expect(bannerText).toBeInTheDocument();
  });
});
