import { useReducer, createContext, useEffect } from "react";

const initState = {
  budget: 2000,
  expenses: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initState, () => {
    const localData = localStorage.getItem("expenses");
    console.log(localData);

    return localData ? JSON.parse(localData) : initState;
  });
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state));
  }, [state]);
  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
