import css from "./NumberInput.module.css";
export default function NumberInput() {
  return (
    <label className={css.container}>
      IDA :
      <input type="number" />
    </label>
  );
}
