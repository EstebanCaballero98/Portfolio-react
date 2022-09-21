import React from "react";
import TextAnimation from "./TypeAnimation";

function LandingDisplay() {
  return (
    <>
      <div className="landingDisplay">
        <h1>Hey, I'm Geoffrey Cotton</h1>
        <h2>
          <TextAnimation />
        </h2>
      </div>
    </>
  );
}

export default LandingDisplay;
