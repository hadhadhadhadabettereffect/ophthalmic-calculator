const input_y = document.getElementById("input_y");
const input_z = document.getElementById("input_z");
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

document.getElementById("button_e").addEventListener("click", function (event) {
    requestAnimationFrame(outputRadiusToK);
});

document.getElementById("button_f").addEventListener("click", function (event) {
    requestAnimationFrame(outputKToRadius);
});

document.getElementById("button_g").addEventListener("click", function (event) {
    requestAnimationFrame(handleNearPD);
})


function outputCmToDiopters() {
    const result = cmToDiopters(input_y.value);
    output.innerText = result;
}

function outputInchesToDiopters() {
    const result = inchesToDiopters(input_y.value);
    output.innerText = result;
}

function outputDioptersToCm() {
    const result = dioptersToCm(input_y.value);
    output.innerText = result;
}

function outputDioptersToInches() {
    const result = dioptersToInches(input_y.value);
    output.innerText = result;
}

function outputRadiusToK() {
    const result = radiusToK(input_y.value);
    output.innerText = result;
}

function outputKToRadius() {
    const result = kToRadius(input_y.value);
    output.innerText = result;
}

function handleNearPD() {
    const y = input_y.value;
    if (y <= 10 || y >= 80) {
        output.innerText = "y input must be between 10 and 80";
        return;
    }
    if (!input_z.value) {
        output.innerText = "";
        input_z.style.display = "block";
        input_z.focus();
    } else {
        const result = nearPD(input_y.value, input_z.value);
        output.innerText = result;
    }
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

function nearPD(y, z) {
    if (y <= 10 || y >= 80) return "y input must be between 10 and 80";
    if (z <= 9 || z >= 90) return "z input must be between 9 and 90";
    const inset = ((y / 2) * 27) / ((10 * z) + 27);
    return (y - (2 * inset)).toFixed(2);
}
