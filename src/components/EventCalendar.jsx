import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { eventList } from "../helpers/events.js";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function EventCalendar() {
  return (
    <div className="event-calendar">
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
