const input_y = document.getElementById("input_y");
const input_z = document.getElementById("input_z");
const output = document.getElementById("output");
const modal = document.getElementById("modal_wrap");
const modal_description = document.getElementById("modal_description");
const modal_output = document.getElementById("modal_output");

let current_modal = "pd";


function handleButton(a) {
    switch (a) {
        case 0: requestAnimationFrame(outputCmToDiopters); break;
        case 1: requestAnimationFrame(outputInchesToDiopters); break;
        case 2: requestAnimationFrame(outputDioptersToCm); break;
        case 3: requestAnimationFrame(outputDioptersToInches); break;
        case 4: requestAnimationFrame(outputRadiusToK); break;
        case 5: requestAnimationFrame(outputKToRadius); break;
        case 6: requestAnimationFrame(handleNearPD); break;
        default: break;
    }
}


function outputCmToDiopters() {
    const result = cmToDiopters(input_y.value);
    output.textContent = result;
}

function outputInchesToDiopters() {
    const result = inchesToDiopters(input_y.value);
    output.textContent = result;
}

function outputDioptersToCm() {
    const result = dioptersToCm(input_y.value);
    output.textContent = result;
}

function outputDioptersToInches() {
    const result = dioptersToInches(input_y.value);
    output.textContent = result;
}

function outputRadiusToK() {
    const result = radiusToK(input_y.value);
    output.textContent = result;
}

function outputKToRadius() {
    const result = kToRadius(input_y.value);
    output.textContent = result;
}

function handleNearPD() {
    const y = input_y.value;
    if (y <= 10 || y >= 80) {
        output.textContent = "y input must be between 10 and 80";
        return;
    }
    current_modal = "pd";
    setupModal();
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


function closeModal() {
    requestAnimationFrame(actuallyCloseModal);
}

function actuallyCloseModal() {
    modal.style.display = "none";
    modal_output.textContent = "";
    input_z.value = "";
    input_y.focus();
}


function setupModal() {
    switch (current_modal) {
        case "pd":
            modal_description.textContent = "Enter Working Distance (cm):";
            break;

        case "contact":
        case "spectacle":
            modal_description.textContent = "Enter Vertext Distance (mm)";
            break;
    }
    output.textContent = "";
    modal.style.display = "block";
    input_z.focus();
}

function modalCalculate() {
    if (isValidModalInput(input_z.value)) {
        requestAnimationFrame(showModalResult);
    } else {
        requestAnimationFrame(showModalError);
    }
}

function isValidModalInput(z) {
    if (current_modal == "pd") return z > 9 && z < 90;
    else return z > 3 && z < 28;
}

function showModalError() {
    if (current_modal == "pd")
        modal_output.textContent = "input must be between 9 and 90";
    else
        modal_output.textContent = "input must be between 3 and 28";
    input_z.focus();
}

function showModalResult() {
    if (current_modal == "pd") {
        output.textContent = nearPD(input_y.value, input_z.value);
    }
    actuallyCloseModal();
}
