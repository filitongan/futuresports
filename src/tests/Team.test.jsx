import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Team from "../pages/Team";

test("renders Team component with expected elements", () => {
  render(
    <MemoryRouter>
      <Team />
    </MemoryRouter>
  );

  expect(screen.getByText("FUTURE SPORTS SQUAD")).toBeInTheDocument();
  expect(screen.getByText("MEN'S SQUAD")).toBeInTheDocument();
  expect(screen.getByTestId("team-table")).toBeInTheDocument();
});
