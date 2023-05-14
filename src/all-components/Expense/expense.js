import "./expense.css";
import { AppContext } from "../../context/AddContext";
import { useContext } from "react";

export default () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div>
      {" "}
      <div className="bg-gray-600 flex text-white lg:text-2xl text-xl lg:p-6 p-4 rounded-xl gap-x-3">
        <h2>Spent so far:</h2>
        <h3>{totalExpenses}</h3>
      </div>
    </div>
  );
};
