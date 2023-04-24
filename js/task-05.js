const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener("input", (event) => {
  if (inputName.value.trim() !== "") {
    outputName.textContent = inputName.value;
  } else { outputName.textContent = 'Anonymous' }
});
