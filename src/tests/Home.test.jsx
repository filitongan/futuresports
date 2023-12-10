import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

test("renders Home component with expected elements", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("Photo Gallery")).toBeInTheDocument();
  expect(screen.getByText("Weather Information")).toBeInTheDocument();
  expect(screen.getByText("UPCOMING MATCHES")).toBeInTheDocument();
  expect(screen.getByText("LATEST NEWS")).toBeInTheDocument();
  expect(screen.getByText("LATEST VIDEOS")).toBeInTheDocument();
});
