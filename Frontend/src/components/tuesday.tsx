import React from "react";
import { useNavigate } from "react-router-dom";

function Tuesday() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h1>Tuesday</h1>
      <p>This is Tuesday's page!</p>
      <button onClick={() => navigate("/home")}>Go Back</button>
    </div>
  );
}

export default Tuesday;