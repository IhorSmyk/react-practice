import PropTypes from "prop-types";
import moment from "moment";
import { Section } from "../Section/Section";
import sprite from "../../assets/icons/sprite.svg";
import {
  Item,
  ContentWrapper,
  DescrWrapper,
  BtnWrapper,
  BtnAction,
} from "./TransactionsList.styled";
import { Fragment } from "react";
// import * as Q from "./TransactionsList.styled";
// console.log(Q);

export const TransactionsList = ({ transactions }) => {
  return (
    <Section>
      <ul>
        {transactions.map(({ id, date, time, sum, currency, comment }) => {
          return (
            <Fragment key={id}>
              <Item>
                <ContentWrapper>
                  <DescrWrapper>
                    <span className="date">
                      {moment(date).format("dd D MMM YYYY")}, {time}
                    </span>
                    <span className="comment">{comment}</span>
                  </DescrWrapper>
                  <DescrWrapper>
                    <span className="summ">{sum}</span>
                    <span className="currency">{currency}</span>
                  </DescrWrapper>
                </ContentWrapper>
                <BtnWrapper>
                  <BtnAction type="button">
                    <svg>
                      <use href={sprite + "#icon-edit-pencil"}></use>
                    </svg>
                  </BtnAction>
                  <BtnAction type="button">
                    <svg>
                      <use href={sprite + "#icon-trash"}></use>
                    </svg>
                  </BtnAction>
                </BtnWrapper>
              </Item>
            </Fragment>
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
