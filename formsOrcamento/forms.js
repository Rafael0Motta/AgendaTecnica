function handleCheckboxChange() {
  let outrosCheckbox = document.getElementById("Outros");
  let textarea = document.getElementById("mensagem");

  if (outrosCheckbox.checked) {
    textarea.style.display = "block";
  } else {
    textarea.style.display = "none";
  }
}

function handleRecaptcha() {
  let button = document.getElementById("submitButton");
  button.disabled = false;
  button.classList.remove("disabled");
}
