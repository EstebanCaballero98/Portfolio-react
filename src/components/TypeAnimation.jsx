import React from "react";
import { TypeAnimation } from "react-type-animation";

function TextAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "I'm a Full Stack Developer", // Types 'One'
        3000, // Waits 1s
        "I'm a Writer", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "I'm a Musician", // Types 'Three' without
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em" }}
    />
  );
}

export default TextAnimation;
