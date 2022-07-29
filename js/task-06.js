let textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    switchClass("valid", "invalid");
  } else {
    switchClass("invalid", "valid");
    console.log(switchClass);
  }

  function switchClass(addValid, addInvalid) {
    textInput.classList.add(addValid);
    textInput.classList.remove(addInvalid);
  }
});
