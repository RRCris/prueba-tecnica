import response_API from "../../@Types/API";
import CarruselImage from "../../components/carrusel-image/CarruselImage";
import useGetAPI from "../../hooks/useGetAPI";
import css from "./About.module.css";

export default function About() {
  const { data } = useGetAPI<response_API["feedInstagram"]>("feedInstagram");
  return (
    <>
      <section className={css.container} id="nosotros">
        <h2>NOSOTROS</h2>
        <p>
          Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
          accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.
        </p>
      </section>
      {data && <CarruselImage images={data} />}
    </>
  );
}
