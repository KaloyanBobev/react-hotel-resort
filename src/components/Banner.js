import React from "react";

export default function Banner({ minor, title, subtitle }) {
  return (
    <>
      <div className="banner">
        <h2>{title}</h2>
        <div></div>
        <p>{subtitle}</p>
        {minor}
      </div>
    </>
  );
}
