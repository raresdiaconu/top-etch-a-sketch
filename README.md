# TOP Etch-A-Sketch

Live x https://raresdiaconu.github.io/top-etch-a-sketch/

My etch-a-sketch build, part of The Odin Project curriculum (https://theodinproject.com/).
This is the 2nd project in which I'll be using Javascript!:)

The user will have the possibility to select a number of squares/side and then they will be generated through JS. I will also want to give the user the ability to change the color or just have the colors randomly change from square to square.

LE:
I ended up giving the user the possibility to choose:
- pencil (color chosen via a colorpicker)
- brush (color chosen via a colorpicker)
- a random color from the colors of the rainbow with each pass of the mouse
- erase + clean canvas functions

I also set up a range slider to adjust the canvas resolution.

I deliberately chose to change the mechanics of the Etch A Sketch to more of a drawing board. In the traditional Etch A Sketch fashion, each pixel would have had to change color on mouse hover. In my version the user has to click and drag to change the color of the pixels. I thought that this way the game would be more enjoyable and would give the user more possibilities. That being said, I am aware of the fact that the beauty of the Etch A Sketch also lays in its limitations.

My biggest challenge was letting the EventListener which listened for mousedown + mouseover know which of the color modes (listed above) was on. After some experimenting I managed to set it up!

🔶

Upgrades to-do:
- save image feat
- make responsive