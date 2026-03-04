const password = document.getElementById("password");
const copiedText = document.getElementById("copied-text");
const copyBtn = document.querySelector("#result-div svg");

const lengthInput = document.getElementById("length");
const lengthText = document.getElementById("length-text");

const uppercaseOption = document.getElementById("uppercase");
const lowercaseOption = document.getElementById("lowercase");
const numbersOption = document.getElementById("numbers");
const symbolsOption = document.getElementById("symbols");

const generateBtn = document.getElementById("generate-btn");

copyBtn.addEventListener("click", () => {
    password.select();
    password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.value);
    copiedText.hidden = false;
});

lengthInput.addEventListener("input", () => {
    lengthText.innerText = lengthInput.value;
});

generateBtn.addEventListener("click", () => {
    const charPool = [];

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    if (uppercaseOption.checked) charPool.push(...uppercaseChars);

    if (lowercaseOption.checked) charPool.push(...lowercaseChars);

    if (numbersOption.checked) charPool.push(...numberChars);

    if (symbolsOption.checked) charPool.push(...symbolChars);

    if (charPool.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    const length = lengthInput.value;
    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
        generatedPassword += charPool[Math.floor(Math.random() * charPool.length)];
    }

    password.value = generatedPassword;
    copiedText.hidden = true;
});