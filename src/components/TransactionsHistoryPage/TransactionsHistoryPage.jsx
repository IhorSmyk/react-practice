import Header from "../Header/Header";

export const TransactionsHistoryPage = ({ transactions, type }) => {
  return (
    <Header title={type === "income" ? "Доходи" : "Витрати"} cb={() => {}} />
  );
};
