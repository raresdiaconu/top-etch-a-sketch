let pixelsPerSide = 20;
const canvas = document.getElementById("canvas");
const canvasSize = getComputedStyle(canvas).width.substring(0, 3);
const rainbowColors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];


document.addEventListener("DOMContentLoaded", sketchResolution(pixelsPerSide));

function sketchResolution(pixelsPerSide) {
    for(let i = 1; i <= pixelsPerSide ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.height = (canvasSize / pixelsPerSide) + "px";
        pixel.style.width = (canvasSize / pixelsPerSide) + "px";
        pixel.addEventListener("mouseover", colorPixels);
        canvas.appendChild(pixel);
    }
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
colorPicker.addEventListener("change", (e) => currentColor = e.target.value);


const pencilBtn = document.querySelector(".pencil");
const randomBtn = document.querySelector(".rainbow");
const eraserBtn = document.querySelector(".eraser");
const lighterBtn = document.querySelector(".lighter");

randomBtn.addEventListener("click", color);
pencilBtn.addEventListener("click", picker);
pencilBtn.addEventListener("click", color);
eraserBtn.addEventListener("click", color);
lighterBtn.addEventListener("click", color);

function picker(e) {
    currentColor = colorPicker.value;
}

let currentValue = ""
function color(e) {
    currentValue = e.target.classList.value;
}


function colorPixels(e) {
    // console.log(currentValue)   
    if (currentValue === "rainbow") {
        let i = Math.floor(Math.random() * rainbowColors.length);
        currentColor = rainbowColors[i];
    }

    if (currentValue === "eraser") {
        currentColor = "#fff";
    }

    if (currentValue === "lighter") {
        currentColor = "rgba(51, 180, 51, .1)";
    }
    
    e.target.style.backgroundColor = currentColor;
}



// let R = Math.floor(Math.random() * 255);
// let G = Math.floor(Math.random() * 255);
// let B = Math.floor(Math.random() * 255);
// currentColor = `rgb(${R}, ${G}, ${B})`;