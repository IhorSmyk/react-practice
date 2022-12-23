import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const DescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & .date {
    font-size: 1rem;
    color: rgb(89, 86, 86);
  }

  & .comment {
    font-size: 0.8rem;
    color: rgb(44, 43, 43);
  }

  & .summ {
    font-size: 1rem;
    font-weight: bold;
    color: rgb(44, 43, 43);
  }

  & .currency {
    font-size: 0.8rem;
    font-weight: bold;
    color: rgb(70, 179, 241);
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-left: auto;
`;

export const BtnAction = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  border: none;
  background: none;

  &:hover {
    background-color: #00000010;
  }

  & svg {
    width: 100%;
    height: 100%;
    fill: rgb(89, 86, 86);
  }
`;
