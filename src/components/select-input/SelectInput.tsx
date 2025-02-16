import { Icon } from "@iconify/react/dist/iconify.js";
import css from "./SelectInput.module.css";
import React from "react";

interface props_SelectInput {
  width?: number;
}
export default function SelectInput(
  props: React.JSX.IntrinsicElements["div"] & props_SelectInput
) {
  return (
    <div
      {...props}
      className={`${props.className} ${css.container}`}
      style={{ width: props.width }}
    >
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
      <Icon
        icon="iconamoon:arrow-down-2-light"
        className={css.arrow_open}
        width={30}
        color="var(--main-color)"
      />
    </div>
  );
}
