
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
                alert(`You clicked ${gameType}`);
            }
        });
    }

});

function runGame() {


}

function checkAnswer() {


}

function calculateCorrectAnswer() {


}

function incrementScore() {


}

function incrementWrongAnswer() {


}

function displayAdditionQuestion() {


}

function displaySubtractQuestion() {


}

function displayMultiplyQuestion() {


}