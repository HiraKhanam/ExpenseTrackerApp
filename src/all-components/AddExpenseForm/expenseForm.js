import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AddContext";
import { v4 as uuidv4 } from "uuid";
export default () => {
  const { dispatch } = useContext(AppContext);
  const { expenses } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    const budget1 = parseInt(budget);

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    dispatch({
      type: "ADD_BUDGET",
      payload: budget1,
    });
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="bg-gray-600 lg:max-w-[1440px] mx-auto rounded-lg lg:p-10 md:p-6 p-4 flex flex-col lg:gap-y-6 md:gap-y-4 lg:my-6 my-4"
      >
        <div>
          <h1 className="lg:text-2xl md:text-xl text-lg font-semibold text-white p-2">
            Enter Budget
          </h1>
          <input
            type="number"
            required="required"
            className="lg:py-3 py-1 rounded-xl p-2"
            id="budget"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <div>
            <h1 className="lg:text-2xl md:text-xl text-lg  font-semibold text-white p-2">
              Name of Expenditure
            </h1>{" "}
            <input
              required="required"
              className="lg:py-3 py-2 rounded-xl w-full p-2"
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <h1 className="lg:text-2xl md:text-xl text-lg  font-semibold text-white p-2">
              Cost
            </h1>{" "}
            <input
              type="number"
              required="required"
              className="lg:py-3 py-2 rounded-xl w-full p-2"
              id="cost"
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500  lg:text-2xl  md:text-xl text-lg font-semibold text-white lg:p-3 p-2 rounded-xl my-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
