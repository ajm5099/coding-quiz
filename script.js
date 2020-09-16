//===========================================================================
//Quiz framework
//===========================================================================

//global variables
var questionsRemaining = 5;
var answerChecker = "";
var correctAnswer= "";
var quizScore = 0;
var secondsLeft = 60;
var questionText = document.querySelector(".questionArea");
var answerBtnOne = document.querySelector("#answerOneBtn");
var answerBtnTwo = document.querySelector("#answerTwoBtn");
var answerBtnThree = document.querySelector("#answerThreeBtn");
var answerBtnFour = document.querySelector("#answerFourBtn");


//This part handles hiding and showing all parts of the quiz
var startGameBlock = document.querySelector(".startGame") // start game block
var questionBlock = document.querySelector(".questions"); // questions block
var answersBlock = document.querySelector(".answers"); //answers block
var submitBtn = document.querySelector(".submitArea"); //submit button
var timeRemaining = document.querySelector(".timeRemaining"); //time remaining
var gameOver = document.querySelector(".endGame"); //game over page
var userScore = document.querySelector(".score"); //user score


//================================================================================
// Starting the quiz
//================================================================================

//On clicking start game, time remaining, question block, answer buttons, and submit button become visible
document.querySelector("#startGameBtn").addEventListener("click",function() {
    startGameBlock.style.display = "none";
    questionBlock.style.display = "block";
    answersBlock.style.display = "block";
    timeRemaining.style.display = "block";
    quizTimer();
    questionSelector();
})

//a timer that begins to countdown as soon as the start button is clicked

function quizTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeRemaining.textContent = "You have " + secondsLeft + " seconds remaining";
  
      function endTheGame() {
        clearInterval(timerInterval);
        questionBlock.style.display = "none";
        answersBlock.style.display = "none";
        timeRemaining.style.display = "none";
        gameOver.style.display = "block";
        userScore.style.display = "block";
        userScore.textContent = "Your score was " + quizScore;
        highScore();
      }
      if(secondsLeft <= 0) {
        endTheGame()
      }
    }, 1000);
  }

//================================================================================
// Feeding questions to the quiz
//================================================================================

//TODO: Create a loop that will select the next question

var questionNum = 0;
function questionSelector() {
    questionText.textContent = myQuestions[questionNum].question;
    answerBtnOne.textContent = myQuestions[questionNum].answer1;
    answerBtnTwo.textContent = myQuestions[questionNum].answer2;
    answerBtnThree.textContent = myQuestions[questionNum].answer3;
    answerBtnFour.textContent = myQuestions[questionNum].answer4;
}

//================================================================================
// Listeners for what button is pushed
//================================================================================

//these listeners assigning the value of the button text to a new variable that we can check against the correct answer

var buttonOneText
var buttonTwoText
var buttonThreeText
var buttonFourText

answersBlock.addEventListener("click", function(event) {
  if(event.target.matches("button")){
    var userAnswer = (event.target.innerHTML)
    var correctAnswer = myQuestions[questionNum].correctAnswer;
    questionNum++;
    console.log(userAnswer);
    //checking for the correct answer, and awarding points for correct answer, or deducting time for an incorrect answer
    if(userAnswer === correctAnswer) {
      quizScore = quizScore + 20;
    } else {
      secondsLeft = secondsLeft - 10;
    }
    if(questionNum == 6) {
      endTheGame();
    }
    console.log(quizScore);
    questionSelector();
  };
})


//================================================================================
// Saving the score at the end of the game
//================================================================================

//storing the users score
function highScore() {
  localStorage.setItem(quizScore);
}


//================================================================================
// Questions are stored Here
//================================================================================

const myQuestions = [
  {
    //Question One
    question:"What is the technique called that involves pushing on the handlebar that is opposite to the direction of your turn",
    answer1: "Lean steer",
    answer2: "Counter steer",
    answer3: "Reverse steer",
    answer4: "opposite steer",
    correctAnswer: "Counter steer"
  },

  {
    //Question two
    question:"What helps you absorb a shock when riding over an obsticle in the road?",
      answer1: "pulling in the clutch", 
      answer2: "braking before the obsticle", 
      answer3: "increasing throttle", 
      answer4: "rising off of the seat", 
    correctAnswer: "rising off of the seat"
  },

  {
    //Question three
    question:"When riding down the street, how much room in a lane do you need to ride safely?",
      answer1: "A full lane", 
      answer2: "Half of a lane", 
      answer3: "One third of a lane", 
      answer4: "One quarter of a lane", 
    correctAnswer: "A full lane"
  },

  {
    //Question four
    question:"When passing a line of parked cars on your motorcycle, what are potential hazards to be aware of?",
      answer1: "A car may pull out unexpectadly", 
      answer2: "A car door may open into your path", 
      answer3: "A person may step out between cars", 
      answer4: "All of these are potential hazards", 
    correctAnswer: "All of these are potential hazards"
  },

  {
    //Question five
    question:"When riding in a group, new riders should be positioned where in the group?",
      answer1: "At the back of the group", 
      answer2: "Behind the leader", 
      answer3: "Directly in front of the last rider", 
      answer4: "At the front of the group", 
    correctAnswer: "Behind the leader"
  }
];