const inputRed = document.getElementById('red')
const inputGreen = document.getElementById('green')
const inputBlue = document.getElementById('blue')

const colorPreview = document.getElementById('color-preview')
const result = document.getElementById('result')

let red = inputRed.value
let green = inputGreen.value
let blue = inputBlue.value

function actualizarElementos() {
    colorPreview.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    result.textContent = toHex(red, green, blue)
}

function toHex(r, g, b) {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`
}

actualizarElementos()

inputRed.addEventListener('change', (e) => {
    red = e.target.value
    actualizarElementos()
})
inputGreen.addEventListener('change', (e) => {
    green = e.target.value
    actualizarElementos()
})
inputBlue.addEventListener('change', (e) => {
    blue = e.target.value
    actualizarElementos()
})