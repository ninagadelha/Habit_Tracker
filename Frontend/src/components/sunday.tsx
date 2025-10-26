import React from "react";
import { useNavigate } from "react-router-dom";

function Sunday() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h1>Sunday</h1>
      <p>This is Sunday's page!</p>
      <button onClick={() => navigate("/home")}>Go Back</button>
    </div>
  );
}

export default Sunday;