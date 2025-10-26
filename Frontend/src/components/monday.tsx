import React from "react";
import { useNavigate } from "react-router-dom";

function Monday() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h1>Monday</h1>
      <p>This is Monday’s page!</p>
      <button onClick={() => navigate("/home")}>Go Back</button>
    </div>
  );
}

export default Monday;
