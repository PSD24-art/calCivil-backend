let length = document.getElementById("length");
let width = document.getElementById("width");
let radius = document.getElementById("radius");
let height = document.getElementById("height");
let shape = document.getElementById("shape");

let volume = document.getElementById("volume");

let calculate = document.getElementById("calculate");
let inputGrade = document.getElementById("inputGrade");

let inputClass = document.querySelectorAll(".inputClass");
let arr = "0123456789.";

inputClass.forEach((input) => {
  input.addEventListener("input", () => {
    let val = input.value.trim();

    for (char of val)
      if (!arr.includes(char)) {
        input.style.border = "3px solid red";
      } else {
        input.style.border = "3px solid Green";
      }
  });
});

// up down event listeners for grade selection
let concreteGrade = 0;
let i = 0;
let up = document.getElementById("up");
let down = document.getElementById("down");

up.addEventListener("click", () => {
  if (i < 25) {
    if (i === 5) {
      i = 7.5;
    } else if (i === 7.5) {
      i += 2.5;
    } else {
      i += 5;
    }
  }
  inputGrade.value = i;
  concreteGrade = i;
  console.log(concreteGrade);
});

down.addEventListener("click", () => {
  if (i > 5) {
    if (i === 10) {
      i = 7.5;
    } else if (i === 7.5) {
      i = 5;
    } else {
      i -= 5;
    }
  }
  inputGrade.value = i;
  concreteGrade = i;
  console.log(concreteGrade);
});

//Disabling inputs for related shpes
radius.disabled = true;

shape.addEventListener("change", () => {
  if (shape.value === "circle") {
    length.disabled = true;
    width.disabled = true;
    radius.disabled = false;
  } else if (shape.value === "square") {
    length.disabled = false;
    width.disabled = true;
    radius.disabled = true;
  } else {
    length.disabled = false;
    width.disabled = false;
    radius.disabled = true;
  }
});

//Calculate Volume Functions based on their respective shape

calculate.addEventListener("click", () => {
  let vol = 0;

  if (shape.value === "circle") {
    vol = 3.14 * Number(radius.value) ** 2 * Number(height.value);
  } else if (shape.value === "square") {
    vol = Number(length.value) * Number(length.value) * Number(height.value);
  } else {
    vol = Number(length.value) * Number(width.value) * Number(height.value);
  }

  prod = vol;
  volume.innerText = prod.toFixed(3);
  setRatio();
});

// Quantity calculations
let cement = document.getElementById("cement");
let sand = document.getElementById("sand");
let aggregate = document.getElementById("aggregate");
let sandRatio = 0;
let aggRatio = 0;
let dryVolume = 0;
let cementQuant = 0;
let sandQuant = 0;
let aggQuant = 0;

function setRatio() {
  if (i === 5) {
    sandRatio = 5;
    aggRatio = 10;
    dryVolume = prod * 1.54;
    cementQuant = (1 / (1 + sandRatio + aggRatio)) * dryVolume * 1400;
    sandQuant = (sandRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1600;
    aggQuant = (aggRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1500;
    cement.innerText = cementQuant.toFixed(3);
    sand.innerText = sandQuant.toFixed(3);
    aggregate.innerText = aggQuant.toFixed(3);
  } else if (i === 7.5) {
    sandRatio = 4;
    aggRatio = 8;
    dryVolume = prod * 1.54;
    cementQuant = (1 / (1 + sandRatio + aggRatio)) * dryVolume * 1400;
    sandQuant = (sandRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1600;
    aggQuant = (aggRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1500;
    cement.innerText = cementQuant.toFixed(3);
    sand.innerText = sandQuant.toFixed(3);
    aggregate.innerText = aggQuant.toFixed(3);
  } else if (i === 10) {
    sandRatio = 3;
    aggRatio = 6;
    dryVolume = prod * 1.54;
    cementQuant = (1 / (1 + sandRatio + aggRatio)) * dryVolume * 1400;
    sandQuant = (sandRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1600;
    aggQuant = (aggRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1500;
    cement.innerText = cementQuant.toFixed(3);
    sand.innerText = sandQuant.toFixed(3);
    aggregate.innerText = aggQuant.toFixed(3);
  } else if (i === 15) {
    sandRatio = 2;
    aggRatio = 4;
    dryVolume = prod * 1.54;
    cementQuant = (1 / (1 + sandRatio + aggRatio)) * dryVolume * 1400;
    sandQuant = (sandRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1600;
    aggQuant = (aggRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1500;
    cement.innerText = cementQuant.toFixed(3);
    sand.innerText = sandQuant.toFixed(3);
    aggregate.innerText = aggQuant.toFixed(3);
  } else if (i === 20) {
    sandRatio = 1.5;
    aggRatio = 3;
    dryVolume = prod * 1.54;
    cementQuant = (1 / (1 + sandRatio + aggRatio)) * dryVolume * 1400;
    sandQuant = (sandRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1600;
    aggQuant = (aggRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1500;
    cement.innerText = cementQuant.toFixed(3);
    sand.innerText = sandQuant.toFixed(3);
    aggregate.innerText = aggQuant.toFixed(3);
  } else {
    sandRatio = 1;
    aggRatio = 2;
    dryVolume = prod * 1.54;
    cementQuant = (1 / (1 + sandRatio + aggRatio)) * dryVolume * 1400;
    sandQuant = (sandRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1600;
    aggQuant = (aggRatio / (1 + sandRatio + aggRatio)) * dryVolume * 1500;
    cement.innerText = cementQuant.toFixed(3);
    sand.innerText = sandQuant.toFixed(3);
    aggregate.innerText = aggQuant.toFixed(3);
  }
}
