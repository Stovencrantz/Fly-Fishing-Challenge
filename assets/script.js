var userScore = 0;

// timer count down
var startingTimer = 1;
var time = startingTimer * 60;
var timerEl = document.getElementById("timer");
var timer = setInterval(countDown, 1000);
function countDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (time <= 0) {
        clearInterval(timer)
    }
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
};

var questionArr = [
    {
       question: "What weight fly-line should you use for a 7-wt fly rod?", 
       wrongAnswers: ["3lb", "8stone", "14gram", "7wt"],
       correctAnswer: "7wt"
    },
    {
       question: "What is the name of the knot that is used to tie an anglers leader to their fly line and typical calls for a piece of hardware to tie?", 
       wrongAnswers: ["Palomar Knot", "Blood Knot", "Surgeons Knot, Nail Knot"],
       correctAnswer: "Nail Knot"
    },
    {
       question: "What should you do if your fly line is floating down-stream faster than your fly?", 
       wrongAnswers: ["Watch it", "Whip it", "Nae Nae it", "Mend It"],
       correctAnswer: "Mend it"
    },
    {
       question: "What is good practice to do eveytime you reach your fishing spot prior to beginning fishing?", 
       wrongAnswers: ["Browse the sky", "Massage the earth", "Smell the air", "Read the Water"],
       correctAnswer: "Read the water"
    },
    {
       question: "When selecting a fly to present when fishing, what saying will help you choose the best fly for the job?", 
       wrongAnswers: ["Evade the Grade!", "Go with the Flow!", "Sure by the Shore!", "Match the Hatch"],
       correctAnswer: "Match the Hatch!"
    }
];

console.log(questionArr);

var questionArea = document.querySelector("#question");
var start = document.querySelector("#startBtn");

function startQuiz(){
    console.log(questionArr[2].question);
    // questionArea.textContent = questionArr[2].question;
    $("#question").text(questionArr[2]);
};

startQuiz();
