import CheckboxInput from "../../components/checkbox-input/CheckboxInput";
import NumberInput from "../../components/number-input/NumberInput";
import RadioInput from "../../components/radio-input/RadioInput";
import SelectInput from "../../components/select-input/SelectInput";
import TextareaInput from "../../components/textarea-input/TextareaInput";
import css from "./Form.module.css";

export default function Form() {
  return (
    <section className={css.container}>
      <h2>DISEÑA TU VIAJE</h2>
      <h3>AQUÍ COMIENZA TU EXPERIENCIA</h3>
      <p>
        Una vez llenado este formulario, uno de nuestros planners travelers se pondra en
        contacto contigo para perfeccionar ese viaje que tanto has soñado. Estamos aquí
        para brindarte la mejor experiencia.
      </p>
      <div className={css.wrapper}>
        <div className={css.wrapper_column}>
          <p>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</p>
          <SelectInput />
        </div>
        <div className={css.wrapper_column}>
          <p>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</p>
          <SelectInput />
        </div>
      </div>
      <p>¿QUÉ EXPERIENCIAS QUIERES VIVIR?</p>
      <div className={css.wrapper}>
        <CheckboxInput />
        <CheckboxInput />
        <CheckboxInput />
        <CheckboxInput />
        <CheckboxInput />
        <CheckboxInput />
        <CheckboxInput />
      </div>
      <div className={css.wrapper}>
        <p>¿SABES CUÁNDO VIAJAR?</p>
        <RadioInput />
        <RadioInput />
        <NumberInput />
        <NumberInput />
        <p>NIÑOS :</p>
        <SelectInput width={100} />
        <p>ADULTOS :</p>
        <SelectInput width={100} />
        <div>
          <p>TU VIAJE IDEAL...</p>
          <TextareaInput />
        </div>
      </div>
    </section>
  );
}
