// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders App component with header and footer", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Ensure the header is rendered
  const headerElement = screen.getByTestId("home-logo");
  expect(headerElement).toBeInTheDocument();

  // Ensure the footer is rendered
  const footerElement = screen.getByText(
    "© FutureSports 2023. All rights reserved."
  );
  expect(footerElement).toBeInTheDocument();
});

test("renders Home component by default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  // Ensure the Home component is rendered by default
  const homeElement = screen.getByText("UPCOMING MATCHES");
  expect(homeElement).toBeInTheDocument();
});

// Add more tests for other routes/components as needed
