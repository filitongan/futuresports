import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import News from "../pages/News";

test("renders News component with expected elements", () => {
  render(
    <MemoryRouter>
      <News />
    </MemoryRouter>
  );

  expect(screen.getByText("NEWS")).toBeInTheDocument();

  expect(screen.getByText("ALL NEWS")).toBeInTheDocument();

  const newsItems = [
    "News 1",
    "Video 1",
    "News 3",
    "News 4",
    "News 5",
    "News 6",
    "Video 3",
    "News 8",
    "Video 4",
    "News 10",
    "News 11",
    "News 12",
    "News 2",
    "Video 2",
    "News 7",
    "News 9",
  ];

  newsItems.forEach((item) => {
    expect(screen.getByAltText(item)).toBeInTheDocument();
  });
});
