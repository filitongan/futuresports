import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TeamTable from "../components/TeamTable";

describe("TeamTable component", () => {
  test("renders table headers and data correctly", () => {
    render(<TeamTable />);

    expect(screen.getByText("PLAYER")).toBeInTheDocument();
    expect(screen.getByText("POSITION")).toBeInTheDocument();
    expect(screen.getByText("AGE")).toBeInTheDocument();
    expect(screen.getByText("HEIGHT")).toBeInTheDocument();
    expect(screen.getByText("WEIGHT")).toBeInTheDocument();
    expect(screen.getByText("CAPS")).toBeInTheDocument();

    expect(screen.getByText("Malakai Feki")).toBeInTheDocument();
    expect(screen.getAllByText("Prop").length).toBeGreaterThan(1);
    expect(screen.getByText("31")).toBeInTheDocument();
    expect(screen.getByText("188 cm")).toBeInTheDocument();
    expect(screen.getByText("115 kg")).toBeInTheDocument();
    expect(screen.getByText("140")).toBeInTheDocument();
  });
});
