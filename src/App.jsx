import MainPage from "./components/MainPage/MainPage";
import { TransactionsHistoryPage } from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { costs, income } from "./data/transactions";

function App() {
  const activePage = "main"; // or 'income' or 'costs'

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
  // 	return (

  // 	  <div className="App">
  // 		  {activePage}
  //       <MainPage />
  //     </div>
  //   );
}

export default App;
