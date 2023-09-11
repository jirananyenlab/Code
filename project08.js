

function toCelsius(fah){
    let value = (fah - 32)*5/9
    return value.toFixed(2) + " ํc" //toFixed(2)ทศนิยม 2 หลัก
}

function toFah(cel){
    let value = (cel*9)/5+32
    return value.toFixed(2) + " F" //toFixed(2)ทศนิยม 2 หลัก
}

// function display(elementID, value){
// document.getElementById(elementID).innerHTML = value
// }

function toCelsiusProgram(value){
    alert(toCelsius(value))
}

function toFahrenheit(value){
    alert(toFah(value))
}

