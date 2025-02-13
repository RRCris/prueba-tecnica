import css from "./Spinner.module.css";
export default function Spinner() {
  return (
    <div className={css.container}>
      <div className={css.loader} />;
    </div>
  );
}
