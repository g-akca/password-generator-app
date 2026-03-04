const password = document.getElementById("password");
const copiedText = document.getElementById("copied-text");
const copyBtn = document.querySelector("#result-div svg");
const lengthInput = document.getElementById("length");
const lengthText = document.getElementById("length-text");

copyBtn.addEventListener("click", () => {
    password.select();
    password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.value);
    copiedText.hidden = false;
});

lengthInput.addEventListener("input", () => {
    lengthText.innerText = lengthInput.value;
});