import { useState } from "react";

export default function Calc() {
  const [calculation, setCalculation] = useState("");

  function addToCalc(value) {
    setCalculation(calculation + value);
  }

  function clearCal() {
    setCalculation("");
  }

  function calculate(){
    try {
      setCalculation(eval(calculation));
    } catch (err) {
      setCalculation("err");
    }
  }

  return (
    <>
    <div className = "calculator">
        <input type="text"
               value={calculation}
               readOnly
               className="display"
               colSpan="4"
        />
        <table>
            <thead>
            <tr>
              {/* <th colSpan="4"></th> */}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td onClick={() => addToCalc("1")}>1</td><td onClick={() => addToCalc("2")}>2</td>
                <td onClick={() => addToCalc("3")}>3</td><td onClick={() => addToCalc("+")}>+</td>
            </tr>
            <tr> 
                <td onClick={() => addToCalc("4")}>4</td><td onClick={() => addToCalc("5")}>5</td>
                <td onClick={() => addToCalc("6")}>6</td><td onClick={() => addToCalc("-")}>-</td>
             </tr>
            <tr>
                <td onClick={() => addToCalc("7")}>7</td><td onClick={() => addToCalc("8")}>8</td>
                <td onClick={() => addToCalc("9")}>9</td><td onClick={() => addToCalc("*")}>*</td>
            </tr>

            <tr>
                <td onClick={()=>addToCalc("0")}>0</td>
                <td onClick={clearCal}>C</td>
                <td onClick={calculate}>=</td>
                <td onClick={()=>addToCalc("/")}>/</td>
            </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}