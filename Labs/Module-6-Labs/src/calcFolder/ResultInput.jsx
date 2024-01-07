export default function ResultInput({ result }) {
  return (
    <>
      <section className="column">
        <label htmlFor="result" className="input-control">
          Result
        </label>
        <input
          type="text"
          className="input-control"
          value={result}
          name="result"
          id="result"
        />
        <br />
      </section>
    </>
  );
}
