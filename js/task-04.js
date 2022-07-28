let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
function decrementNumber() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function incrementNumber() {
  counterValue += 1;
  value.textContent = counterValue;
}

btnDecrement.addEventListener("click", decrementNumber);
btnIncrement.addEventListener("click", incrementNumber);
