import { useNavigate } from "react-router-dom";
import "./Calendar.css";

export default function Calendar() {
  const navigate = useNavigate();

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
            <li>
              <div className="event-header">PARIVEDA — INCOMING 2025</div>
              <div className="event-detail orange-bar">Software Engineer, Consultant I</div>
              <div className="event-detail orange-bar">Chicago, Illinois</div>
            </li>
            <li>
              <div className="event-header">BNY — SUMMER 2024</div>
              <div className="event-detail teal-bar">Software Engineer Intern</div>
              <div className="event-detail teal-bar">Pittsburgh, Pennsylvania</div>
            </li>
            <li>
              <div className="event-header">HARBOR CAPITAL ADVISORS — SUMMER 2023</div>
              <div className="event-detail navy-bar">Software & Data Engineer Intern</div>
              <div className="event-detail navy-bar">Chicago, Illinois</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
