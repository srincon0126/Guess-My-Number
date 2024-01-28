'use strict';
console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (points) {
    document.querySelector('.score').textContent = points;
}
let backgroundColors = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}

// addEventListener
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when does not choose number
    if (!guess) {
        // document.querySelector('.message').textContent = 'Pick A Number';
        displayMessage('Pick A Number');

        // when they got it right 
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🙄 You Got The Correct number! 🎉🎊';
        displayMessage('🙄 You Got The Correct number! 🎉🎊');
        // document.querySelector('body').style.backgroundColor = '#60b347 ';
        backgroundColors('#60b347 ')
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;



        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }


        //   new code when I use a ternary operator && change to strict inequality;
        //     When guess is wrong 
    } else if (guess !== secretNumber) {

        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '🥱 Is to High' :
            //     '😛 Is to Low';
            displayMessage(guess > secretNumber ? '🥱 Is to High' :
                '😛 Is to Low');
            score--;
            // document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            displayMessage('😥 You Lost');
            // document.querySelector('.score').textContent = 0;
            displayScore(0);
            backgroundColors('#8B0000');
        }




    } /* old Code: there is to much duduplicate 
     //  when number is to high 
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '🥱 Is to High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😥 You Lost';
            document.querySelector('.score').textContent = 0;
        }

        // when number is to low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '😛 Is to Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😥 You Lost';
            document.querySelector('.score').textContent = 0;
        }
    } */
});

document.querySelector('.again').addEventListener('click', function () {
    // document.querySelector('body').style.backgroundColor = '#222';
    backgroundColors('#222');
    document.querySelector('.number').style.width = '15rem';
    score = 20
    // document.querySelector('.score').textContent = score;
    displayScore(score);
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})
