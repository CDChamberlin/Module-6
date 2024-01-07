export default function CalculatorApp() {
  return(
    <>
    <section id="operator" class="row">
      <section class="column">
        <label for="result" class="input-control">Result</label><br />
        <input
          type="text"
          class="input-control"
          value=""
          name="result"
          id="result"
        />
        <br />
      </section>
    </>
  );
}
