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
    })
  
    answerBtnThree.addEventListener("click", function() {
      answerChecker = 1;
      secondsLeft = secondsLeft * 0;
    })
  
    answerBtnFour.addEventListener("click", function() {
      answerChecker = 1;
      secondsLeft = secondsLeft * 0;
    })
  } 

//================================================================================
//This did not work because I had an event listener multiple times that would screw things up



  function questionOne() {
    questionText.textContent = "What is the technique called that involves pushing on the handlebar that is opposite to the direction of your turn";
    answerBtnOne.textContent = "Lean steer";
    answerBtnTwo.textContent = "Counter steer";
    answerBtnThree.textContent = "reverse steer";
    answerBtnFour.textContent = "opposite steer";
  
    //function for the correct answer
    answerBtnTwo.addEventListener("click", function() {
      correctAnswer();
      questionTwo();
      console.log(quizScore);
    })
  
    //functions for incorrect answers
    answerBtnOne.addEventListener("click", function() {
      wrongAnswer();
      questionTwo();
    })
  
    answerBtnThree.addEventListener("click", function() {
      wrongAnswer();
      questionTwo();
    })
  
    answerBtnFour.addEventListener("click", function() {
      wrongAnswer();
      questionTwo();
    })
  } 
  
  function questionTwo() {
    questionText.textContent = "What helps you absorb a shock when riding over an obsticle in the road?";
    answerBtnOne.textContent = "pulling in the clutch";
    answerBtnTwo.textContent = "braking before the obsticle";
    answerBtnThree.textContent = "increasing throttle";
    answerBtnFour.textContent = "rising off of the seat";
  
    //correct answer
    answerBtnFour.addEventListener("click", function() {
      correctAnswer();
      questionThree();
      console.log(quizScore);
    })
  
    //incorrect answers
    answerBtnOne.addEventListener("click", function() {
      wrongAnswer();
      questionThree();
    })
  
    answerBtnTwo.addEventListener("click", function() {
      wrongAnswer();
      questionThree();
    })
  
    answerBtnThree.addEventListener("click", function() {
      wrongAnswer();
      questionThree();
    })
  } 
  
  function questionThree() {
    questionText.textContent = "When riding down the street, how much room in a lane do you need to ride safely?";
    answerBtnOne.textContent = "A full lane";
    answerBtnTwo.textContent = "Half of a lane";
    answerBtnThree.textContent = "One third of a lane";
    answerBtnFour.textContent = "One quarter of a lane";
  
    //correct answer
    answerBtnOne.addEventListener("click", function() {
      correctAnswer();
      questionFour();
      console.log(quizScore);
    })
  
    //incorrect answers
    answerBtnTwo.addEventListener("click", function() {
      wrongAnswer();
      questionFour();
    })
  
    answerBtnThree.addEventListener("click", function() {
      wrongAnswer();
      questionFour();
    })
  
    answerBtnFour.addEventListener("click", function() {
      wrongAnswer();
      questionFour();
    })
  } 
  
  function questionFour() {
    questionText.textContent = "When passing a line of parked cars on your motorcycle, what are potential hazards to be aware of?";
    answerBtnOne.textContent = "A car may pull out unexpectadly";
    answerBtnTwo.textContent = "A car door may open into your path";
    answerBtnThree.textContent = "A person may step out between cars";
    answerBtnFour.textContent = "All of these are potential hazards";
  
    //correct answer
     answerBtnFour.addEventListener("click", function() {
      correctAnswer();
      questionFive();
      console.log(quizScore);
    })
  
    //incorrect answers
    answerBtnTwo.addEventListener("click", function() {
      wrongAnswer();
      questionFive();
    })
  
    answerBtnOne.addEventListener("click", function() {
      wrongAnswer();
      questionFive();
    })
  
    answerBtnThree.addEventListener("click", function() {
      wrongAnswer();
      questionFive();
    })
  } 
  
  function questionFive() {
    questionText.textContent = "When riding in a group, new riders should be positioned where in the group?";
    answerBtnOne.textContent = "At the back of the group";
    answerBtnTwo.textContent = "Behind the leader";
    answerBtnThree.textContent = "Directly in front of the last rider";
    answerBtnFour.textContent = "At the front of the group";
  
    //correct answer
     answerBtnTwo.addEventListener("click", function() {
      correctAnswer();
      console.log(quizScore);
      secondsLeft = secondsLeft * 0;
    })
  
    //incorrect answers
    answerBtnFour.addEventListener("click", function() {
      wrongAnswer();
      secondsLeft = secondsLeft * 0;
    })
  
    answerBtnOne.addEventListener("click", function() {
      wrongAnswer();
      secondsLeft = secondsLeft * 0;
    })
  
    answerBtnThree.addEventListener("click", function() {
      wrongAnswer();
      secondsLeft = secondsLeft * 0;
    })
  }