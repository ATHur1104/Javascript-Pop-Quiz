// WHEN I click the start button
// addEventListener
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// when i press play i get a question and 4 answers to choose from

// when i select an answer button it will tell me if it was correct or incorrect

// I want to keep a running tally of correct and incorrect answers

// var quiz = //putting the quiz together so that the answer is correct from the question asked
var quiz = [
{
    question: "Which one of these is a primitive data type?",
    answer: ["String", "Number", "Boolean", "Undefinded", "Symbol", "Null"],
    option: ["Object","Functions","Reference","Collections","Arrays","Dates"]
},
{
    question: "Which one of these is a reference data type?",
    answer: ["Object","Functions","Collections","Arrays","Dates"],
    option: ["String", "Number", "Boolean", "Undefinded", "Symbol", "Null"]
},
{
    question: "",
    answer: [""],
    option: [""],
}
]

var currentQuestion = 0;

function showQuestion() {
    var questionEl = document.getElementById("question");
    questionEl.textContent = quiz[currentQuestion].question;
  
    var answers = quiz[currentQuestion].answer.slice().sort(function() { return 0.5 - Math.random(); });
    var options = answers.slice(0, 1).concat(quiz[currentQuestion].option);
    options = options.slice().sort(function() {return 0.5 - Math.random();});
  
    var answerEl = document.querySelectorAll("#answer button");
    for (var i = 0; i < answerEl.length; i++) { 
      answerEl[i].textContent = options[i];
      answerEl[i].addEventListener("click", handleAnswerClick);
    }
  }

function handleAnswerClick() {

}
  showQuestion();

// var wrong: //answers from other questions using randomizer 



// random question selected w/ correct answer and 3 random answers from another question
// 