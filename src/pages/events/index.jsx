import { useEffect, useState } from "react";
import { EventItem } from "../../component/event-item";
import EditEventForm from "../../component/events-edit";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { mockFetch } from "../../utils/mockFetch";
const token = localStorage.getItem("token");
export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    setLoading(true);
    mockFetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        setError("произошла ошибка");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapperEvents">
      {token ? (
        <div className="wrapperForCreate">
        <NavLink className="create" to="/events/create">
          Cоздать событие
        </NavLink>
        </div>
      ) : (
        <p></p>
      )}
      <div className="box-event">
        {loading && <div>Loading...</div>}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {events.map((e) => (
          <div className="events-container">
          <EventItem key={e.id} event={e} />
          </div>
                  ))}
      </div>
    </div>
  );
};
