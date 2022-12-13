var calc = document.getElementsByClassName('calculator')[0]
var calcDisplay = calc.getElementsByClassName('calculator__display')[0]
var calcKeys = calc.getElementsByClassName('calculator__key')
var calcButtons = calc.getElementsByClassName('calculator__button')
var calcClear = calc.getElementsByClassName('calculator__clear')[0]
var calcEqual = calc.getElementsByClassName('calculator__key--equal')[0]
var calcPower = calc.getElementsByClassName('calculator__power')[0]
var calcSpace = calc.getElementsByClassName('calculator__backspace')[0]

for (let calcKey of calcKeys) {
    var current = calcKey.value;
    calcKey.innerText = current;
}

for (let calcButton of calcButtons) {
  calcButton.addEventListener('click', function (event) {
      calcDisplay.value += event.target.value;
  })
}

calcClear.addEventListener('click', function () {
    calcDisplay.value = '';
})

calcEqual.addEventListener('click', function () {
    calcDisplay.value = eval(calcDisplay.value);
})

calcPower.addEventListener('click', function () {
    calcDisplay.value = Math.pow(calcDisplay.value, 2);
})

calcSpace.addEventListener('click', function () {
    calcDisplay.value = calcDisplay.value.substring(0, calcDisplay.value.length-1);
})
