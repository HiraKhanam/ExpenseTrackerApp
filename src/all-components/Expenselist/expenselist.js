import React, { useContext } from "react";
import ExpenseItem from "../ExpenseItem/expenseItem";
import { AppContext } from "../../context/AddContext";
export default () => {
  const { expenses } = useContext(AppContext);
  const { new1 } = useContext(AppContext);

  console.log(new1);

  return (
    <div>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
};
