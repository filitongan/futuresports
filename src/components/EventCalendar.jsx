import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

//setup localizer to configure date and time for react-big-calendar
const localizer = momentLocalizer(moment);

//Event calendar component
export default function EventCalendar({ eventList }) {
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
