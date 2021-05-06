import { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import ViewBudget from "./ViewBudget";
import SetBudget from "./SetBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing(true);
  };

  const saveHandler = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };
  return (
    <div class="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <SetBudget saveHandler={saveHandler} budget={budget} />
      ) : (
        <ViewBudget editHandler={editHandler} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
