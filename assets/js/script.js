
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

            // checking what attribut of data type is. the this here = the button that was clicked. if sumbit, it calls the checkAnswer function

            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
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

/**
 * Checks teh anser against the first element in 
 * the returned calculateCorrectAnswer array
 */

function checkAnswer() {

    // check the DOM for the answer the user has imputed and stores it in the variable. needs to be a value not innertext as it is an input element.
    let userAnswer = parseInt(document.getElementById('answer-box').value);

    // function returns an array
    let calculatedAnswer = calculateCorrectAnswer();

    // comparing the answers (user and calculated) using a shorthand method
    let isCorrect = userAnswer === calculatedAnswer[0];

    // if isCorrect is true (part in brackets is what it checks), the user is congratulated. If not it tells them what the correct answer is by pulling
    // the value out of the array
    if (isCorrect) {
        alert('Hey! You got it right! :D');
    } else {
        alert(`Awwww.....you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    // last thing is to run another game of the same type so use the second element from the calculated correct answer array.

    runGame(calculatedAnswer[1]);



}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answwer.
 */

function calculateCorrectAnswer() {

    // read value from the DOM and store as a variable. ParseInt makes sure we treat what's returned as a number (not the defult string)
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    // if the operator is a + game then the correct answer is calculated (first value is stored as operand 1, 
    //second is stored as operand 2 and sotred the plus sign in the operator) and returns an 
    //array which has 2 elements 1.the result and 2. the game type coming up next (addition unless changed)

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else {
        alert(`Uniplemented operator${operator}`);
        throw `Uniplemented operator${operator}. Aborting!`;
    }


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