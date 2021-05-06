import { useContext } from "react";
import { AppContext } from "./../AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses &&
        expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          ></ExpenseItem>
        ))}
    </ul>
  );
};

export default ExpenseList;
