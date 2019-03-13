
// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//   * Don't let the player pick more than one answer per question.
  
//   * Don't forget to include a countdown timer.
var questionGroup = [
  {
      numberone: "As of October 2018, How many websites existed on the Internet.?",
      answers: {
          one: "1.1 billion",
          two: "1.9 billion",
          three: "5.1 billion",
          four: " 1.9 trillion"
      },
      correct: "1.9 billion"
  },
  {
      numbertwo: "Out of the 7 Billion people on earth. How many are already online.?",
      answers: {
          one: "1 Billion",
          two: "2 Billion",
          three: "3 Billion",
          four: "4 Billion",
      },
      correct: "4 Billion "
  },
  {
      numberthree: "On August 6,____, the first website http://info.cern.ch went online.",
      answers: {
          one: "1991",
          two: "1995",
          three: "1976",
          four: "1989",
      },
      correct: "1991",
  },
  {
      numberfour: "Initially the WWW was meant only for physicists at ________ who would use it to share data but was later extended to general public in 1993.",
      answers: {
          one: "USDOD",
          two: "CERN",
          three: "Fermilab",
          four: "USDE",
      },
      correct: "CERN",
  },
]

function printQuestions() {
  gameEq = "<p>" + questionGroup[0].numberone + "</p>" + "<form id='sup'><input type='radio' name='bttnAnswer' value='1.9 billion'>" + questionGroup[0].answers.one + "<input type='radio' name='bttnAnswer' value='JS'>" + questionGroup[0].answers.two + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[0].answers.three + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[0].answers.four + "</form>" +
      "<p>" + questionGroup[1].numbertwo + "</p>" + "<form><input type='radio' name='bttnAnswer' value='no'>" + questionGroup[1].answers.one + "<input type='radio' name='bttnAnswer' value='4 Billion'>" + questionGroup[1].answers.two + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[1].answers.three + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[1].answers.four + "</form>" +
      "<p>" + questionGroup[2].numberthree + "</p>" + "<form><input type='radio' name='bttnAnswer' value='no'>" + questionGroup[2].answers.one + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[2].answers.two + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[2].answers.three + "<input type='radio' name='bttnAnswer' value='1991'>" + questionGroup[2].answers.four + "</form>" +
      "<p>" + questionGroup[3].numberfour + "</p>" + "<form><input type='radio' name='bttnAnswer' value='CERN'>" + questionGroup[3].answers.one + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[3].answers.two + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[3].answers.three + "<input type='radio' name='bttnAnswer' value='no'>" + questionGroup[3].answers.four + "</form>";
  $("#gameFunction").html(gameEq);

}
var wrongAnswers = 0;
var rightAnswers = 0;
var counter = 30;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000)
}
function stop() {
  clearInterval(intervalId);
  $(".gameFunction").remove();
  $(".timer").remove();
}
function resultGuy() {
  for (var i = 0; i < questionGroup.length; i++) {
      var answer = $('input[name=bttnAnswer]:checked').attr('id')
      // I can't get answer to equal the checked radio button
      if (answer === questionGroup[i].correct) {
          rightAnswers++;
      }
      else if (answer !== questionGroup[i].correct) {
          wrongAnswers++;
      }
  }
  $("#scoreDisplay").html("<p>Correct Answers: " + rightAnswers + "</p>" + "<p>Incorrect Answers: " + wrongAnswers + "</p>");

}

function decrement() {
  counter--;
  $(".timer").html("<p>Time Left: " + counter + "</p>");

  if (counter === 0) {
      stop();
      resultGuy();
  }


}


$("#startBttn").on("click", function () {
  $("#startBttn").remove();
  printQuestions();
  run();

})

