
// Function that clear the displayplay
function clr() {
    document.getElementById("result").value = ""
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function solve() {
    var num = document.getElementById("result").value;
    var answ = eval(num);
    document.getElementById("result").value = answ;
}