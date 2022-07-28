const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = formRef.elements;

  if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповненні");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  formRef.reset();
});
