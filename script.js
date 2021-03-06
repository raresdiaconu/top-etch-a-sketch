const canvas = document.getElementById("canvas");
const slider = document.querySelector(".slider-resolution");
const clearBtn = document.querySelector("#clear");
const colorPicker = document.querySelector(".color-picker");
const pencilBtn = document.querySelector("#pencil");
const randomBtn = document.querySelector("#rainbow");
const eraserBtn = document.querySelector("#eraser");
const brushBtn = document.querySelector("#brush");

slider.addEventListener("input", setPixelsPerSide);
clearBtn.addEventListener("click", clearBoard);
randomBtn.addEventListener("click", color);
pencilBtn.addEventListener("click", picker);
pencilBtn.addEventListener("click", color);
eraserBtn.addEventListener("click", color);
brushBtn.addEventListener("click", color);

const canvasSize = 550;
let pixelsPerSide = 20;
const rainbowColors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];
let currentValue = "";
let currentColor = colorPicker.value;

document.addEventListener("DOMContentLoaded", canvasResolution(pixelsPerSide));

function canvasResolution(pixelsPerSide) {
    for(let i = 1; i <= pixelsPerSide ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.style.gridTemplateColumns = "repeat(" + pixelsPerSide + ", 1fr)"
        pixel.addEventListener("mousedown", colorPixels);
        pixel.addEventListener("mouseup", removeListener);
        canvas.appendChild(pixel);
    }
}

function setPixelsPerSide() {
    pixelsPerSide = slider.value;
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].remove();
    }
    canvasResolution(slider.value);   
}

function clearBoard() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '#fff';
        pixel.style.opacity = 1;
        currentColor = colorPicker.value;
        currentValue = "pencil";
    });
}

colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value
    if (currentValue === "brush") {
        currentValue = "brush";
    } else {
        currentValue = "pencil";
    }
});

function picker(e) {
    currentColor = colorPicker.value;
}

function color(e) {
    currentValue = e.currentTarget.id;
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