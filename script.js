const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const upperCharts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCharts = "abcdefghijklmnopqrstuvwxyz";
const numberCharts = "0123456789";
const symbolCharts = "!@#$%^&*()_+[]{}|;:,.<>?";

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", () => {
    let allowedChars = "";
    let password = "";

    if (uppercase.checked) allowedChars += upperCharts;
    if (lowercase.checked) allowedChars += lowerCharts;
    if (numbers.checked) allowedChars += numberCharts;
    if (symbols.checked) allowedChars += symbolCharts;

    if (allowedChars === "") {
        alert("Please select at least one character type.");
        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {
        password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }

    passwordField.value = password;
});

copyBtn.addEventListener("click", () => {
    if (passwordField.value === "") {
        alert("Please generate a password first.");
        return;
    }
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
);
