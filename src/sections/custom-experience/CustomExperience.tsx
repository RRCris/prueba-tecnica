import css from "./CustomerExperience.module.css";

export default function CustomExperience() {
  return (
    <section className={css.container}>
      <h2>EXPERIENCIAS PERSONALIZADAS</h2>
      <div className={css.content}>
        <img height={400} width={350} src="./custom experience.webp" />
        <div className={css.information}>
          <h3>¿QUÉ NOS HACE DIFERENTES?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
            nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
            facilisi.
          </p>
          <a href="#form">COTIZAR MI VIAJE</a>
        </div>
      </div>
    </section>
  );
}
