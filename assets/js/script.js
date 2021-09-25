/*psuedo coding

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

I have a bunch of quiz questions to ask. What is the best way to store all those questions, PLUS the correct answer for each one?
For each question in the quiz:
    -The question itself
    -The possible answers 
    -Which answer is correct 

Have a process where:
    When the game starts, a countdown begins
    A question is selected from the collection
    All the elements are added to the DOM 
    the user will click on one of the answers 
    Detect that click and determine if the user clicked on the right answer 
        If yes, add some points 
        If no, subtract 5 or 10 seconds from the time remaining
        Go to the next question
        repeat this till all questions are answered

After all questions OR after time runs out, show the user their score
High score tracking
*/

//seletors
var startButton =document.getElementById("start-button");

var highScoreText = document.getElementById("high-score-text");
// variables
var questions = [
  {
    questionText: "5 + 5 =",
    choices: ["1) 5", "2) 10", "3) 15", "4) 11"],
    answer: "2) 10",
  },

  {
    questionText: "5 - 5 =",
    choices: ["1) 0", "2) 5", "3) 1", "4) 7"],
    answer: "1) 0",
  },

  {
    questionText: "5 x 5 =",
    choices: ["1) 10", "2) 15", "3) 50", "4) 25"],
    answer: "4) 25",
  },

  {
    questionText: "5 / 5 =",
    choices: ["1) 10", "2) 27", "3) 1", "4) 35"],
    answer: "3) 1",
  },
];

var i = 0;

var timerInterval;

var questionBox = document.getElementById("question-box");

var timeEl = document.querySelector(".countdown");

var secondsLeft = 30;

//functions
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //insert function for ending of quiz here
    }
  }, 1000);
}

// create function to ask the questions for the start quiz function
function askCurrentQuestion() {
  var currentQuestion = document.getElementById("question1");
  currentQuestion.innerHTML = questions[i].questionText;

  var currentAnswers1 = document.getElementById("question2");
  currentAnswers1.innerHTML = questions[i].choices[0];

  var currentAnswers2 = document.getElementById("question3");
  currentAnswers2.innerHTML = questions[i].choices[1];

  var currentAnswers3 = document.getElementById("question4");
  currentAnswers3.innerHTML = questions[i].choices[2];

  var currentAnswers4 = document.getElementById("question5");
  currentAnswers4.innerHTML = questions[i].choices[3];
}

function addEventListeners() {
  document.getElementById("question2").addEventListener("click", function () {
    checkAnswer(0);
  });
  document.getElementById("question3").addEventListener("click", function () {
    checkAnswer(1);
  });
  document.getElementById("question4").addEventListener("click", function () {
    checkAnswer(2);
  });
  document.getElementById("question5").addEventListener("click", function () {
    checkAnswer(3);
  });
}

function checkAnswer(selectedAnswer) {
  //write if statement to check if answer is right
  if (questions[i].choices[selectedAnswer] === questions[i].answer) {
    console.log("that's right");
  }
  //else deduct seconds
  else {
    console.log("that's wrong");
    secondsLeft - 5;
  }
  // if questions is === questions.length run endQuiz()
  if (i === questions.length - 1) {
    endQuiz();
  }
  //else run askCurrentQuestion
  else {
    i++;
    askCurrentQuestion();
  }
}

// add function to start quiz
function startQuiz() {
  //targeting "ready" and apply "hidden" styling
  var ready = document.getElementById("ready");
  ready.classList.add("hidden");
  //targeting "question-box" and removing "hidden" styling
  questionBox.classList.remove("hidden");
  //run function to ask questions
  askCurrentQuestion();
  // function for listening if an answer was clicked
  addEventListeners();
  // run setTimer()
  setTime();
}

//function for ending the quiz and display highscore page
function endQuiz() {
  //apply hidden style to quiz questions
  questionBox.classList.add("hidden");
  clearInterval(timerInterval);
  //display screen to enter name/initialsfor high-score
  var name = window.prompt("please enter name here");
  //adding hidden to button
  startButton.classList.add("hidden");
  //retrieve exsisting values from local storage
  var highScoreName = document.getElementById("high-score-name");
  var highScore = document.getElementById("high-score");
  //removing hidden class to these objects
  highScoreName.classList.remove("hidden");
  highScore.classList.remove("hidden");
  highScoreText.classList.remove("hidden");
  //add current value to local storage value

  // save combined data to local storage
  localStorage.setItem("name", name);
  localStorage.setItem("score", secondsLeft);
  // display screen of highscores
  highScore.innerHTML = localStorage.getItem("score");
  highScoreName.innerHTML = localStorage.getItem("name");
};
startButton.addEventListener("click", startQuiz);