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
const scorePerCent = document.getElementById("scorePerCent");
const saveEl = document.getElementById("save");
const scoreboardEl = document.getElementById("scoreboard");
//
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
};
//
// TODO Create Countdown Timer
//* COMPLETED
function countdown() {
    quizTime--;
    counterEl.innerHTML = quizTime;
    
};
//
// TODO Show Question, Question Number Image, and Answer Choices
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
};
//
// TODO Create a Next Question Function
//* COMPLETED
function nextQuestion() {
    if ( runningQuestion < lastQuestion ) {
        runningQuestion++;
        showQuestion();
    }
};
// if more questions show next question - if no more questions, clear timer - show timer as 0 - show score div and users score %;
let endQuiz = () => {
    if( runningQuestion < lastQuestion ){
        nextQuestion();
    } else {
        clearInterval(TIMER);
        counterEl.innerHTML = 0;
        showScore();
    }
}
// let score = 0;
// TODO Check Answers
// check if correct, else wrong -- check if more questions, else clear timer
//* COMPLETED *****
function checkAnswer(answer) {
    if( answer == questions[runningQuestion].correct ){

        correctAnswer();

    } else {

        wrongAnswer();

    }
    count = 0;

    endQuiz();
}
//
// TODO Create answer is WRONG Function
//* COMPLETED *****
let wrongAnswer = () => {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    quizTime = quizTime -10;
    counterEl.innerHTML = quizTime;
    // deduct 10 seconds
    // show answers (colors)
};
//
// TODO Create answer is CORRECT Function
//* COMPLETED *****
let correctAnswer = () => {
    if( questions[runningQuestion].correct ) {
        document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
        score++;
    }
    
    // score++;
};
//
// TODO render progress
//* COMPLETED *****
let renderProgress = () => {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
};
//
// TODO: render current score form and current score percentage

// show score container

let score = 0;

// users quiz score percentage
let usersScore = () => {
    var scorePercentage = Math.round(100 * score/questions.length);
    scorePerCent.innerHTML = scorePercentage+ "%";
}

// show score div (container) and show users score (%) percentage 
let showScore = () => {
    scoreDiv.style.display = "block";
    usersScore();
}



// TODO: click save button => grab & save users score %, grab & save users initials

// TODO: 1. saveEl add event listener click, => function that saves users info

saveEl.addEventListener('click', saveUsersInfo())

// TODO: 2. how to retreieve value of users score %

// TODO: 3. how to retreive value of users initials

// TODO: 4. create function that saves both upon click and show them on #scoreboard

