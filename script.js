const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {

  // define clicked card
  let clickedCard = event.target;
  let clickedDivColor = event.target.classList.value;

  //TODO Clicking a card should change the background color to be the color of the class it has.
  for (let i = 0; i++; i < shuffledColors.length) {
    if (shuffledColors[i] === clickedDivColor) {
      clickedCard.style.backgroundColor = { clickedDivColor };
      break;
    }
  }





  // define background color, is class name
  // change background color of clicked card

  //TODO Users should only be able to change at most two cards at a time.

  // define first card
  // define second card
  // only allow two cards at a time

  //TODO Clicking on two matching cards should be a “match” — those cards should stay face up.

  // if first card and second card have same div class color they stay face up, else flip over
  // if match, remove from color array?
  // boolean value for flipped or not, define variable for this
  // should each card be an object to add this? or is that complicating things?

  //TODO When clicking two cards that are not a match, they should stay turned over for at least 1 second before they hide the color again. You should make sure to use a  so that you can execute code after one second.

  // setTimeout***


  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target, clickedDivColor);
  console.log(event.target.style.backgroundColor = clickedDivColor);
}


// when the DOM loads
createDivsForColors(shuffledColors);
