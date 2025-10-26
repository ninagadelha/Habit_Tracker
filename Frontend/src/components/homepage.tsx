import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const rowsOfDays = [
  ["Monday", "Tuesday", "Wednesday"],
  ["Thursday", "Friday"],
  ["Saturday", "Sunday"]
];

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Consistency is Key</h1>
      {rowsOfDays.map((row, rowIndex) => (
        <div className="cards-row" key={rowIndex}>
          {row.map((day) => (
            <div
              key={day}
              className="day-card"
              onClick={() => navigate(`/${day.toLowerCase()}`)}
            >
              <h2>{day}</h2>
              <p>Schedule</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Homepage;
