export default function NumberInput({
  num1,
  num2,
  handleInputChange,
  handleReset,
}) {
  return (
    <section className="column">
      <label htmlFor="num1" className="input-control">
        First Number:{" "}
      </label>
      <br />
      <input
        type="text"
        id="num1"
        value={num1}
        name="num1"
        className="input-control"
        onChange={(e) => handleInputChange(e, "num1")}
      />
      <label htmlFor="num2" className="input-control">
        Second Number:{" "}
      </label>
      <br />
      <input
        type="text"
        id="num2"
        value={num2}
        name="num2"
        className="input-control"
        onChange={(e) => handleInputChange(e, "num2")}
      />
      <input
        type="button"
        value="Clear"
        className="form-submit"
        onClick={handleReset}
      />
    </section>
  );
}
