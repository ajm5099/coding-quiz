//TODO: Create a homepage that will ask the user to start the quiz by clicking a button

//TODO: Create a timer that begins to countdown as soon as the start button is clicked

// var secondsleft = 60;
// function quizTimer() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       prepare.textContent = "You have " secondsLeft + " seconds remaining";
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         prepare.textContent ="Time is up!"
//       }
  
//     }, 1000);
//   }
// quizTimer();


//TODO: Create the question text block where new questions show up

var startGameBlock = document.querySelector(".startGame") //selects start game block
var questionBlock = document.querySelector(".questions"); //selects questions block
var answersBlock = document.querySelector(".answers");
document.querySelector("#startGameBtn").addEventListener("click",function() {
    startGameBlock.style.display = "none";
    questionBlock.style.display = "block";
    answersBlock.style.display = "block";
})

//TODO: Create the answer block where possible answers will be displayed

//TODO: Within the answer block, create 4 buttons that the user can click on

//TODO: Create 5 questions for the user to answer, that include 4 possible answers per question

//TODO: Create end game of when time reaches zero

//TODO: Create endgame of when user answers all questions

//TODO: Create the high score area where users can enter their name and their score will be logged. Score should be a multiple of their remaining time left.