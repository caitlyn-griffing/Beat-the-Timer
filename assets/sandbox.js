// TODO: Get needed Elements
// all id elements i need 
const start = document.getElementById("start"); // div (start button)
const quiz = document.getElementById("quiz"); // container
const question = document.getElementById("question");
const qImg = document.getElementById("qImg"); // question number image
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter"); // countdown counter
const timeGauge = document.getElementById("timeGuage"); // time-decrementing green guage bar
const progress = document.getElementById("progress"); // progress circles (correct and wrong answers)
const scoreDiv = document.getElementById("scoreContainer") // end score

// scoreBoard  ---  not sure yet 




//* QUESTIONS AND ANSWERS COMPLETED

let questions = [
    {
        question : "Which is not a JavaScript variable?",
        imgSrc : "images/num01.png",
        choiceA : "let",
        choiceB : "var",
        choiceC : "set",
        choiceD : "const",
        correct : "C"
    },
    {
        question : "JavaScript stores dates in a date object by the number of milliseconds since January 1, 19__.",
        imgSrc : "images/num02.png",
        choiceA : "1970",
        choiceB : "1982",
        choiceC : "1990",
        choiceD : "1992",
        correct : "A"
    },
    {
        question : "The _______ method of an Array object adds and/or removes elements from an array.",
        imgSrc : "images/num03.png",
        choiceA : "Reverse",
        choiceB : "Splice",
        choiceC : "Slice",
        choiceD : "Shift",
        correct : "B"
    },
    {
        question : "What types of image maps can be used with a JavaScript operator?",
        imgSrc : "images/num04.png",
        choiceA : "Client-side image maps",
        choiceB : "Server-side image maps",
        choiceC : "Both server-side and client-side",
        choiceD : "None of the Above",
        correct : "A"
    },
    {
        question : "Which is not a JavaScript variable?",
        imgSrc : "images/num05.png",
        choiceA : "new",
        choiceB : "typeof",
        choiceC : "delete",
        choiceD : "this",
        correct : "D"
    }
];

// TODO: Create Variables for functions

let runningQuestion = 0;
// lastQuestionIndex(length is 4 - index is 3)
const lastQuestion = questions.length -1;
let TIMER;



// TODO: FUNCTIONS NEEDED


//* QUESTIONS AND ANSWERS INNER HTML COMPLETED

function renQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"<p>";
    qImg.innerHTML  = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// TODO: Create CLICK event listener to startQuiz
start.addEventListener("click", startQuiz);

// TODO: start Quiz
function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    renQuestion();
}

// TODO: TIMER - counter's Countdown
// 60 seconds for entire quiz
function countdown() {

}

// TODO: render the progress of quiz
function renProgress() {

}

// TODO: WRONG answer
// turn progress circle red
// deduct -10 seconds from overall quiz time
function wrongAnswer() {

}


// TODO: CORRECT answer
// turn progress circle to green
function correctAnswer() {

}


// TODO: render the current score of user
function renScore() {

}


// TODO: LOCAL STORAGE to save and render highscores


