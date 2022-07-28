const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", (event) => {
  const font = event.target.value;
  textRef.style.fontSize = `${font}px`;
});
