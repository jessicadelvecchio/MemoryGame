const gameContainer = document.getElementById("game");
// let cardCounter = 0; // card counter 
let preventClicking = false;
let cardOne = null;
let cardTwo = null;


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

  //if prevent clicking is true, return/do nothing
  //if cardCounter is < 2 preventclicking is false. else true
  // if cardone and cardtwo is not undefined then two cards have been clicked. Then 

  let clickedCard = event.target;  // define clicked card
  let clickedDivColor = event.target.classList.value;  // define background color, is class name
  cardFront = true;
  cardCounter++;


  //TODO Users should only be able to change at most two cards at a time.
  if (cardCounter < 2) {   // only if counter is < 2 allow bgcolor change

    //TODO Clicking a card should change the background color to be the color of the class it has. 
    // change background color of clicked card
    for (let i = 0; i < shuffledColors.length; i++) {
      if (shuffledColors[i] === clickedDivColor) {
        clickedCard.style.backgroundColor = { clickedDivColor };
      }
    }
  } else {
    setTimeout(() => {
      cardCounter = 0;
      cardFront = false;
      clickedCard.style.backgroundColor = "";
    }, 1000); // numerical value, not string
  }







  // define first card
  // define second card


  //TODO Clicking on two matching cards should be a “match” — those cards should stay face up.

  // if first card and second card have same div class color they stay face up, else flip over
  // if match, remove from color array?
  // boolean value for flipped or not, define variable for this
  // should each card be an object to add this? or is that complicating things?

  //TODO When clicking two cards that are not a match, they should stay turned over for at least 1 second before they hide the color again. You should make sure to use a timer so that you can execute code after one second.

  // setTimeout***


  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target, clickedDivColor);
  console.log(event.target.style.backgroundColor = clickedDivColor);
  console.log(cardCounter);
}


// when the DOM loads
createDivsForColors(shuffledColors);
