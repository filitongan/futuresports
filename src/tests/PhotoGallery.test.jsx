import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoGallery from "../components/PhotoGallery";

describe("PhotoGallery Component", () => {
  test("renders all images in the carousel", () => {
    const { getAllByAltText } = render(<PhotoGallery />);
    const images = getAllByAltText(/Banner/);
    const uniqueImages = Array.from(new Set(images.map((img) => img.src)));
    expect(uniqueImages).toHaveLength(3);
  });
});
