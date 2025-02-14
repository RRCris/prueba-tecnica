import css from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={css.container}>
      <img src="public/logo.png" alt="logo de la pagina" width={130} />
      <div className={css.container_buttons}>
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#viajes">Viajes</a>
        <a href="#blogs">Blogs</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}
