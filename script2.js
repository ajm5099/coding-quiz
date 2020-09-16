//===========================================================================
//Quiz framework
//===========================================================================

//global variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz() {
  const output =[];
  myQuestions.forEach( (currentQuestion, questionNumber) => {

  })
  const answers = [];

  for(letter in currentQuestion.answers){
    answers.push(
      <label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
        </input>
      </label>
    )
  }
}

function showResults() {

}

buildQuiz();

submitButton.addEventListener('click', showResults);

const myQuestions = [
  {
    question:"What is the technique called that involves pushing on the handlebar that is opposite to the direction of your turn",
    answers: {a: "Lean steer", b: "Counter steer", c: "Reverse steer", d: "opposite steer"}, 
    correctAnswer; "b"
  },

  {
    question:"What helps you absorb a shock when riding over an obsticle in the road?",
    answers: {a: "pulling in the clutch", b: "braking before the obsticle", c: "increasing throttle", d: "rising off of the seat"}, 
    correctAnswer; "d"
  },

  {
    question:"When riding down the street, how much room in a lane do you need to ride safely?",
    answers: {a: "A full lane", b: "Half of a lane", c: "One third of a lane", d: "One quarter of a lane"}, 
    correctAnswer; "a"
  },

  {
    question:"When passing a line of parked cars on your motorcycle, what are potential hazards to be aware of?",
    answers: {a: "A car may pull out unexpectadly", b: "A car door may open into your path", c: "A person may step out between cars", d: "All of these are potential hazards"}, 
    correctAnswer; "d"
  },

  {
    question:"When riding in a group, new riders should be positioned where in the group?",
    answers: {a: "At the back of the group", b: "Behind the leader", c: "Directly in front of the last rider", d: "At the front of the group"}, 
    correctAnswer; "b"
  }
];

//On clicking start game, time remaining, question block, answer buttons, and submit button become visible


//TODO: Create a timer that begins to countdown as soon as the start button is clicked



//TODO: Create the answer block where possible answers will be displayed

//TODO: Within the answer block, create 4 buttons that the user can click on



//TODO: Create 5 questions for the user to answer, that include 4 possible answers per question




// var quizQuestions = [1, 2, 3, 4, 5];
// function questionPicker () {

// }

// document.querySelector("#startGameBtn").addEventListener("click",function()
// for (let index = quizQuestions.length -1; index >0; index--) {
    
// }

//TODO: Create end game of when time reaches zero

//TODO: Create endgame of when user answers all questions

//TODO: Create the high score area where users can enter their name and their score will be logged. Score should be a multiple of their remaining time left.


