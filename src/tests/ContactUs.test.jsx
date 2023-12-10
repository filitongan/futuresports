import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../pages/ContactUs";
import { waitFor } from "@testing-library/react";

describe("ContactUs component", () => {
  test("renders ContactUs component", () => {
    render(<ContactUs />);
    expect(screen.getByText("CONTACT US")).toBeInTheDocument();
    expect(screen.getByText("Contact Information")).toBeInTheDocument();
  });

  test('renders default values and selects "Fan Feedback"', () => {
    render(<ContactUs />);
    expect(screen.getByDisplayValue("Fan Feedback")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Email:")).toHaveValue("");
    expect(screen.getByLabelText("Your Message:")).toHaveValue("");
  });

  test("updates email state on input change", () => {
    render(<ContactUs />);
    const emailInput = screen.getByLabelText("Your Email:");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");
  });

  test("updates message state on input change", () => {
    render(<ContactUs />);
    const messageInput = screen.getByLabelText("Your Message:");
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    expect(messageInput).toHaveValue("Test message");
  });

  test("validates and submits form successfully", async () => {
    render(<ContactUs />);
    const emailInput = screen.getByLabelText("Your Email:");
    const messageInput = screen.getByLabelText("Your Message:");
    const submitButton = screen.getByText("Send Message");

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(messageInput, {
      target: { value: "Long message over 500 characters".repeat(20) },
    });

    fireEvent.click(submitButton);

    expect(
      screen.getByText(
        "Invalid email format! Please enter an email with format like: myemail@gmail.com"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Message must be under 500 characters!")
    ).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Short message" } });

    fireEvent.click(submitButton);

    expect(await screen.findByText("Message Sent!")).toBeInTheDocument();
  });
});
