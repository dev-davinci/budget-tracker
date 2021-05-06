import { useState } from "react";

const EditBudget = ({ budget, saveHandler }) => {
  const [value, setValue] = useState(budget);
  return (
    <>
      <input
        required="required"
        type="number"
        class="form-control mr-3"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => saveHandler(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
