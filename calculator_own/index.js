const display = document.getElementById("calculator-display");
const deleteButton = document.getElementById("delete-button");
const clear = document.getElementById("clear");

let value = "";

window.addEventListener("keydown", function(e) {
    if (e.key === "1") {
        add("1")
    } else if (e.key === "2") {
        add("2")
    } else if (e.key === "3") {
        add("3")
    } else if (e.key === "4") {
        add("4")
    } else if (e.key === "5") {
        add("5")
    } else if (e.key === "6") {
        add("6")
    } else if (e.key === "7") {
        add("7")
    } else if (e.key === "8") {
        add("8")
    } else if (e.key === "9") {
        add("9")
    } else if (e.key === "0") {
        add("0")
    } else if (e.key === "(") {
        add("(")
    } else if (e.key === ")") {
        add(")")
    } else if (e.key === "+") {
        add("+")
    } else if (e.key === "-") {
        add("-")
    } else if (e.key === "/") {
        add("/")
    } else if (e.key === "*") {
        add("*")
    } else if (e.key === "Enter" || e.key === "=") {
        result()
    } else if (e.key === "Backspace") {
        deleteLast()
    } else if (e.key === "C" || e.key === "c") {
        clearDisplay()
    } else if (e.key === ",") {
        add(".")
    } else {
        return;
    }
})

function add(key) {
    value = value + key;
    if (value.length >= 1) {
        clear.style.display = "none";
        deleteButton.style.display = "block";
    }
    const shownValue = value.replace(/\//g, "÷").replace(/\*/g, "×").replace(/\./g, ",");
    display.value = shownValue;
}

function deleteLast() {
    value = value.slice(0, -1)
    const shownValue = value.replace(/\//g, "÷").replace(/\*/g, "×").replace(/\./g, ",");
    display.value = shownValue
    if (value.length === 0) {
        clear.style.display = "block";
        deleteButton.style.display = "none";
        clearDisplay()
    }
}

const historyDiv = document.getElementById("history");

function toggleHistory() {
    if (historyDiv.style.display === "flex" || historyDiv.style.display === "") {
        historyDiv.style.display = "none";
        console.log("none");
    } else {
        historyDiv.style.display = "flex";
        console.log("flex");
    }
}

function clearDisplay() {
    value = "";
    display.value = "0";

    clear.style.display = "block";
    deleteButton.style.display = "none";
}

function result() {
    try {
        let calcResult = eval(value); 
        const shownValue = value.replace(/\//g, "÷").replace(/\*/g, "×").replace(/\./g, ",");
        value = calcResult.toString();
        const displayValue = value.replace(".", ",");
        display.value = displayValue;
        addToHistory(shownValue, displayValue, calcResult);
    } catch (error) {
        display.value = "E";
        console.error(error);
    }

    clear.style.display = "block";
    deleteButton.style.display = "none";
}

let historyList = [];

function addToHistory(ins, sol, raw) {
    if (historyList.length >= 3) {
        historyList.pop();
    }
    if (parseFloat(raw) % 1 === 0) {
        historyList.unshift(ins + " = " + raw);
    } else {
    const solution = parseFloat(raw).toFixed(3);
    const formatedSolution = solution.toString().replace(/\./g, ",");
    historyList.unshift(ins + " = " + formatedSolution); 
    }
    console.log(historyList);

    historyDiv.innerHTML = "";  

    for (let i = historyList.length - 1; i >= 0; i--) {
        let newElement = document.createElement("p");
        newElement.classList.add("hListItem");
        newElement.classList.add(`hisItem${i}`);
        newElement.textContent = historyList[i];
        historyDiv.appendChild(newElement);
    }


}

const hisItem1 = document.querySelector(".hisItem1")
const hisItem2 = document.querySelector(".hisItem2")
const hisItem3 = document.querySelector(".hisItem3")

hisItem1.addEventListener("click", function(e) {
    const content = hisItem1.textContent;
    historyList = [];

})

hisItem2.addEventListener("click", function(e) {
    
})

hisItem3.addEventListener("click", function(e) {
    
})