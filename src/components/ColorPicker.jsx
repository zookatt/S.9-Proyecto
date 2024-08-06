import React from "react";
import { TwitterPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

export const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <TwitterPicker
        triangle="hide"
        presetColors={[
          "#0b4e9c",
          "#f0e62c",
          "#d71987",
          "#ffff",
          "#69c7ea",
          "#404040",
        ]}
        styles={{
          default: {
            card: {
              position: "top-left",
              borderRadius: "20px", // Border radius for the color picker card
              backgroundColor: "transparent",
              width: "60px",
            },
            swatch: {
              borderRadius: "50%",
              width: "30px", // Border radius for the color swatches
            },

            input: {
              display: "none", // Oculta el input de código de color
            },
          },
        }}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};
