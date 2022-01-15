// TODO: Get needed Elements
// all id elements i need 
const startEl = document.getElementById("start");
const quizEl = document.getElementById("quiz"); 
const questionEl = document.getElementById("question");
const qImgEl = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counterEl = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// scoreBoard  ---  not sure yet 




//* QUESTIONS AND ANSWERS COMPLETED

let questions = [
    {
        question : "Which is not a JavaScript variable?",
        imgSrc : "assets/images/num01.png",
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
         choiceA : "new",
        choiceB : "typeof",
        choiceC : "delete",
        choiceD : "this",
        correct : "D"
    }
];


startEl.addEventListener("click", startQuiz);

function startQuiz() {
    startEl.style.display = "none";
    quizEl.style.display = "block";
    countdown();
    showQuestion();



    // render question
    // start timer

}

// TODO: Create Countdown Timer

// html id: counter
let quizTime = 60;

function countdown() {
    setInterval(function () {
        quizTime--;
        counterEl.innerHTML = quizTime;
    }, 1000);
};

let runningQuestion = 0;

function showQuestion() {
    let q = questions[runningQuestion];

    questionEl.innerHTML = "<p>"+ q.question +"</p>";
    qImgEl.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// 60 Second Countdown for Entire Quiz
// If answer is wrong() deduct 10 seconds
// if answer is correct() ++ to next question

// TODO: Create next question function
// for loop through all questions

// TODO: Create answer is WRONG Function

function wrongAnswer() {
    // deduct 10 seconds
    // show answers (colors)
}

// TODO: Create answer is CORRECT Funciton

function correctAnswer() {
    // show answers (colors choice backgrounds green and red)
    // move on to the next question
}
