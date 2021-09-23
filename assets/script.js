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
    he user will click on one of the answers 
    Detect that click and determine if the user clicked on the right answer 
        If yes, add some points 
        If no, subtract 5 or 10 seconds from the time remaining
        Go the next question

After all questions OR after time runs out, show the user their score
High score tracking

*/
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

var timeEl = document.querySelector(".countdown");

var secondsLeft = 60;

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
function endQuiz() {}
//Button.addEventListener("click", function() {
//setTime()
//})
