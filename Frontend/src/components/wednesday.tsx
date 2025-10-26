import React from "react";
import { useNavigate } from "react-router-dom";

function Wednesday() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h1>Wednesday</h1>
      <p>This is Wednesday's page!</p>
      <button onClick={() => navigate("/home")}>Go Back</button>
    </div>
  );
}

export default Wednesday;