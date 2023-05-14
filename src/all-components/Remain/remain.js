import "./remain.css";
import { useRef, useState } from "react";
import { AppContext } from "../../context/AddContext";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { useContext } from "react";
export default () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div>
      {" "}
      <div>
        <div className={`alert ${alertType}`}>
          <div className="flex text-white lg:text-2xl text-xl lg:p-6 p-4 gap-x-3">
            <h2>Remaining:</h2>
            <h3>{budget - totalExpenses} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
