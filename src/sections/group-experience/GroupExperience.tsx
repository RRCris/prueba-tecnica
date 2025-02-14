import response_API from "../../@Types/API";

import useGetAPI from "../../hooks/useGetAPI";

import CarruselCards from "../../components/carrusel-cards/CarruselCards";

import css from "./GroupExperience.module.css";

export default function GroupExperience() {
  const { data } = useGetAPI<response_API["groupExperience"]>("groupExperience");

  return (
    <section id="viajes">
      <h2 className={css.title}>Experiencias Grupales</h2>
      <CarruselCards data={data} />
    </section>
  );
}
