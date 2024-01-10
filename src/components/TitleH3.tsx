import React from "react";

export default function TitleH3({ text = "", classname="" }) {
  return (
    <h3 className={"text-white text-lg xl:text-xl 2xl:text-2xl font-semibold leading-[150%] " + classname}>
      {text}
    </h3>
  );
}
