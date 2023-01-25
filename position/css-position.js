const fruits = document.querySelectorAll(".fruit");
// fruits.forEach((fruit) => {});
const positionHandler = (pos, selectElement) => {
  const userChoiceValue = topInput.value;
  const selectElementTag = document.getElementById(selectElement);
  selectElementTag.style[pos] = userChoiceValue + "px";
};

const topInput = document.getElementById("top");
topInput.addEventListener("change", () => {
  positionHandler("top", "orange");
});
// const orangeTag = document.getElementById("orange");
// console.log((orangeTag.style.top = "30px"));
