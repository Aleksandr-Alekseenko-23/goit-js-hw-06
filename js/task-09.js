const buttonRef = document.querySelector('[type="button"]');
const colorRef = document.querySelector(".color");

buttonRef.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorRef.textContent = randomColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
