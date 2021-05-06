const ViewBudget = ({ budget, editHandler }) => {
  return (
    <>
      <span>Budget: {budget} L.E</span>
      <button type="button" class="btn btn-primary" onClick={editHandler}>
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
