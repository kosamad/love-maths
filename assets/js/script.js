
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// Listens for DOM content to be loaded then executes the function
document.addEventListener('DOMContentLoaded', function () {

    // return all buttons on the page as an array which we can iterate through

    let buttons = document.getElementsByTagName('button');

    // goes through array and returns each element and stores them as button on each iteration (like doing let i = i etc, but more modern)

    for (let button of buttons) {

        // listening for this individual button element to be clicked, when it is the code in the code block runs.

        button.addEventListener('click', function () {

            // checking what attribut of data type is. the this here = the button that was clicked. if sumbit, gives alert

            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!');
            } else {

                // otherwise set game type to value of this attribute

                let gameType = this.getAttribute('data-type');
                runGame(gameType);;
            }
        });

        // want this to start as soon as page is loaded (default game)

        runGame('addition');



    }

});

// docstring used to descibe function, will appear when hover over a function in another place in this document

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

// gameType is the parameters the function accepts, so gameType is passed into the function as an argument.
function runGame(gameType) {

    // creates 2 random numbers betweem 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    // check which game is running

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        // throw stops game running and prints to console to add debugging
        throw `unknown game type: ${gameType}, Aborting!`;

    }
}

function checkAnswer() {


}

function calculateCorrectAnswer() {


}

function incrementScore() {


}

function incrementWrongAnswer() {


}

 // two arguments that are accepted are operand1 and 2
function displayAdditionQuestion(operand1, operand2) {
     // find element and set the text content to our number.
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';



}

function displaySubtractQuestion() {


}

function displayMultiplyQuestion() {


}