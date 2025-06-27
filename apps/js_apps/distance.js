let x1 = document.querySelector("#x1");
let y1 = document.querySelector("#y1");
let x2 = document.querySelector("#x2");
let y2 = document.querySelector("#y2");

let btn = document.querySelector("#calculate");

function calculate() {
  const x1X2 = (x2.value - x1.value) * (x2.value - x1.value);
  const y1Y2 = (y2.value - y1.value) * (y2.value - y1.value);

  const sqrt = Math.sqrt(x1X2 + y1Y2);
  console.log(sqrt);
}

let allowedChars = "123456790.";

let inputs = document.querySelectorAll("input");

inputs.forEach((inputField) => {
  inputField.addEventListener("input", () => {
    let cleaned = "";
    let invalid = false;
    for (char of inputField.value) {
      if (allowedChars.includes(char)) {
        cleaned += char;
      } else {
        invalid = true;
        alert("Only numbers between 0-9 are allowed");
        inputField.value = cleaned;
      }
    }
  });
});

btn.addEventListener("click", calculate);
