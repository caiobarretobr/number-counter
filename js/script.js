var currentNum = document.getElementById("currentNumber");
var currentNumber = 0;
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");

function increment() {
    currentNumber += 1;
    currentNum.innerHTML = currentNumber;
    if (Number.parseInt(currentNum.innerHTML) >= 0 ) {
        currentNum.style.color = "black";
    }
    if (Number.parseInt(currentNum.innerHTML) !== -10) {
        b1.disabled = false;
    }
    if (Number.parseInt(currentNum.innerHTML) === 10) {
        b2.disabled = true;
    }
}

function decrement() {
    currentNumber -= 1;
    currentNum.innerHTML = currentNumber;
    if (Number.parseInt(currentNum.innerHTML) < 0 ) {
        currentNum.style.color = "red";
    }
    if (Number.parseInt(currentNum.innerHTML) !== 10) {
        b2.disabled = false
    } 
    if (Number.parseInt(currentNum.innerHTML) === -10) {
        b1.disabled = true;
    }
}

b2.addEventListener("click", increment);
b1.addEventListener("click", decrement);