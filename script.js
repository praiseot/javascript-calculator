

let display = document.getElementById("result")


const addToScreen = (value) => {
    display.innerHTML = display.innerHTML + value
}

const calculate = () => {
    display.innerHTML = eval(display.innerHTML)
}
const clearScreen = () => {
    display.innerHTML = ""
}

const deleteLast = () => {
    display.innerHTML = display.innerHTML.slice(0, -1)
}

const squareRoot = () => {
    display.innerHTML = Math.sqrt(display.innerHTML)
}

const square = () => {
    display.innerHTML = Math.pow(display.innerHTML, 2)
}
