const fruits = document.querySelectorAll(".fruit");
// fruits.forEach((fruit) => {});
const positionHandler = (pos, selectElement, userChoiceValue) => {
  const selectElementTag = document.getElementById(selectElement);
  selectElementTag.style[pos] = userChoiceValue + "px";
};

const topInput = document.getElementById("top");
const rightInput = document.getElementById("right");
const leftInput = document.getElementById("left");
const bottomInput = document.getElementById("bottom");

let ISTOP = false;
let ISBOTTOM = false;
topInput.addEventListener("change", () => {
  ISTOP = true;
  if (ISTOP && ISBOTTOM) {
    alert("You should not insert both top & bottom");
    window.location.reload();
  }

  positionHandler("top", "orange", topInput.value);
});

bottomInput.addEventListener("change", () => {
  ISBOTTOM = true;
  if (ISTOP && ISBOTTOM) {
    alert("You should not insert both top & bottom");
    window.location.reload();
  }

  positionHandler("bottom", "orange", bottomInput.value);
});

let ISLEFT = false;
let ISRIGHT = false;
leftInput.addEventListener("change", () => {
  ISLEFT = true;
  if (ISLEFT && ISRIGHT) {
    alert("You should not insert both left & right");
    window.location.reload();
  }
  const selectElement = document.getElementById("orange");
  positionHandler("left", "orange", leftInput.value);
});

rightInput.addEventListener("change", () => {
  ISRIGHT = true;
  if (ISLEFT && ISRIGHT) {
    alert("You should not insert both left & right");
    window.location.reload();
  }
  const selectElement = document.getElementById("orange");
  positionHandler("right", "orange", rightInput.value);
});
