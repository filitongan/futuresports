import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

test("renders Header component with expected nav links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const homeLinks = screen.getAllByRole("link", { name: /HOME/i });
  expect(homeLinks.length).toBeGreaterThan(1);

  const teamLinks = screen.getAllByRole("link", { name: /TEAM/i });
  expect(teamLinks.length).toBeGreaterThan(1);

  const eventsLinks = screen.getAllByRole("link", { name: /EVENTS/i });
  expect(eventsLinks.length).toBeGreaterThan(1);

  const newsLinks = screen.getAllByRole("link", { name: /NEWS/i });
  expect(newsLinks.length).toBeGreaterThan(1);

  const fanzoneLinks = screen.getAllByRole("link", { name: /FAN ZONE/i });
  expect(fanzoneLinks.length).toBeGreaterThan(1);
});
