let pixelsPerSide = 20;
const canvas = document.getElementById("canvas");
const canvasSize = 550;
const rainbowColors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];
let currentValue = "";


document.addEventListener("DOMContentLoaded", sketchResolution(pixelsPerSide));

function sketchResolution(pixelsPerSide) {
    for(let i = 1; i <= pixelsPerSide ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.height = (canvasSize / pixelsPerSide) + "px";
        pixel.style.width = (canvasSize / pixelsPerSide) + "px";
        pixel.addEventListener("mousedown", colorPixels);
        pixel.addEventListener("mouseup", removeListener);
        canvas.appendChild(pixel);
    }
}

const slider = document.querySelector(".slider-resolution");

slider.addEventListener("input", setPixelsPerSide);
function setPixelsPerSide() {
    pixelsPerSide = slider.value;
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].remove();
    }
    sketchResolution(slider.value);   
}

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearBoard);
function clearBoard() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '#fff';
        pixel.style.opacity = 1;
        currentColor = colorPicker.value;
        currentValue = "pencil";
    });
}

const colorPicker = document.querySelector(".color-picker");
let currentColor = colorPicker.value;
colorPicker.addEventListener("input", (e) => currentColor = e.target.value);


const pencilBtn = document.querySelector("#pencil");
const randomBtn = document.querySelector("#rainbow");
const eraserBtn = document.querySelector("#eraser");
const lighterBtn = document.querySelector("#brush");

randomBtn.addEventListener("click", color);
pencilBtn.addEventListener("click", picker);
pencilBtn.addEventListener("click", color);
eraserBtn.addEventListener("click", color);
lighterBtn.addEventListener("click", color);

function picker(e) {
    currentColor = colorPicker.value;
}


function color(e) {
    currentValue = e.target.id;
}


function colorPixels(e) { 
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mouseover", colorPixels));

    if (currentValue === "pencil") {
        e.target.style.opacity = 1;
    }

    if (currentValue === "brush") {
        currentColor = colorPicker.value;
        let currentOpacity = e.target.style.opacity
        if (currentOpacity === "1") {
            e.target.style.opacity = 0.1;
        } else if (currentOpacity === 0.9) {
            e.target.style.opacity = 0.9;
        } else if (currentOpacity < 0.9) {
            e.target.style.opacity = Number(currentOpacity) + 0.1; 
        }
    }

    if (currentValue === "eraser") {
        e.target.style.opacity = 1;
        currentColor = "#fff";
    }

    if (currentValue === "rainbow") {
        e.target.style.opacity = 1;
        let i = Math.floor(Math.random() * rainbowColors.length);
        currentColor = rainbowColors[i];
    }

    e.target.style.backgroundColor = currentColor;
}

function removeListener() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.removeEventListener("mouseover", colorPixels));
}