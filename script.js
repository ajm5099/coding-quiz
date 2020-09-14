//===========================================================================
//Quiz framework
//===========================================================================

//global variables
var questionsRemaining = 5;
var answerChecker = 0;
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

var secondsLeft = 60;
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

var questionText = document.querySelector(".questionArea");
var answerBtnOne = document.querySelector("#answerOneBtn");
var answerBtnTwo = document.querySelector("#answerTwoBtn");
var answerBtnThree = document.querySelector("#answerThreeBtn");
var answerBtnFour = document.querySelector("#answerFourBtn");


//TODO: Create 5 questions for the user to answer, that include 4 possible answers per question

function questionOne() {
  questionText.textContent = "What do you call a variable that can store multiple values?";
  answerBtnOne.textContent = "List";
  answerBtnTwo.textContent = "Array";
  answerBtnThree.textContent = "Spreadsheet";
  answerBtnFour.textContent = "Grid";

  //function for the correct answer
  answerBtnTwo.addEventListener("click", function() {
    answerChecker = 0;
    quizscore = quizScore + 20;
    questionTwo();
  })

  //functions for incorrect answers
  answerBtnOne.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft - 10;
    questionTwo();
  })

  answerBtnThree.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft - 10;
    questionTwo();
  })

  answerBtnFour.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft - 10;
    questionTwo();
  })
} 

function questionTwo() {
  questionText.textContent = "what is 2+2?";
  answerBtnOne.textContent = "1";
  answerBtnTwo.textContent = "2";
  answerBtnThree.textContent = "3";
  answerBtnFour.textContent = "4";

  //function for the correct answer
  answerBtnFour.addEventListener("click", function() {
    answerChecker = 0;
    quizscore = quizScore + 20;
    questionThree();
  })

  //functions for incorrect answers
  //is there a way to set an event listener to be all remaining buttons instead of individually calling each button?
  answerBtnOne.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft - 10;
    questionThree();
  })

  answerBtnTwo.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft - 10;
    questionThree();
  })

  answerBtnThree.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft - 10;
    questionThree();
  })
} 

function questionThree() {
  questionText.textContent = "how many seconds are in a minute";
  answerBtnOne.textContent = "60";
  answerBtnTwo.textContent = "30";
  answerBtnThree.textContent = "45";
  answerBtnFour.textContent = "100";

  //function for the correct answer
  answerBtnOne.addEventListener("click", function() {
    answerChecker = 0;
    quizscore = quizScore + 20;
    secondsLeft = secondsLeft * 0;
  })

  //functions for incorrect answers
  //is there a way to set an event listener to be all remaining buttons instead of individually calling each button?
  answerBtnTwo.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft * 0;
    questionThree();
  })

  answerBtnThree.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft * 0;
    questionThree();
  })

  answerBtnFour.addEventListener("click", function() {
    answerChecker = 1;
    secondsLeft = secondsLeft * 0;
    questionThree();
  })
} 



// var quizQuestions = [1, 2, 3, 4, 5];
// function questionPicker () {

// }

// document.querySelector("#startGameBtn").addEventListener("click",function()
// for (let index = quizQuestions.length -1; index >0; index--) {
    
// }

//TODO: Create end game of when time reaches zero

//TODO: Create endgame of when user answers all questions

//TODO: Create the high score area where users can enter their name and their score will be logged. Score should be a multiple of their remaining time left.


