import React from "react";
import { render, screen } from "@testing-library/react";
import NewsArticle from "../pages/NewsArticle";

describe("NewsArticle component", () => {
  test("renders banner text", () => {
    render(<NewsArticle />);
    const bannerText = screen.getByText("NEWS ARTICLE");
    expect(bannerText).toBeInTheDocument();
  });
});
