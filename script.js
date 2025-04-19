let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        if ( result === Infinity || result === -Infinity) {
            throw new Error("Division by zero is not allowed.");
        }else
        {
            display.value = result;
        }
    }
    catch (error) {
        display.value = "Error !";
    }}