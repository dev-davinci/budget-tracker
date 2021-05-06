import { useContext } from "react";
import { AppContext } from "../AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses =
    expenses &&
    expenses.reduce((total, item) => {
      return (total = total + item.price);
    }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType} py-4`}>
      <span>Remaining: {budget - totalExpenses} L.E</span>
    </div>
  );
};

export default Remaining;
