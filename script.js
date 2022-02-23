const sketchPad = document.getElementById("canvas");
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
}

const allPixels = document.querySelectorAll(".pixel");
allPixels.forEach(pixel => pixel.addEventListener("mouseover", colorPixels));
function colorPixels(/*ADD HEX VALUE HERE*/) {
    this.classList.add('pixel-hover');
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearSketchPad);
function clearSketchPad() {
    allPixels.forEach(pixel => pixel.classList.remove('pixel-hover'));
}