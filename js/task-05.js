const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (event) => {
  if (!event.target.value.trim()) {
    outputRef.textContent = "Anonymous";
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
});
