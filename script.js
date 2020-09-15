//===========================================================================
//Quiz framework
//===========================================================================

//global variables
var questionText = document.querySelector(".questionArea");
var answerBtnOne = document.querySelector("#answerOneBtn");
var answerBtnTwo = document.querySelector("#answerTwoBtn");
var answerBtnThree = document.querySelector("#answerThreeBtn");
var answerBtnFour = document.querySelector("#answerFourBtn");
var secondsLeft = 200;
var quizScore = 0;


//This part handles hiding and showing all parts of the quiz
var startGameBlock = document.querySelector(".startGame") // start game block
var questionBlock = document.querySelector(".questions"); // questions block
var answersBlock = document.querySelector(".answers"); //answers block
var submitBtn = document.querySelector(".submitArea"); //submit button
var timeRemaining = document.querySelector(".timeRemaining"); //time remaining
var gameOver = document.querySelector(".endGame"); //game over page
var userScore = document.querySelector(".score"); //user score


//On clicking start game, time remaining, question block, answer buttons, and submit button become visible
document.querySelector("#startGameBtn").addEventListener("click",function() {
    startGameBlock.style.display = "none";
    questionBlock.style.display = "block";
    answersBlock.style.display = "block";
    timeRemaining.style.display = "block";
    quizTimer();
    questionOne();
})

//TODO: Create a timer that begins to countdown as soon as the start button is clicked


function quizTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeRemaining.textContent = "You have " + secondsLeft + " seconds remaining";
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        questionBlock.style.display = "none";
        answersBlock.style.display = "none";
        timeRemaining.style.display = "none";
        gameOver.style.display = "block";
        userScore.style.display = "block";
        //TODO: get quiz score to work correctly
        userScore.textContent = "Your score was " + quizScore;
      }
  
    }, 1000);
  }


//TODO: Create the answer block where possible answers will be displayed

//TODO: Within the answer block, create 4 buttons that the user can click on



//TODO: A correct answer function

function correctAnswer() {
  answerChecker = 0;
  quizScore = quizScore + 20;
}

//TODO: An incorrect answer function

function wrongAnswer() {
  answerChecker = 1;
  secondsLeft = secondsLeft - 10;
}

function resetListen() {
  answerBtnOne.removeEventListener("click");
  answerBtnTwo.removeEventListener("click");
  answerBtnThree.removeEventListener("click");
  answerBtnFour.removeEventListener("click");
}

//TODO: Create 5 questions for the user to answer, that include 4 possible answers per question

 



// var quizQuestions = [1, 2, 3, 4, 5];
// function questionPicker () {

// }

// document.querySelector("#startGameBtn").addEventListener("click",function()
// for (let index = quizQuestions.length -1; index >0; index--) {
    
// }

//TODO: Create end game of when time reaches zero

//TODO: Create endgame of when user answers all questions

//TODO: Create the high score area where users can enter their name and their score will be logged. Score should be a multiple of their remaining time left