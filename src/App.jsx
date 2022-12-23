import MainPage from "./components/MainPage/MainPage";
import { TransactionsHistoryPage } from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { costs, income } from "./data/transactions";

function App() {
  const activePage = "income"; // or 'income' or 'costs'

  switch (activePage) {
    case "main":
      return <MainPage />;
    case "income":
      return (
        <TransactionsHistoryPage transactions={income} type={activePage} />
      );
    case "costs":
      return <TransactionsHistoryPage transactions={costs} type={activePage} />;
    default:
      return null;
  }
}

export default App;
