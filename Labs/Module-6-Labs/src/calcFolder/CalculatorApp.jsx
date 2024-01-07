import { useState } from "react";
import OperatorForm from "./OperatorForm";
import NumberInput from "./NumberInput";
import ResultInput from "./ResultInput";
import "./CalculatorComponent.css";

export default function CalculatorApp() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleInputChange = (e, inputType) => {
    const value = e.target.value;
    if (inputType === "num1") {
      setNum1(value);
    } else if (inputType === "num2") {
      setNum2(value);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    // Perform calculation based on the selected operator
    let calculatedResult;
    switch (operator) {
      case "+":
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case "x":
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        calculatedResult = "";
    }
    setResult(calculatedResult);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <section id="calculator" className="grid-container">
      <NumberInput
        num1={num1}
        num2={num2}
        result={result}
        handleInputChange={handleInputChange}
      />

      <OperatorForm
        operator={operator}
        handleOperatorChange={handleOperatorChange}
      />

      <input
        id="Clear"
        type="button"
        value="Clear"
        className="form-submit"
        onClick={handleReset}
      />

      <input
        id="Equals"
        type="button"
        value="Equals"
        className="form-submit"
        onClick={handleCalculate}
      />
    </section>
  );
}
