let textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    switchClass("valid", "invalid");
    console.log(switchClass);
  }

  function switchClass(addValid, addInvalid) {
    textInput.classList.add(addInvalid);
    textInput.classList.remove(addValid);
  }
});
