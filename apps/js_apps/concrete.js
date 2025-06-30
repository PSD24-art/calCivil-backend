let length = document.getElementById("length");
let width = document.getElementById("width");
let radius = document.getElementById("radius");
let height = document.getElementById("height");
let shape = document.getElementById("shape");

let volume = document.getElementById("volume");

let calculate = document.getElementById("calculate");
let inputGrade = document.getElementById("inputGrade");

let arr = "0123456789.";

// up down event listeners for grade selection

let up = document.getElementById("up");
let down = document.getElementById("down");
let i = 0;

up.addEventListener("click", () => {
  if (i < 80) i += 5;
  inputGrade.value = i;
});

down.addEventListener("click", () => {
  if (i > 5) i -= 5;
  inputGrade.value = i;
});

//Disabling inputs for related shpes
radius.disabled = true;

shape.addEventListener("change", () => {
  if (shape.value === "circle") {
    length.disabled = true;
    width.disabled = true;
    radius.disabled = false;

    volumeUsingRadius();
  } else if (shape.value === "square") {
    length.disabled = false;
    width.disabled = true;
    radius.disabled = true;

    volumeUsingLength();
  } else {
    length.disabled = false;
    width.disabled = false;
    radius.disabled = true;

    volumeBySquare();
  }
});

//Calculate Volume Functions based on their respective shape
function volumeUsingLength() {
  calculate.addEventListener("click", () => {
    let prod =
      Number(length.value) * Number(width.value) * Number(height.value);
    volume.innerText = prod.toFixed(3);
  });
}

function volumeBySquare() {
  calculate.addEventListener("click", () => {
    let prod =
      Number(length.value) * Number(length.value) * Number(height.value);
    volume.innerText = prod.toFixed(3);
  });
}

function volumeUsingRadius() {
  calculate.addEventListener("click", () => {
    let area = 3.14 * Number(radius.value) ** 2;
    let vol = area * Number(height.value);

    volume.innerText = vol.toFixed(3);
  });
}
