import { render, screen } from "@testing-library/react";
import Events from "../pages/Events";

test("renders Events component", () => {
  render(<Events />);

  const bannerTextElement = screen.getByText(/UPCOMING MATCHES AND EVENTS/i);
  expect(bannerTextElement).toBeInTheDocument();

  const sectionTitleElement = screen.getByText(/CURRENT MONTH CALENDAR/i);
  expect(sectionTitleElement).toBeInTheDocument();

  const eventCalendarElement = screen.getByTestId("event-calendar");
  expect(eventCalendarElement).toBeInTheDocument();
});
