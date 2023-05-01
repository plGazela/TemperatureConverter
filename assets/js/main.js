const leftTempEl = document.getElementsByClassName("app__select")[0];
const rightTempEl = document.getElementsByClassName("app__select")[1];

leftTempEl.addEventListener("change", calculateTemp);
rightTempEl.addEventListener("change", calculateTemp);

const tempInput = document.getElementsByClassName("app__input")[0];
tempInput.addEventListener("keyup", calculateTemp);


function calculateTemp() {
    let temperaturesArray;
    let tempToConvert = Number(tempInput.value);

    switch(leftTempEl.value) {
        case "celsius":
            temperaturesArray = celsiusConvertion(tempToConvert);
            break;
        case "kelvin":
            temperaturesArray = kelvinConversion(tempToConvert);
            break;
        case "fahrenheit":
            temperaturesArray = fahrenheitConversion(tempToConvert);
            break;
        case "rankine":
            temperaturesArray = rankineConversion(tempToConvert);
            break;
        case "reaumur":
            temperaturesArray = reaumurConversion(tempToConvert);
            break;
    }

    // Rounding results to 2 decimal numbers
    for(let key in temperaturesArray) {
        temperaturesArray[key] = Math.round(temperaturesArray[key] * 100) / 100;
    }

    // Displaing results
    let tempResult = document.getElementsByClassName("app__result")[0]; 
    switch(rightTempEl.value) {
        case "celsius":
            tempResult.textContent = temperaturesArray["celsius"];
            break;
        case "kelvin":
            tempResult.textContent = temperaturesArray["kelvin"];
            break;
        case "fahrenheit":
            tempResult.textContent = temperaturesArray["fahrenheit"];
            break;
        case "rankine":
            tempResult.textContent = temperaturesArray["rankine"];
            break;
        case "reaumur":
            tempResult.textContent = temperaturesArray["reaumur"];
            break;
    }
}

// Temperatures conversion
function celsiusConvertion(celsiusTemp) {
    let convertedTemp = {
        celsius: celsiusTemp,
        kelvin: celsiusTemp + 273.15,
        fahrenheit: (celsiusTemp * 1.8) + 32,
        rankine: (celsiusTemp * 1.8) + 32 + 459.67,
        reaumur: celsiusTemp * 0.8
    }

    return convertedTemp;
}
function kelvinConversion(kelvinTemp) {
    let convertedTemp = {
        celsius: kelvinTemp - 273.15,
        kelvin: kelvinTemp,
        fahrenheit: (kelvinTemp * 1.8) - 459.67,
        rankine: kelvinTemp * 1.8,
        reaumur: (kelvinTemp - 273.15) * 0.8
    }

    return convertedTemp;
}
function fahrenheitConversion(fahrenheitTemp) {
    let convertedTemp = {
        celsius: (fahrenheitTemp - 32) / 1.8,
        kelvin: (fahrenheitTemp + 459.67) / 1.8,
        fahrenheit: fahrenheitTemp,
        rankine: fahrenheitTemp + 459.67,
        reaumur: (fahrenheitTemp - 32) / 2.25
    }

    return convertedTemp;
}
function rankineConversion(rankineTemp) {
    let convertedTemp = {
        celsius: (rankineTemp - 32 - 459.67) / 1.8,
        kelvin: rankineTemp / 1.8,
        fahrenheit: rankineTemp - 459.67,
        rankine: rankineTemp,
        reaumur: (rankineTemp - 32 - 459.67) / 2.25 
    }

    return convertedTemp;
}
function reaumurConversion(reaumurTemp) {
    let convertedTemp = {
        celsius: reaumurTemp * 1.25,
        kelvin: reaumurTemp * 1.25 + 273.15,
        fahrenheit: reaumurTemp * 2.25 + 32,
        rankine: (reaumurTemp * 2.25) + 32 + 459.67,
        reaumur: reaumurTemp
    }

    return convertedTemp;
}