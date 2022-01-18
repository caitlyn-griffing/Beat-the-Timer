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
        imgSrc : "assets/images/num02.png",
        choiceA : "1970",
        choiceB : "1982",
        choiceC : "1990",
        choiceD : "1992",
        correct : "A"
    },
    {
        question : "The _______ method of an Array object adds and/or removes elements from an array.",
        imgSrc : "assets/images/num03.png",
        choiceA : "Reverse",
        choiceB : "Splice",
        choiceC : "Slice",
        choiceD : "Shift",
        correct : "B"
    },
    {
        question : "What types of image maps can be used with a JavaScript operator?",
        imgSrc : "assets/images/num04.png",
        choiceA : "Client-side image maps",
        choiceB : "Server-side image maps",
        choiceC : "Both server-side and client-side",
        choiceD : "None of the Above",
        correct : "A"
    },
    {
        question : "Which is not a JavaScript variable?",
        imgSrc : "assets/images/num05.png",
        choiceA : "new",
        choiceB : "typeof",
        choiceC : "delete",
        choiceD : "this",
        correct : "D"
    }
];

let quizTime = 60;
let TIMER;

startEl.addEventListener("click", startQuiz);

function startQuiz() {
    startEl.style.display = "none";
    quizEl.style.display = "block";
    countdown();
    TIMER = setInterval(countdown, 1000);
    showQuestion();
    renderProgress();



    // render question
    // start timer

}

// TODO: Create Countdown Timer
//* COMPLETED

// html id: counter


function countdown() {
    quizTime--;
    counterEl.innerHTML = quizTime;
    
} 


// TODO: Show Question, Question Number Image, and Answer Choices
//* COMPLETED

let runningQuestion = 0;
const lastQuestion = questions.length -1;

function showQuestion() {
    let q = questions[runningQuestion];

    questionEl.innerHTML = "<p>"+ q.question +"</p>";
    qImgEl.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
//*************

// TODO: Create a Next Question Function
//* COMPLETED

function nextQuestion() {
    if ( runningQuestion < lastQuestion ) {
        runningQuestion++;
        showQuestion();
    }
}

// choiceD.addEventListener('click', nextQuestion);
//**************




// let score = 0;

function checkAnswer(answer) {
    if( answer == questions[runningQuestion].correct ){

        correctAnswer();

    } else {

        wrongAnswer();

    }
    count = 0;
    if( runningQuestion < lastQuestion ){
        nextQuestion();
    } else {
        clearInterval(TIMER);
        counterEl.innerHTML = 0;
        // startEl.style.display = "block";
        // quizEl.style.display = "none";

        // clearInterval(TIMER);
        // render score
    }
}


// TODO: Create answer is WRONG Function

function wrongAnswer() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    quizTime = quizTime -10;
    counterEl.innerHTML = quizTime;
    // deduct 10 seconds
    // show answers (colors)
}

// TODO: Create answer is CORRECT Funciton

function correctAnswer() {
    if( questions[runningQuestion].correct ) {
        document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    }
    
    // score++;
    // show answers (colors choice backgrounds green and red)
    // move on to the next question
}

// TODO: render progress
//* COMPLETED
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
//*****************