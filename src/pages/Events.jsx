import Banner from "../components/Banner";
import EventCalendar from "../components/EventCalendar";
import "../css/Events.css";

export default function Events() {
  return (
    <>
      <Banner bannerText="UPCOMING MATCHES AND EVENTS" page="events" />
      <div className="main-content">
        <h2 className="section-title">CURRENT MONTH CALENDAR</h2>
        <EventCalendar />
      </div>
    </>
  );
}
