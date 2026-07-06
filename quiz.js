let quizQuestion = [
  {
    id: "qa-1",
    question: "What is the full form of JSON?",
    options: [
      "JavaScript Object Notation",
      "JavaSelenium Operator Notation",
      "JavaScript Operator Notation",
      "None fo these",
    ],
    correctAnswer: "JavaScript Object Notation",
  },
  {
    id: "qa-2",
    question: "What is the full form of DOM?",
    options: [
      "Document Object Model",
      "Document Operator Model",
      "Document of Model",
      "None fo these",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    id: "qa-3",
    question: "What is the full form of TDZ?",
    options: [
      "Time dead zone",
      "temparary dead zone",
      "temporal dead zone",
      "timer deal zone",
    ],
    correctAnswer: "temporal dead zone",
  },
  {
    id: "qa-4",
    question: "What is the full form of TDZ?",
    options: [
      "Time dead zone",
      "temparary dead zone",
      "temporal dead zone",
      "timer deal zone",
    ],
    correctAnswer: "temporal dead zone",
  },
  {
    id: "qa-5",
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["var", "let", "const", "Both let and const"],
    correctAnswer: "Both let and const",
  },
  {
    id: "qa-6",
    question:
      "Which method is used to convert a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correctAnswer: "JSON.stringify()",
  },
  {
    id: "qa-7",
    question:
      "Which array method is used to create a new array by applying a function to every element?",
    options: ["filter()", "map()", "forEach()", "reduce()"],
    correctAnswer: "map()",
  },
];

let questionElement = document.getElementById("question");
let optionElement = document.getElementById("option");
let scoreElement = document.getElementById("score");
let skip=document.getElementById("skip")
let currentQuestion = 0;
let score = 0;
// console.log(questionElement,optionElement,scoreElement);

function displayQuestion() {
  let { question, options, correctAnswer } = quizQuestion[currentQuestion];
  console.log(question, options, correctAnswer);

  questionElement.textContent = `Question:${currentQuestion + 1} ${question}`;

  options.map((opt) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.setAttribute("class", "optionButtons");
    optionElement.append(btn);
    btn.addEventListener("click", () => {
      if (opt == correctAnswer) {
        btn.style.backgroundColor = "green";
        score += 1;
      } else {
        btn.style.backgroundColor = "red";
        score -= 0.25;
      }
      scoreElement.textContent = `score:${score}/${quizQuestion.length}`;
      let allButtons = document.querySelectorAll(".optionButtons");
      allButtons.forEach((v) => (v.disabled = true));
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    });
  });
}
displayQuestion();

function nextQuestion() {
  currentQuestion++;
  optionElement.textContent = "";
  if (currentQuestion == quizQuestion.length) {
    questionElement.textContent = "Quiz Completed Successfully!!!!!";
  
    skip.style.display="none"
  } else {
    displayQuestion();
  }
}
