var userScore = 0;

// timer count down
var startingTimer = 1;
var time = startingTimer * 60;
var timerEl = document.getElementById("timer");
// var timer = setInterval(countDown, 1000);
$(timerEl).text("Timer: " + time + "sec");
function countDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (time <= 0) {
        clearInterval(timer)
    }
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = "Timer " + `${minutes}: ${seconds}`+  " sec";
    time--;
};

var questionArr = [
    {
       question: "What weight fly-line should you use for a 7-wt fly rod?", 
       answers: ["3lb", "8stone", "14gram", "7wt"],
       correctAnswer: "7wt"
    },
    {
       question: "What is the name of the knot that is used to tie an anglers leader to their fly line and typical calls for a piece of hardware to tie?", 
       answers: ["Palomar Knot", "Blood Knot", "Surgeons Knot", "Nail Knot"],
       correctAnswer: "Nail Knot"
    },
    {
       question: "What should you do if your fly line is floating down-stream faster than your fly?", 
       answers: ["Watch it", "Whip it", "Nae Nae it", "Mend It"],
       correctAnswer: "Mend it"
    },
    {
       question: "What is good practice to do eveytime you reach your fishing spot prior to beginning fishing?", 
       answers: ["Browse the sky", "Massage the earth", "Smell the air", "Read the Water"],
       correctAnswer: "Read the water"
    },
    {
       question: "When selecting a fly to present when fishing, what saying will help you choose the best fly for the job?", 
       answers: ["Evade the Grade!", "Go with the Flow!", "Sure by the Shore!", "Match the Hatch"],
       correctAnswer: "Match the Hatch!"
    }
];

console.log(questionArr);

//initialize variables to hold our card contianers
var startCard = $("#start");
var quizCard = $("#quiz");
var highScoreCard = $("#highScore");
// quizCard.css("display", "none");
// highScoreCard.css("display", "none");



var questionArea = document.querySelector("#question");
var start = document.querySelector("#startBtn");
//function to reveal our quiz card and begin the timer
var index = 0;

function startQuiz(){
      console.log("Index: " + index);

      $("#question").text(questionArr[index].question);
      $(".answer1").text(questionArr[index].answers[0]);
      $(".answer2").text(questionArr[index].answers[1]);
      $(".answer3").text(questionArr[index].answers[2]);
      $(".answer4").text(questionArr[index].answers[3]);

      
      // var userChoice = $(this).on

      $(".answers").on("click", function(){
         var userChoice = $(this).text();
         if(userChoice === questionArr[index].correctAnswer){
            userScore++;
            index++;
            console.log("Score: " + userScore);
            if(questionArr.length > index){
               startQuiz();
            }
            else{
               // print user score to page
               // set final score to local storage
               // navigate to high score page
            }
         }
         else{
            index++;
            time = time -10;
            if(questionArr.length > index){
               startQuiz();
            }
            else{
               // print user score to page
               // set final score to local storage
               // navigate to high score page
            }
         }
         console.log(userChoice);
      });

   
   }



//Hide start card, show quiz card, begin quiz timer
startCard.on("click", function(){
   startCard.css("display", "none");
   quizCard.css("display", "block");
   var timer = setInterval(countDown, 1000);
   startQuiz();
});
