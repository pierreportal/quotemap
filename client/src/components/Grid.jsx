import React from "react";
import { colorPalettes } from "../colorPalettes";

export default function Grid(props) {
  const { quotes } = props;
  const palette = colorPalettes[0];
  const cells = quotes.reverse().map((quote, i) => {
    return (
      <div
        key={quote}
        style={{
          backgroundColor: palette[i] ? `#${palette[i]}` : "#fff0d4",
        }}
      >
        <h2>{quote}</h2>
      </div>
    );
  });
  return <div className="grid">{cells}</div>;
}
