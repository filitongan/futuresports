import React from "react";
import { render, screen } from "@testing-library/react";
import Video from "../pages/Video";

test("renders Video component with expected elements", () => {
  render(<Video />);

  expect(screen.getByText("VIDEO")).toBeInTheDocument();
  expect(screen.getByText("VIDEO TITLE")).toBeInTheDocument();

  const videoElement = screen.getByTestId("video");
  expect(videoElement).toBeInTheDocument();
  expect(videoElement).toHaveAttribute("controls");

  expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
});
