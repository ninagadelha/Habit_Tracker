import React from "react";
import { useNavigate } from "react-router-dom";

function Thursday() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h1>Thursday</h1>
      <p>This is Thursday's page!</p>
      <button onClick={() => navigate("/home")}>Go Back</button>
    </div>
  );
}

export default Thursday;