import React, { useState } from "react";
import { base_API } from "../../constants/API";

import css from "./Image.module.css";

export default function Image(props: React.JSX.IntrinsicElements["img"]) {
  const [ready, setReady] = useState(false);

  const handleLoaded = () => {
    if (props.src) setReady(true);
  };
  return (
    <img
      {...props}
      src={props.src ? base_API + props.src : "./placeholder_image.webp"}
      className={`${props.className} ${ready ? css.ready : css.loading}`}
      onLoad={(e) => {
        if (props.onLoad) props.onLoad(e);
        handleLoaded();
      }}
    />
  );
}
