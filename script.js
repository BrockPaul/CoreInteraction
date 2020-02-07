/* 
  HI!
  
  YOU SHOULD PROBABLY NOT EDIT THESE FUNCTION DEFINITIONS BELOW.
  
  (YOU'RE WELCOME TO IF YOU'RE FEELING ADVENTUROUS)
  
  SKIP TO LINE 70 AND WORK FROM THERE. 
*/

// wait for the html content to be loaded and then call a function
window.addEventListener("DOMContentLoaded", function() {
  // call the start function
  start();
});

/*
    Returns a random whole number between minimum value and maximum value
    For example, calling randomNumber(0, 255);
    will return a random whole number between 0 and 255.
    Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
    Returns a random floating point number between minimum value and maximum value
    For example, calling randomFloat(0, 1);
    will return a random floating between 0.0 and 1.0.
    Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
  */
function randomFloat(min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max - min) + min;
  } else {
    value = Math.random() * (max - min) + min;
  }

  return parseFloat(value.toFixed(2));
}

/* 
    Returns a color string in the form of "hsl(100, 50%, 50%)"
    For example, calling color(10, 100, 40);
    will return a string "hsl(10, 100%, 40%)"
  */
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}

// set class name for shape container div
var shapeContainerClassName = "shape-container";

/* Call this function when the page loads */
function start() {
  // randomize background color properties and store in variables
  var backgroundHue = randomNumber(180, 240);
  var backgroundSaturation = randomNumber(85, 100);
  var backgroundLuminance = randomNumber(30, 90);

  // store color in variable
  var backgroundColor = hslColor(
    backgroundHue,
    backgroundSaturation,
    backgroundLuminance
  );

  // set background color
  document.body.style.backgroundColor = backgroundColor;

  // set the number of divs to add to the page
  var shapeCount = 400;

  // add divs to the page based on the shapeCount
  for (var i = 0; i < shapeCount; i++) {
    addShapeToDOM();
  }

  addInteractionToShapeContainers();
}

function addShapeToDOM() {
  // select container element
  var container = document.querySelector(".content");

  // set class name for shape div
  var shapeClassName = "shape";

  // create a generic div element and store it in a variable
  var shape = document.createElement("div");

  // make sure the generic div has the common 'shape' class
  shape.classList.add(shapeClassName);

  // randomize css properties
  shape.style.width = randomNumber(100, 100) + "px";
  shape.style.height = randomNumber(100, 100) + "px";

  // randomize a color for top border
  var topBorderHue = randomNumber(100, 120);
  var topBorderSaturation = randomNumber(50, 100);
  var topBorderLuminance = randomNumber(20, 50);

  // set the color on the top border
  shape.style.color = hslColor(
    topBorderHue,
    topBorderSaturation,
    topBorderLuminance
  );

  shape.style.marginLeft = randomNumber(10, 200) + "px";
  shape.style.transform = randomNumber(20, 360) + "deg";

  // list possible css keyframe animation names
  var animationNames = [
    "rotate"
    //   'pulse',
    //   'spin'
  ];

  // store the number of animations in a variable
  var animationCount = animationNames.length;

  // use the number of animation count to randomize a number that will select one animation
  var randomIndex = randomNumber(0, animationCount);

  // select an animation name from the list based on the ranndom number
  var animationName = animationNames[randomIndex];

  // set the animation on the div
  shape.style.animationName = animationName;

  // add a random animation duration and delay
  shape.style.animationDelay = randomNumber(0, 0) + "ms";
  shape.style.animationDuration = randomNumber(1000, 1000) + "ms";

  // set the animation direction
  shape.style.animationDirection = "alternate-reverse";

  // each shape div will be added to another container div
  var shapeContainer = document.createElement("div");

  // the container div will have a class of shape-container
  shapeContainer.classList.add(shapeContainerClassName);

  // add the shape div to the container div
  shapeContainer.appendChild(shape);

  // add the div container to the DOM, inside the container div
  container.appendChild(shapeContainer);
}

function addInteractionToShapeContainers() {
  // set class name for shape container div with interaction
  var interactionClassName = "shape-container-interaction";
  var interactionClassName2 = "shape-container-interaction";

  // select all shape containers on the page
  var shapeContainers = document.querySelectorAll(
    "." + shapeContainerClassName
  );

  // add interactions to each shape container
  shapeContainers.forEach(function(shapeContainer) {
    // when the cursor is over the shape container, add a modifier class
    // when the cursor is outside of the shape container, remove the modifier class
    shapeContainer.addEventListener("mouseover", function() {
      if (shapeContainer.classList.contains(interactionClassName)) {
        shapeContainer.classList.remove(interactionClassName);
      } else {
        shapeContainer.classList.add(interactionClassName);
      }
    });
  });
}

function pageScroll() {
  window.scrollBy(0, 10); // horizontal and vertical scroll increments
  scrolldelay = setTimeout("pageScroll()", 50); // scrolls every 100 milliseconds
}
