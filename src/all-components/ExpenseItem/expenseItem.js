import { TiDelete } from "react-icons/ti";

import React from "react";

import { AppContext } from "../../context/AddContext";
import { useContext } from "react";
export default (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
    localStorage.removeItem("budget");
  };
  // const editButton = () => {
  //   dispatch({
  //     type: "EDIT_EXPENSE",
  //     payload: props,
  //   });
  // };
  return (
    <div>
      {
        <div className="lg:max-w-[1440px] mx-auto lg:p-6 p-4">
          <li className="flex justify-between  border border-gray-800 p-2 lg:text-2xl md:text-xl text-lg">
            {props.name}
            <div className="flex ml-auto gap-x-4  lg:text-2xl md:text-xl text-lg">
              {props.cost}{" "}
              <span>
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
              </span>
            </div>
          </li>
        </div>
      }
    </div>
  );
};
