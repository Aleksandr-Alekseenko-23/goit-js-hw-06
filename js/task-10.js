const inputRef = document.querySelector('[type="number"]');
const createRef = document.querySelector("button[data-create]");
const destroyRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let array = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const randomColor = getRandomHexColor();
    div.classList.add("item");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = randomColor;
    array.push(div);
    size += 10;
  }
  boxesRef.append(...array);
};

createRef.addEventListener("click", (event) => {
  createBoxes(inputRef.value);
  console.log(createBoxes);
});

destroyRef.addEventListener("click", (event) => {
  destroyBoxes();
});

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
