let inputUnit = document.getElementById("inputUnit");
let outputUnit = document.getElementById("outputUnit");
let inputNumber = document.getElementById("inputNumber");
let outputNumber = document.getElementById("outputNumber");
let calculate = document.getElementById("calculate");

const calculator = {
  convert(value, fromUnit, toUnit) {
    const units = {
      m: 1,
      mm: 1000,
      cm: 100,
      km: 0.001,
      inch: 39.37,
      ft: 3.28,
      yard: 1.09361,
      mile: 0.000621371,
    };
    return (value * units[toUnit]) / units[fromUnit];
  },
};

calculate.addEventListener("click", () => {
  let selectedInputUnit = inputUnit.value;
  let selectedOutput = outputUnit.value;
  let enteredNumber = Number(inputNumber.value.trim());

  let answer = calculator.convert(
    enteredNumber,
    selectedInputUnit,
    selectedOutput
  );
  outputNumber.value = answer.toFixed(3);
});
