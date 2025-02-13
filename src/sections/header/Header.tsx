import ContentLoader from "react-content-loader";
import response_API from "../../@Types/API";
import Image from "../../components/image/Image";
import useGetAPI from "../../hooks/useGetAPI";
import css from "./Header.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  const header = useGetAPI<response_API["banner"]>("banner");
  const categories = useGetAPI<response_API["categories"]>("categories");

  return (
    <header className={css.container} id="inicio">
      <Image
        src={header.data ? header.data[0].image : undefined}
        alt="Imagen de Portada"
        className={css.image_banner}
      />

      <h1 className={css.containerTitle}>
        {header.data && header.data[0].title} <span>EXPERIENCE</span>
      </h1>

      <div className={css.containerCards}>
        {categories.data
          ? categories.data.map((v) => <HeaderCards key={v.id} data={v} />)
          : [...Array(3)].map((_v, i) => <SkeletonCard key={i} />)}
      </div>
    </header>
  );
}

function HeaderCards({ data }: { data: response_API["categories"][number] }) {
  return (
    <div className={css.cards}>
      <Image src={data.image_banner} />
      <div className={css.containerCardTitle}>
        <p>{data.name}</p>
        <Icon icon="gg:arrow-right-o" width={30} />
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <ContentLoader
      speed={10}
      width={300}
      height={170}
      backgroundColor="#FFF6"
      foregroundColor="#FFFA"
    >
      <rect width={300} height={170} rx={20} ry={20} />
    </ContentLoader>
  );
}
