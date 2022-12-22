import { Section } from "../Section/Section.jsx";
import css from "./TransactionNavButtons.module.css";

console.log(css);

export const TransactionNavButtons = () => {
  return (
    <Section>
      <div className={css.btnWrapper}>
        <button className={css.btn} type="button">
          Всі витрати
        </button>
        <button className={css.btn} type="button">
          Всі доходи
        </button>
      </div>
    </Section>
  );
};
