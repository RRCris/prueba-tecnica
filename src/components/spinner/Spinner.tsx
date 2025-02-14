import React from "react";
import css from "./Spinner.module.css";
export default function Spinner(props: React.JSX.IntrinsicElements["div"]) {
  return (
    <div {...props} className={`${props.className} ${css.container}`}>
      <div className={css.loader} />;
    </div>
  );
}
