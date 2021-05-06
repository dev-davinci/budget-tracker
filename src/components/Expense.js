import { useContext } from "react";
import { AppContext } from "../AppContext";

const Expense = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses =
    expenses &&
    expenses.reduce((total, item) => {
      return (total += item.price);
    }, 0);

  return (
    <div className="alert alert-danger py-4">
      <span>Spent: {totalExpenses} L.E</span>
    </div>
  );
};

export default Expense;
