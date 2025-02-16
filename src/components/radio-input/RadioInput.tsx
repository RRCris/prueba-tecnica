import { useState } from "react";
import css from "./RadioInput.module.css";
export default function RadioInput() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <label className={css.container}>
      <input type="radio" hidden onChange={(e) => setChecked(e.target.checked)} />
      <div className={`${css.radio} ${checked ? css.select : ""}`} />
      SI
    </label>
  );
}
