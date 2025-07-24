document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded fully");
  let brickLength = document.getElementById("brickLength");
  let brickHeight = document.getElementById("brickHeight");
  let brickWidth = document.getElementById("brickWidth");
  let select = document.getElementById("select");
  let wallWidth = document.getElementById("wallWidth");
  let wallHeight = document.getElementById("wallHeight");
  let wallLength = document.getElementById("wallLength");
  let wastage = document.getElementById("wastage");
  let result = document.getElementById("result");

  let calculate = document.getElementById("calculate");

  select.addEventListener("change", () => {
    console.log("Brick type changed:", select.value);
    if (
      select.value === "stdLg" ||
      select.value === "stdSm" ||
      select.value === "modLg" ||
      select.value === "modLg"
    ) {
      brickLength.disabled = true;
      brickWidth.disabled = true;
      brickHeight.disabled = true;
    } else {
      brickLength.disabled = false;
      brickWidth.disabled = false;
      brickHeight.disabled = false;
    }
    switch (select.value) {
      case "stdLg":
        brickLength.value = 0.19;
        brickWidth.value = 0.09;
        brickHeight.value = 0.09;
        break;
      case "stdSm":
        brickLength.value = 0.19;
        brickWidth.value = 0.09;
        brickHeight.value = 0.04;
        break;
      case "modLg":
        brickLength.value = 0.23;
        brickWidth.value = 0.11;
        brickHeight.value = 0.07;
        break;
      case "modSm":
        brickLength.value = 0.23;
        brickWidth.value = 0.11;
        brickHeight.value = 0.04;
        break;
      case "select":
        brickLength.value = "";
        brickWidth.value = "";
        brickHeight.value = "";
    }
  });

  calculate.addEventListener("click", () => {
    console.log("BrickHeigth: ", brickHeight.value);
    let brickVol = Volume(
      parseFloat(brickLength.value),
      parseFloat(brickHeight.value),
      parseFloat(brickWidth.value)
    );
    let wallVol = Volume(
      parseFloat(wallHeight.value),
      parseFloat(wallLength.value),
      parseFloat(wallWidth.value)
    );

    console.log("Brick Volume:", brickVol);
    console.log("Wall Volume:", wallVol);

    if (brickVol <= 0 || wallVol <= 0) {
      alert("Invalid dimensions. Volume cannot be zero or negative.");
      return;
    }

    let totalBricks = Math.ceil(wallVol / brickVol);

    let wastePercentage = parseFloat(wastage.value);
    result.value = `${Math.ceil(
      totalBricks - totalBricks * wastePercentage
    )} Nos`;

    result.classList.add("bold");
  });

  function Volume(length, width, heigth) {
    return length * width * heigth;
  }
});
