"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewritterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{ loop: true }}
      onInit={(typewriter) => {
        typewriter
          .typeString("🚀 Supercharged Productivity.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("🤖 AI-Powered Insights.")
          .start();
      }}
    ></Typewriter>
  );
};

export default TypewritterTitle;
