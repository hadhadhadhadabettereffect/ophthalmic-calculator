const input = document.getElementById("input_y");
const output = document.getElementById("output");


document.getElementById("button_a").addEventListener("click", function (event) {
    requestAnimationFrame(outputCmToDiopters);
});

document.getElementById("button_b").addEventListener("click", function (event) {
    requestAnimationFrame(outputInchesToDiopters);
});

document.getElementById("button_c").addEventListener("click", function (event) {
    requestAnimationFrame(outputDioptersToCm);
});

document.getElementById("button_d").addEventListener("click", function (event) {
    requestAnimationFrame(outputDioptersToInches);
});


function outputCmToDiopters() {
    const result = cmToDiopters(input.value);
    output.innerText = result;
}

function outputInchesToDiopters() {
    const result = inchesToDiopters(input.value);
    output.innerText = result;
}

function outputDioptersToCm() {
    const result = dioptersToCm(input.value);
    output.innerText = result;
}

function outputDioptersToInches() {
    const result = dioptersToInches(input.value);
    output.innerText = result;
}


function cmToDiopters(y) {
    if (y <= 0 || y >= 500) return "input must be between 0 and 500";
    return (100 / y).toFixed(2);
}

function inchesToDiopters(y) {
    if (y <= 0 || y >= 200) return "input must be between 0 and 200";
    return (100 / (2.54 * y)).toFixed(2);
}

function dioptersToCm(y) {
    if (y <= -60 || y >= 60 || y == 0) return "input must be between -60 and 60";
    return (100 / y).toFixed(2);
}

function dioptersToInches(y) {
    if (y <= -60 || y >= 60 || y == 0) return "input must be between -60 and 60";
    return (100 / (2.54 * y)).toFixed(2);
}

function radiusToK(y) {
    if (y <= 4 || y >= 10) return "input must be between 4 and 10";
    return (337.5 / y).toFixed(2);
}

function kToRadius(y) {
    if (y <= 20 || y >= 70) return "input must be between 20 and 70";
    return (337.5 / y).toFixed(2);
}

