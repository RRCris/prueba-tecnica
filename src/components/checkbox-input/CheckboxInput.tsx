import React, { useState } from "react";
import css from "./CheckboxInput.module.css";

export default function CheckboxInput(props: React.JSX.IntrinsicElements["label"]) {
  const [checked, setChecked] = useState(false);
  return (
    <label
      {...props}
      className={`${props.className} ${css.container} ${checked ? css.select : ""}`}
    >
      hola mundo
      <input
        type="checkbox"
        hidden
        onChange={(e) => setChecked(e.target.checked)}
        checked={checked}
      />
    </label>
  );
}
