const sketchPad = document.getElementById("canvas");
// let defaultPixelsValue = 20;
let pixelsPerSide = 20;
let canvasSize = 700;

document.addEventListener("DOMContentLoaded", sketchResolution(pixelsPerSide));

function sketchResolution(pixelsPerSide) {
    for(let i = 1; i <= pixelsPerSide ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.height = (canvasSize / pixelsPerSide) + "px";
        pixel.style.width = (canvasSize / pixelsPerSide) + "px";
        sketchPad.appendChild(pixel);
    }
    hover()
}

// let slider = document.querySelector(".slider-resolution");
// let sliderText = document.querySelector(".display-slider-resolution");
// sliderText.textContent = slider.value;

// slider.addEventListener("input", setPixelsPerSide);
// function setPixelsPerSide() {

//     sliderText.textContent = slider.value;

//     pixelsPerSide = slider.value;

//     const currentPixels = document.querySelectorAll(".pixel");

//     if (currentPixels.length > pixelsPerSide ** 2) {
//         // removePixels(pixelsPerSide, currentPixels.length);
//         for (let i = 0; i < (currentPixels.length) - (pixelsPerSide ** 2); i++) {
//             currentPixels[i].remove();
//             currentPixels.forEach(pixel => {
//                 pixel.style.height = (canvasSize / pixelsPerSide) + "px";
//                 pixel.style.width = (canvasSize / pixelsPerSide) + "px";
//             })
    
//         }
//     }

//     if (currentPixels.length < pixelsPerSide ** 2) {
//         addPixels(pixelsPerSide, currentPixels.length)
//         currentPixels.forEach(pixel => {
//             pixel.style.height = (canvasSize / pixelsPerSide) + "px";
//             pixel.style.width = (canvasSize / pixelsPerSide) + "px";
//         })
//     }
//     hover(currentPixels);
// }

// function removePixels(pixelsPerSide, currentPixelsLength) {
//     for (let i = 0; i < (currentPixelsLength) - (pixelsPerSide ** 2); i++) {
//         allPixels[i].remove();
//         allPixels.forEach(pixel => {
//             pixel.style.height = (canvasSize / pixelsPerSide) + "px";
//             pixel.style.width = (canvasSize / pixelsPerSide) + "px";
//         })

//     }
// }

function addPixels(pixelsPerSide, currentPixelsLength) {
    for (let i = 0; i < (pixelsPerSide ** 2) - currentPixelsLength; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.height = (canvasSize / pixelsPerSide) + "px";
        pixel.style.width = (canvasSize / pixelsPerSide) + "px";
        sketchPad.appendChild(pixel);
    }
}


// const allPixels = document.querySelectorAll(".pixel");
// allPixels.forEach(pixel => pixel.addEventListener("mouseover", colorPixels));
// function colorPixels(/*ADD HEX VALUE HERE*/) {
//     this.classList.add('pixel-hover');
// }

// function hover(currentPixels) {
//     currentPixels.forEach(pixel => pixel.addEventListener("mouseover", colorPixels));
//     function colorPixels(/*ADD HEX VALUE HERE*/) {
//     this.classList.add('pixel-hover');
// }
// }



/// CLEAR BUTTON + ADD PIXELS VARIANTA LATE NITE

// const clearButton = document.querySelector(".clear");
// clearButton.addEventListener("click", clearSketchPad);
// function clearSketchPad() {
//     const allPixels = document.querySelectorAll(".pixel");
//     allPixels.forEach(pixel => pixel.classList.remove('pixel-hover'));
//     let userInput = prompt("enter a numerical value", 20);
//     for (let i = 0; i < allPixels.length; i++) {
//         allPixels[i].remove();
//     }
//     sketchResolution(userInput);
// }

function hover() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mouseover", colorPixels));
    function colorPixels() {
        this.classList.add('pixel-hover');
    }
}


let slider = document.querySelector(".slider-resolution");
let sliderText = document.querySelector(".display-slider-resolution");
sliderText.textContent = slider.value;

slider.addEventListener("input", setPixelsPerSide);
function setPixelsPerSide() {
    sliderText.textContent = slider.value;
    pixelsPerSide = slider.value;
    const allPixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < allPixels.length; i++) {
        allPixels[i].remove();
    }
    sketchResolution(slider.value);   
}