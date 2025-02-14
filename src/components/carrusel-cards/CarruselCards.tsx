import { groupExperience } from "../../@Types/API";
import css from "./CarruselCards.module.css";
import Image from "../image/Image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getRangeDate } from "../../utils/temporal";

const WIDTH_IMAGE = 270;

export default function CarruselCards({ data }: { data: groupExperience | null }) {
  const refMove = useRef<HTMLDivElement>(null);
  const [dataOrder, setDataOrder] = useState(data || []);

  useEffect(() => setDataOrder(data || []), [data]);

  const handleNext = () => {
    gsap.to(refMove.current, {
      left: -WIDTH_IMAGE - 60,
      duration: 0.3,
      onComplete: () => {
        if (refMove.current) refMove.current.style.left = "0px";
        const first = dataOrder.shift();
        if (first) {
          dataOrder.push(first);
          setDataOrder([...dataOrder]);
        }
      },
    });
  };

  const handlePrevius = () => {
    gsap.to(refMove.current, {
      left: WIDTH_IMAGE + 60,
      duration: 0.3,
      onComplete: () => {
        if (refMove.current) refMove.current.style.left = "0px";
        const last = dataOrder.pop();
        if (last) {
          setDataOrder([last, ...dataOrder]);
        }
      },
    });
  };

  return (
    <div className={css.container}>
      <button onClick={handlePrevius} className={css.button_previus}>
        <Icon icon="gg:arrow-left-o" color="var(--main-color)" width={30} />
      </button>
      <button onClick={handleNext} className={css.button_next}>
        <Icon icon="gg:arrow-right-o" color="var(--main-color)" width={30} />
      </button>
      <div className={css.container_move} ref={refMove}>
        {dataOrder.map((experience) => (
          <CardExperience data={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
}

function CardExperience({ data }: { data: groupExperience[number] }) {
  return (
    <section className={css.card}>
      <div className={css.card_containerMain}>
        <header>
          <Image width={WIDTH_IMAGE} src={data.image_cover} />
          <p className={css.statusBar} style={{ background: data.status.color }}>
            {data.status.title}
          </p>
        </header>
        <main>
          <h3 className={css.card_title}>{data.title}</h3>
          <p className={css.card_dates}>
            {getRangeDate(data.date_start, data.date_end)} | desde {data.cost} USD
          </p>
          <p className={css.card_description}>{data.description}</p>
        </main>
      </div>
      <footer>
        <a href={data.url_front}>MÁS INFORMACION</a>
      </footer>
    </section>
  );
}
