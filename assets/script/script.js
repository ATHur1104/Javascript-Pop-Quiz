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

var currentQuestion = 0;
document.getElementById("question").style.display = "none";
document.getElementById("answer").style.display = "none";

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


let prevQuestion = [];
function questionCheck() {
  const usedQuestion = quiz[currentQuestion].question.join(' ');
  if (prevQuestion.includes(usedQuestion)) {
    return false;
  } else {
    prevQuestion.push(usedQuestion);
    return true;
  }
}

function handleAnswerClick(event) {
  var selectedOption = event.target.textContent;
  var correctAns = quiz[currentQuestion].answer;
  if (correctAns.includes(selectedOption)) {
    document.getElementById("check").textContent="Correct!";
    // add score +5 and update score
    } else {
    document.getElementById("check").textContent="Wrong!";
    // add score -1 and update score
    }
    ;
    
    if (currentQuestion < quiz.length -1){
        currentQuestion++;
        showQuestion();
      } else {
        document.getElementById("question").textContent = "Finished!";
        document.getElementById("answer").style.display = "none";
      }
    }
var startBtn = document.getElementById("start-btn")
var highScoreBtn = document.getElementById("high-score-btn")
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  highScoreBtn.style.display = "none";
  document.getElementById("question").style.display = "flex";
  document.getElementById("answer").style.display = "flex";
  showQuestion();
}

