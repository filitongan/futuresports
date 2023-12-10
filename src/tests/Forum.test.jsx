import { render, screen, fireEvent } from "@testing-library/react";
import Forum from "../components/Forum";

describe("Forum Component", () => {
  test("renders forum component with initial post", () => {
    render(<Forum />);

    const initialPost = screen.getByText("MATT, VANCOUVER CANADA");
    expect(initialPost).toBeInTheDocument();
  });

  test("allows submitting a new post", () => {
    render(<Forum />);

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByPlaceholderText("Location"), {
      target: { value: "Random Location" },
    });
    fireEvent.change(screen.getByPlaceholderText("Write your post here..."), {
      target: { value: "Here is a test post" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    const newPostUserDetails = screen.getByText("Test User, Random Location");
    expect(newPostUserDetails).toBeInTheDocument();

    const newPostMessage = screen.getByText("Here is a test post");
  });
});
