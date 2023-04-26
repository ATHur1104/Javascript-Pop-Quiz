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
    option: ["Object", "Functions", "Reference", "Collections", "Arrays", "Dates"]
  },
  {
    question: "Which one of these is a reference data type?",
    answer: ["Object", "Functions", "Collections", "Arrays", "Dates"],
    option: ["String", "Number", "Boolean", "Undefinded", "Symbol", "Null"]
  },
  {
    question: "What is the correct syntax for declaring a variable in JavaScript?",
    answer: ["var x;", "let x;", "const x;"],
    option: ["var x = 5;", "let x = 5;", "x = 5;"]
  },
  {
    question: "What is the correct syntax for a for loop in JavaScript?",
    answer: ["for (var i = 0; i < 10; i++) {}", "for (let i = 0; i < 10; i++) {}", "for (const i = 0; i < 10; i++) {}"],
    option: ["for (i = 0; i < 10; i++) {}", "for (i < 10; i++) {}", "for (i = 0; i < 10) {}"]
  },
  {
    question: "What is the correct syntax for a function declaration in JavaScript?",
    answer: ["function myFunction() {}", "var myFunction = function() {}", "const myFunction = () => {}"],
    option: ["function = myFunction() {}", "myFunction() = function() {}", "const myFunction => () {}"]
  },
  {
    question: "What is the correct syntax for an if statement in JavaScript?",
    answer: ["if (x === 5) {}", "if x === 5 {}", "if x = 5 then {}"],
    option: ["if (x = 5) {}", "if (x == 5) {}", "if (x < 5) {}"]
  },
  {
    question: "What is the correct syntax for a switch statement in JavaScript?",
    answer: ["switch (x) {case 1: break; case 2: break; default: break;}", "switch (x): case 1: break; case 2: break; default: break;", "switch (x) => {case 1: break; case 2: break; default: break;}"],
    option: ["switch (x): {case 1: break; case 2: break; default: break;}", "switch (x) {1: break; 2: break; default: break;}", "switch => (x) {case 1: break; case 2: break; default: break;}"]
  },
  {
    question: "What is hoisting in JavaScript?",
    answer: ["Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution."],
    option: ["Hoisting is a JavaScript mechanism where variables and function declarations are moved to the bottom of their scope before code execution.", "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the middle of their scope before code execution.", "Hoisting is a JavaScript mechanism where variables and function declarations are not moved to the top of their scope before code execution.", "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope after code execution."]
  },
  {
    question: "What is a closure in JavaScript?",
    answer: ["A closure is a function that has access to its outer function's scope, even after the outer function has returned."],
    option: ["A closure is a function that has access to its inner function's scope, even after the inner function has returned.", "A closure is a function that has no access to its outer function's scope.", "A closure is a function that has access to its outer function's scope only while the outer function is executing.", "A closure is a function that has access to all global variables in a program."]
  },
  {
    question: "What is the difference between 'let' and 'var' in JavaScript?",
    answer: ["The 'let' keyword declares a block-scoped variable that can be reassigned, while the 'var' keyword declares a function-scoped variable that can be reassigned."],
    option: ["The 'let' keyword declares a function-scoped variable that can be reassigned, while the 'var' keyword declares a block-scoped variable that can be reassigned.", "The 'let' keyword declares a block-scoped variable that cannot be reassigned, while the 'var' keyword declares a function-scoped variable that cannot be reassigned.", "The 'let' keyword declares a function-scoped variable that cannot be reassigned, while the 'var' keyword declares a block-scoped variable that cannot be reassigned.", "There is no difference between 'let' and 'var' in JavaScript."]
  }
];

var currentQuestion = [Math.floor(Math.random() * quiz.length)];

function showQuestion() {
  var questionEl = document.getElementById("question");
  questionEl.textContent = quiz[currentQuestion].question;

  var answers = [quiz[currentQuestion].answer[Math.floor(Math.random() * quiz[currentQuestion].answer.length)]];
  var options = [];
  while (options.length < 3) {
    var randOption = quiz[currentQuestion].option[Math.floor(Math.random() * quiz[currentQuestion].option.length)];
    if (options.indexOf(randOption) === -1 && answers.indexOf(randOption) === -1) {
      options.push(randOption);
    }
  }

  var quizArray = answers.concat(options);
  quizArray.sort(function () {
    return 0.5 - Math.random();
  });

  var answerEl = document.querySelectorAll("#answer button");
  for (var i = 0; i < answerEl.length; i++) {
    answerEl[i].textContent = quizArray[i];
    answerEl[i].addEventListener("click", handleAnswerClick);
  }
}



function handleAnswerClick() {

}
showQuestion();

// var wrong: //answers from other questions using randomizer



// random question selected w/ correct answer and 3 random answers from another question
// 