const sliderInput = document.getElementById("font-size-control");
const sliderSpan = document.getElementById("text");

sliderSpan.style.fontSize = sliderInput.value + "px";
sliderInput.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;
  sliderSpan.style.fontSize = `${fontSize}px`;
})