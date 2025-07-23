let input = document.getElementsByTagName("input");
let brickLength = document.getElementById("brickLength");
let brickHeight = document.getElementById("brickHeight");
let brickWidth = document.getElementById("brickWidth");

let wallWidth = document.getElementById("wallWidth");
let wallHeight = document.getElementById("wallHeight");
let wallLength = document.getElementById("wallLength");

let result = document.getElementById("result");

let calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {
  let brickVol = Volume(
    Number(brickLength.value),
    Number(brickHeight.value),
    Number(brickWidth.value)
  );
  let wallVol = Volume(
    Number(wallHeight.value),
    Number(wallLength.value),
    Number(wallWidth.value)
  );

  console.log("Brick Volume:", brickVol);
  console.log("Wall Volume:", wallVol);

  result.value = `${Math.ceil(wallVol / brickVol)} Nos`;
  result.classList.add("bold");
  for (val of input) {
    if (val.value === "") {
      alert("Fields cannot be empty");
      return;
    }
  }
});

function Volume(length, width, heigth) {
  return parseFloat((length * width * heigth).toFixed(3));
}
