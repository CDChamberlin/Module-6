import ResultInput from "./ResultInput";

export default function NumberInput({ num1, num2, handleInputChange, result }) {
  return (
    <section className="column">
      <label htmlFor="num1" className="input-control">
        First Number:{" "}
      </label>
      <input
        type="text"
        id="num1"
        value={num1}
        name="num1"
        className="input-control"
        onChange={(e) => handleInputChange(e, "num1")}
      />
      <br />
      <label htmlFor="num2" className="input-control">
        Second Number:{" "}
      </label>

      <input
        type="text"
        id="num2"
        value={num2}
        name="num2"
        className="input-control"
        onChange={(e) => handleInputChange(e, "num2")}
      />
      <br />
      <ResultInput result={result} />
    </section>
  );
}
