import css from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={css.container}>
      <img src="public/logo.png" alt="logo de la pagina" width={130} />
      <div className={css.container_buttons}>
        <a>Inicio</a>
        <a>Nosotros</a>
        <a>Viajes</a>
        <a>Blogs</a>
        <a>Contacto</a>
      </div>
    </nav>
  );
}
