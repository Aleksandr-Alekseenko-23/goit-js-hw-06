let textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    switchClass();
    console.log(switchClass);
  }

  function switchClass(valid, invalid) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
