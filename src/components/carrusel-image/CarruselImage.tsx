import { useEffect, useRef, useState } from "react";
import Image from "../image/Image";

import css from "./CarruselImage.module.css";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Tprops {
  images: {
    id: number;
    image: string;
  }[];
}

const WIDTH_IMAGE = 260;

export default function CarruselImage({ images }: Tprops) {
  const [selectImage, setSelectImage] = useState(0);
  const refMove = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refMove.current) return;

    gsap.to(refMove.current, { left: selectImage * WIDTH_IMAGE });
  }, [selectImage]);

  const handleNext = () => {
    if (selectImage <= -images.length + 1) {
      setSelectImage(0);
    } else {
      setSelectImage(selectImage - 1);
    }
  };

  const handlePrevius = () => {
    if (selectImage >= 0) {
      setSelectImage(-images.length + 1);
    } else {
      setSelectImage(selectImage + 1);
    }
  };

  return (
    <>
      <div className={css.container}>
        <a className={css.instagram} href="https://www.instagram.com/churroceballos/">
          <div className={css.backgroundInstagram}>
            <Icon icon="mdi:instagram" color="#FFF" width={30} />
          </div>
        </a>
        <div className={css.containerMove} ref={refMove}>
          {images.map((img, index) => (
            <Image
              src={img.image}
              key={img.id}
              width={WIDTH_IMAGE}
              height={WIDTH_IMAGE}
              style={{ marginRight: -index === selectImage ? 30 : undefined }}
            />
          ))}
        </div>
        <button className={css.nextImage} onClick={handleNext}>
          <Icon icon="gg:arrow-right-o" color="#FFF" width={40} />
        </button>
        {selectImage !== 0 && (
          <button className={css.backImage} onClick={handlePrevius}>
            <Icon icon="gg:arrow-left-o" color="#FFF" width={30} />
          </button>
        )}
      </div>
      <a className={css.userInstagram} href="https://www.instagram.com/churroceballos/">
        @churroceballos
      </a>
    </>
  );
}
