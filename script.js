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
    hover()
}

function hover() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mouseover", colorPixels));
    function colorPixels(/*ADD HEX VALUE HERE*/) {
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