const sketchPad = document.getElementById("canvas");

let pixelsPerSide = 20;
const canvasSize = 700;

document.addEventListener("DOMContentLoaded", sketchResolution(pixelsPerSide));

function sketchResolution(pixelsPerSide) {
    for(let i = 1; i <= pixelsPerSide ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.height = (canvasSize / pixelsPerSide) + "px";
        pixel.style.width = (canvasSize / pixelsPerSide) + "px";
        sketchPad.appendChild(pixel);
    }
    activateHover();
}

const slider = document.querySelector(".slider-resolution");
const sliderText = document.querySelector(".display-slider-resolution");
sliderText.textContent = "Your board is " + slider.value + " pixels wide.";

slider.addEventListener("input", setPixelsPerSide);
function setPixelsPerSide() {
    sliderText.textContent = "Your board is " + slider.value + " pixels wide.";
    pixelsPerSide = slider.value;
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].remove();
    }
    sketchResolution(slider.value);   
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearBoard);
function clearBoard() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.style.backgroundColor = '#fff');
}


const colorPicker = document.querySelector(".color-picker");
let currentColor = colorPicker.value;
colorPicker.addEventListener("input", updateColor);
function updateColor(e) {
    currentColor = e.target.value;
}


function activateHover() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mousedown", colorPixels));
    function colorPixels() {
        pixels.forEach(pixel => pixel.addEventListener("mousemove", colorPixels));
        let i = Math.floor(Math.random() * rainbowColors.length);
        this.style.backgroundColor = rainbowColors[i];
        // this.style.backgroundColor = currentColor;
        pixels.forEach(pixel => pixel.addEventListener("mouseup", removeListener));
        function removeListener() {
            pixels.forEach(pixel => pixel.removeEventListener("mousemove", colorPixels));
        }
    }
}

// const unicornBtn = document.querySelector(".unicorn");
// const rainbowColors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];
// unicornBtn.addEventListener("click", activateUnicorn)


const eraseBtn = document.querySelector(".eraser");

eraseBtn.addEventListener("click", activateEraser);
function activateEraser() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mousedown", clearPixel));
    function clearPixel() {
        pixels.forEach(pixel => pixel.addEventListener("mousemove", clearPixel));
        this.style.backgroundColor = '#fff';
        pixels.forEach(pixel => pixel.addEventListener("mouseup", removeListener));
        function removeListener() {
            pixels.forEach(pixel => pixel.removeEventListener("mousemove", clearPixel))
        }
    }
}

const pencilBtn = document.querySelector(".pencil");
pencilBtn.addEventListener("click", activateHover);

