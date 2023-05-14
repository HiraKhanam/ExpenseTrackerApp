import { createContext, useReducer, useEffect, i } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    // case "init_stored":
    //   return { expenses: [action.value] };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    // case "EDIT_EXPENSE":
    //   let some = state.expenses.findIndex(
    //     (user) => user.id == action.payload.id
    //   );
    //   return {
    //     ...state,

    //     expenses: [(state.expenses[some] = action.payload)],
    //   };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budget: (state.budget = action.payload),
      };

    default:
      return state;
  }
};
const initialState = {
  budget: 5000,
  expenses: [{ id: 12, name: "Expenditure", cost: 0 }],
};
export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("state"))) {
  //     dispatch({
  //       type: "init_stored",
  //       value: JSON.parse(localStorage.getItem("state")),
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (state !== initialState) {
  //     localStorage.setItem("state", JSON.stringify(state));
  //   }
  // }, [state]);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {" "}
      {props.children}
    </AppContext.Provider>
  );
};
