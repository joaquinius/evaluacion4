import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/transactions/TransactionList";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { ExpenseChart } from "./components/ExpenseChart";
import Footer from "./components/Footer";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-cyan-950 text-white h-screen flex justify-center items-center">
        <div className="w-3/6 flex justify-center items-center">
          <div className="bg-cyan-800 p-10 rounded-md w-full">
            <Header />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="flex-1 flex flex-col">
                <ExpenseChart />
                <TransactionList />
              <div>
             
              </div>
              </div>
              
            </div>
          </div>
         

        </div>
      </div>
      <div className=" bg-stone-600 flex-1 flex flex-col justify-center items-center">
                <Footer/>              
                </div>
    </GlobalProvider>
  );
}

export default App;