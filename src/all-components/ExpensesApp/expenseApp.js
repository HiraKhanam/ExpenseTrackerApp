import Budget from "../Budget/budget.js";
import Expense from "../Expense/expense";
import Remaining from "../Remain/remain";
import ExpenseList from "../Expenselist/expenselist";
import ExpenseForm from "../AddExpenseForm/expenseForm";
import { Link } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
export default () => {
  return (
    <div className="lg:max-w-[1440px] w-full md:p-6 p-4 mx-auto                     bg-gray-300">
      <h1 className="font-bold text-4xl lg:pb-6 pb-4">BUDGET PLANNER</h1>
      <div>
        <div className="flex flex-col gap-y-4">
          <Budget></Budget>
          <Expense />
          <Remaining />
        </div>
        <div>
          <ExpenseList />
        </div>
        <div>
          <ExpenseForm />
        </div>
      </div>

      <NotificationContainer></NotificationContainer>
    </div>
  );
};
