import React from "react";
import { render, screen } from "@testing-library/react";
import EventCalendar from "../components/EventCalendar";

test("renders EventCalendar component with expected event text", () => {
  const eventList = [
    {
      id: 0,
      title: "Test Event",
      allDay: true,
      start: new Date(2023, 11, 8),
      end: new Date(2023, 11, 9),
    },
  ];
  render(<EventCalendar eventList={eventList} />);

  const calendarEvent = screen.getByText("Test Event");
  expect(calendarEvent).toBeInTheDocument();
});
