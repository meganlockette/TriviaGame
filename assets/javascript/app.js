// 5 questions, array
// array key, answers
// timer
// calculate correct answers
// calculate wrong answers
// List of questions
// Answer Key
// interate through questions

var panel = $("#quiz-area");

// Questions

var questions = [{
    question: "What is Louisiana's state flower?",
    answers: ["Wild Rose", "Magnolia", "Camellia"],
    correctAnswer: "Magnolia"
}, {
    question: "What is the name of the biggest celebration in New Orleans?",
    answers: ["Essence Festival", "NOLA Lights", "Mardi Gras"],
    correctAnswer: "Mardi Gras"
}, {
    question: "What food is New Orleans most known for?",
    answers: ["Jambalaya burritos", "Gumbo", "Fried Carmelized Bananas"],
    correctAnswer: "Gumbo"
}, {
    question: "What is New Orleans nickname?",
    answers: ["The Big Easy", "N.O.", "City of Saints"],
    correctAnswer: "The Big Easy"
}, {
    question: "What is New Orleans' motto?",
    answers: ["Let the good times roll", "You only live once", "Jazz it up!"],
    correctAnswer: "Let the good times roll"
}];

// Variable that holds setInterval

var timer;

var game = {

    correct: 0,
    incorrect: 0, 
    counter: 20,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME'S UP!");
            game.done();
        }
    }, 

    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>20</span> Seconds</h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            panel.append("<h2>" + questions[i].question + "</h2>");
            for (var e = 0; e < questions[i].answers.length; e++) {
                panel.append("<input type='radio' name='question-" + i + 
                "' value='" + questions[i].answers[e] + "''>" + questions[i].answers[e]);
            }
        }

        panel.append("<button id='done'>Done</button>");
    },

    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
          });

        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
          });  
        
          $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
          });

          this.result();

    },

    result: function() {

        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        panel.html("<h2>All Done!</h2>");
        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};

// Click Events

$(document).on("click", "#start", function() {
    game.start();
  });
  
  
$(document).on("click", "#done", function() {
    game.done();
  });


//Set Timer Function
var timeInSecs;
var ticker;
  
function startTimer(secs){
  timeInSecs = parseInt(secs)-1;
  ticker = setInterval("tick()",1000); 
}

function tick() {
	var secs = timeInSecs;
	if (secs>0) {
		timeInSecs--;
	}

    else {	
    clearInterval(ticker); window.alert("Time's up! Review your score below!") 
    }

    document.getElementById("counter").innerHTML = secs;

}

startTimer(20);

document.getElementById("form1").onsubmit = function() {
    flowervar = document.getElementsByName("flower");
    for (i=0; i<flowervar.length; i++) {
        if (flowervar[i].checked) {
            aScore = parseInt(flowervar[i].value);
        }
    }

    celebrationvar = document.getElementsByName("celebration");
    for (i=0; i<celebrationvar.length; i++) {
        if (celebrationvar[i].checked) {
            bScore = parseInt(celebrationvar[i].value);
        }
    }

    foodvar = document.getElementsByName("food");
    for (i=0; i<foodvar.length; i++) {
        if (foodvar[i].checked) {
            cScore = parseInt(foodvar[i].value);
        }
    }

    nicknamevar = document.getElementsByName("nickname");
    for (i=0; i<nicknamevar.length; i++) {
        if (nicknamevar[i].checked) {
            dScore = parseInt(nicknamevar[i].value);
        }
    }

    mottovar = document.getElementsByName("motto");
    for (i=0; i<mottovar.length; i++) {
        if (mottovar[i].checked) {
            eScore = parseInt(mottovar[i].value);
        }
    }

    result = aScore + bScore + cScore + dScore + eScore;
    clearInterval(ticker);
    document.getElementById("grade").innerHTML = result;

    
}
