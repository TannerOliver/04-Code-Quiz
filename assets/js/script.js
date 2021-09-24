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

// This is a variable for the questions in the quiz

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

//setting up the timer for quiz

var timeEl = document.querySelector(".countdown");

var secondsLeft = 60000;

function setTime() {
  var timerInterval = setInterval(function () {
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
  //how do I get current question out of the array
  var currentQuestion = document.getElementById("question1");
  currentQuestion.innerHTML = questions[i].questionText;

  var currentAnswers = document.getElementById("question2");
  currentAnswers.innerHTML = questions[i].choices[0];

  var currentAnswers = document.getElementById("question3");
  currentAnswers.innerHTML = questions[i].choices[1];

  var currentAnswers = document.getElementById("question4");
  currentAnswers.innerHTML = questions[i].choices[2];

  var currentAnswers = document.getElementById("question5");
  currentAnswers.innerHTML = questions[i].choices[3];
  // incrementing index
  i++;
  //run an onlick here to run checkanswer()


  //is there an easier way to add event listeners to multiple multiple objects?
  document.getElementById("question2").addEventListener("click", checkAnswer);
  document.getElementById("question3").addEventListener("click", checkAnswer);
  document.getElementById("question4").addEventListener("click", checkAnswer);
  document.getElementById("question5").addEventListener("click", checkAnswer);
}

function checkAnswer() {
  //write if statement to check if answer is right

  if (currentAnswers === questions.answer[i]) {
    console.log("that's right");
  }

  //else deduct seconds
  else {
    console.log("that's wrong");
    secondsLeft - 5000;
  }

  // if questions is === questions.length run endQuiz()
  if (questions === questions.lenth) {
    endQuiz();
  }
  //else run askCurrentQuestion
  else{
    askCurrentQuestion();
  };
}
// add function to start quiz

function startQuiz() {
  //targeting "ready" and apply "hidden" styling
  var ready = document.getElementById("ready");
  ready.classList.add("hidden");

  //targeting "question-box" and removing "hidden" styling
  var questionBox = document.getElementById("question-box");
  questionBox.classList.remove("hidden");

  //run function to ask questions
  askCurrentQuestion();
}

//function for ending the quiz and display highscore page

function endQuiz() {
  //apply hidden style to quiz questions

  //display screen to enter name/initials for high-score

  //once entered display screen of highscores
}

document.getElementById("start-button").addEventListener("click", startQuiz);
