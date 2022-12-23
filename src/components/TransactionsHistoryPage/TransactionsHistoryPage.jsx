import Header from "../Header/Header";
import { TransactionsList } from "../TransactionsList/TransactionsList";

export const TransactionsHistoryPage = ({ transactions, type }) => {
  return (
    <>
      <Header title={type === "income" ? "Доходи" : "Витрати"} cb={() => {}} />
      <TransactionsList transactions={transactions} />
    </>
  );
};
