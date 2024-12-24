import "./About.css";
import headshot from "../images/headshot-beach.png";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="center-container">
        <div className="window">
          <div className="window-header">
            <div className="window-buttons">
              <button 
                className="window-button window-button-red"
                onClick={() => navigate("/")}
              ></button>
              <button 
                className="window-button window-button-yellow"
                onClick={() => navigate("/")}
              ></button>
              <button className="window-button"></button>
            </div>
          </div>
          <div className="window-content">
            <div className="about-photo">
              <div className="photo-container">
                <img src={headshot} alt="Nolan" className="photo"></img>
              </div>
            </div>
            <div className="about-details">
              <h1 className="about-name">Nolan <span className="about-name-thin">Kyhl</span></h1>
              <p className="about-version">Version 1.0</p>
              <p className="about-stat">Human (H1, 2003)</p>
              <p className="about-stat">Chip&emsp;<span className="about-stat-thin">Pringles</span></p>
              <p className="about-stat">Memory&emsp;<span className="about-stat-thin">Decent</span></p>
              <p className="about-stat">Serial Number&emsp;<span className="about-stat-thin">nolan@kyhl.com</span></p>
            </div>
          </div>
          <div className="window-footer">
            <p>™️ and © 2003-2024 Nolan Inc. All Rights Reserved. License Agreement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
