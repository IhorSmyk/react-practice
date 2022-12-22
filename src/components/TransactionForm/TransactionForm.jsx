import { Section } from "../Section/Section";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import css from "./Transaction.module.css";
console.log(css);

export const TransactionForm = () => {
  return (
    <Section>
      <form className={css.form}>
        <InputWithLabel type="date" name="data" title="Дата" />
        <InputWithLabel type="time" name="time" title="Час" />
        <InputWithLabel
          type="text"
          name="summ"
          title="Сума"
          placeholder="Вкажіть суму"
        />

        <InputWithLabel
          type="button"
          name="currency"
          title="Валюта"
          defaultValue="UAH"
        />
        <InputWithLabel
          type="text"
          name="comment"
          title="Коментар"
          placeholder="Коментар..."
        />

        <button type="submit" className={css["btn-form"]}>
          Додати
        </button>
      </form>
    </Section>
  );
};
