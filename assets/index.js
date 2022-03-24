// DOM Elements

const restartBtn = document.getElementById("restart");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const finalScore = document.getElementById("final-score");
const questionSection = document.getElementById("question-section");


let currentQuestion = 0;
var score = 0;


// Questions array
let questions = [
    { 
        question: 'Which HTML element do we put in for JavaScript?',
        answers: [
        {option: '1. javascript', answer: false},
        {option: '2. script', answer: true},
    ]
    
    },

    { question: 'How do you create a function in JavaScript?',
     answers: [
         {option: '1. Function = My Function()', answer: false},
         {option: '2. function = myFunction()', answer: true},
     ]


     },

     { question: 'Which of these are considered Javascript data types?', 

     answers: [
      { option: '1. String, Number, Boolean', answer: true},
      {option: '2. Buttons, ABC, Bolognese', answer: false},
     ]


     },

     {question: 'How do you declare a JavaScript variable?', 
      answers: [
     {option: '1. var colorName', answer: true},
      {option: '2. variableColorName', answer: false},
    ]


     },

     {question: 'What is the correct way to write a javascript array?', 
      answers: [
     {option: '1. var animals =["dog", "cat", "bird"]', answer: true},
      {option: '2. var animals = "dog", "cat", "bird"', answer: false},
    ]


     },

     {question: 'Bonus Question: In javascript 1 = ___',
      answers: [
     {option: '1. 1', answer: false},
      {option: '2. 0', answer: true},
    ]
     }

    ];

    restartBtn.addEventListener("click", restart);
        nextBtn.addEventListener("click", next);
        submitBtn.addEventListener("click", submit);

        function beginQuiz() {
            currentQuestion = 0;
        finalScore.innerHTML = questions.length;
        questionSection.innerHTML = questions[currentQuestion].question;
        trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
        trueBtn.onclick = () => {
            if(questions[currentQuestion.answers[0].answer]) {
                if(score < 6) {
                    score++;
                }
            }

            userScore.innerHTML = score;
            if(currentQuestion < 5) {
                next();
            }
        }

        falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
        falseBtn.onclick = () => {
            if(questions[currentQuestion].answers[1].answer) {
                if(score < 6) {
                    score++;
                }
            }
            userScore.innerHTML = score;
            if(currentQuestion < 5) {
                next();
            }
        }



    }


    beginQuiz();

    