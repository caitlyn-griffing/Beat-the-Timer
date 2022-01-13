// TODO: Get needed Elements
// all id elements i need 
start // div (start button)
quiz // container
question 
qImg // question number image
A
B
C
D
counter // countdown counter
btimeGauge // full grey guage bar
timeGauge // time-decrementing green guage bar
progress // progress circles (correct and wrong answers)
userScoreContainer // end score

// scoreBoard  ---  not sure yet 

// TODO: Create Questions and Answer Choices
// 5 quesiton with 4 answers (A,B,C,D)

let questions = [
    {
        question : "question 1",
        imgSrc : "img1",
        choiceA : "answer 1",
        choiceB : "answer 2",
        choiceC : "answer 3",
        choiceD : "answer 4",
        correct : "C"
    },
    {
        question : "question 2",
        imgSrc : "img2",
        choiceA : "answer 1",
        choiceB : "answer 2",
        choiceC : "answer 3",
        choiceD : "answer 4",
        correct : "A"
    },
    {
        question : "question 3",
        imgSrc : "img3",
        choiceA : "answer 1",
        choiceB : "answer 2",
        choiceC : "answer 3",
        choiceD : "answer 4",
        correct : "B"
    },
    {
        question : "question 4",
        imgSrc : "img4",
        choiceA : "answer 1",
        choiceB : "answer 2",
        choiceC : "answer 3",
        choiceD : "answer 4",
        correct : "A"
    },
    {
        question : "question 5",
        imgSrc : "img5",
        choiceA : "answer 1",
        choiceB : "answer 2",
        choiceC : "answer 3",
        choiceD : "answer 4",
        correct : "D"
    }
];

// TODO: FUNCTIONS NEEDED


// TODO: render Quiz Questions and Answers
// create inner.HTML
function renQuestion() {

}

// TODO: Create CLICK event listener to startQuiz
// start.addEventListener("click", startQuiz);

// TODO: start Quiz
function startQuiz() {

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


