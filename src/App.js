import logo from "./logo.svg";
import "./App.css";

import Expense from "./all-components/ExpensesApp/expenseApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AddContext";
import ExpenseForm from "./all-components/AddExpenseForm/expenseForm";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/form" element={<ExpenseForm />} />
          </Routes>
        </BrowserRouter>
        <Expense></Expense>
      </div>
    </AppProvider>
  );
}

export default App;
