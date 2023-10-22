let celcuisInput = document.querySelector('#celcuis > input');
let farenheitInput = document.querySelector('#Farenhheit > input');
let kelvinInput = document.querySelector('#Kelvin > input');

let btn = document.querySelector('.button button');

function roundNumber(number) {
    return Math.round(number * 100) / 100
}

// CELCUIS TO FARENHEIT AND KELVIN
celcuisInput.addEventListener('input', function () {
    let cTemp = parseFloat(celcuisInput.value);
    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.35;

    farenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
})


// FARENHEIT TO CELCUIS AND KELVIN
farenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(farenheitInput.value);
    let cTemp = (fTemp - 32) * (5 / 9);
    let kTemp = cTemp + 273.35;

    celcuisInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
})

// KELVIN TO CELCUIS AND FARENHEIT
kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9 / 5) - 32;

    celcuisInput.value = roundNumber(cTemp);
    farenheitInput.value = roundNumber(fTemp);
})

// CLEARING THE INPUTS ON CLICKING THE BUTTON
btn.addEventListener('click', () => {
    celcuisInput.value = "";
    farenheitInput.value = "";
    kelvinInput.value = "";
})