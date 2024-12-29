import { useNavigate } from "react-router-dom";
import "./Calendar.css";

export default function Calendar() {
  const navigate = useNavigate();

  const events = [
    {
      title: "PARIVEDA — INCOMING 2025",
      details: ["Software Engineer, Consultant I", "Chicago, Illinois"],
      color: 'orange-bar'
    },
    {
      title: "BNY — SUMMER 2024",
      details: ["Software Engineer Intern", "Pittsburgh, Pennsylvania"],
      color: 'teal-bar'
    },
    {
      title: "HARBOR CAPITAL ADVISORS — SUMMER 2023",
      details: ["Software & Data Engineer Intern", "Chicago, Illinois"],
      color: 'navy-bar'
    },
  ]

  return (
    <div className="App">
      <div className="scrollable-page">
        <header className="calendar-header">
          <button className="calendar-close-btn"
            onClick={() => navigate('/')
          }>◁ Home</button>
        </header>
        <div className="calendar-events">
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <div className="event-header">{event.title}</div>
                {event.details.map((detail, index) => (
                  <div key={index} className={"event-detail " + event.color}>{detail}</div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
