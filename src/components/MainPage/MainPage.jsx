import Header from "../Header/Header";
import { TransactionForm } from "../TransactionForm/TransactionForm";
import { TransactionNavButtons } from "../TransactionNavButtons/TransactionNavButtons";

const MainPage = () => {
  return (
    <>
      <Header />
      <TransactionForm />
      <TransactionNavButtons />
    </>
  );
};

export default MainPage;
