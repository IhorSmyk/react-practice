import PropTypes from "prop-types";
import { Section } from "../Section/Section";
import sprite from "../../assets/icons/sprite.svg";

export const TransactionsList = ({ transactions }) => {
  return (
    <Section>
      <ul>
        {transactions.map(({ id, date, time, sum, currency, comment }) => {
          return (
            <>
              <li key={id} class="item">
                <div class="content-wrapper">
                  <div class="descr-wrapper">
                    <span class="date">
                      {date}, {time}
                    </span>
                    <span class="comment">{comment}</span>
                  </div>
                  <div class="summ-wrapper">
                    <span class="summ">{sum}</span>
                    <span class="currency">{currency}</span>
                  </div>
                </div>
                <div class="btn-wrapper">
                  <button class="btn-action" type="button">
                    <svg>
                      <use href={sprite + "#icon-edit-pencil"}></use>
                    </svg>
                  </button>
                  <button class="btn-action" type="button">
                    <svg>
                      <use href={sprite + "#icon-trash"}></use>
                    </svg>
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </Section>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      sum: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};
