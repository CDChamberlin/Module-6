const operatorValues = ["+", "-", "x", "/"];

export default function OperatorForm({ operator, handleOperatorChange }) {
  // Creates the individual operation radio buttons dynamically
  const renderRadioButtons = () => {
    return operatorValues.map((op) => (
      <label key={op} className="form-control">
        <input
          type="radio"
          name="operator"
          value={op}
          checked={operator === op}
          onChange={handleOperatorChange}
        />
        {op}
      </label>
    ));
  };

  return (
    <form id="Calcs" className="column">
      {renderRadioButtons()}
    </form>
  );
}
