$(document).ready(function() {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        900,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(window).scroll(function() {
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

//Quiz 1
function submitQuiz1() {
  console.log("submitted");
  // get each answer score
  function answerScore(qName) {
    var radiosNo = document.getElementsByName(qName);
    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        // do something with radiosNo
        var answerValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  // calc score with answerScore function
  var calcScore = answerScore("q1") + answerScore("q2");
  console.log("CalcScore: " + calcScore);
  // function to return correct answer string
  function correctAnswer(correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber); // logs 1,2,3,4 after called below
    return (
      "The correct answer for question #" +
      qNumber +
      ": &nbsp;<strong>" +
      document.getElementById(correctStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerScore("q1") === 0) {
    document.getElementById("correctAnswer1").innerHTML = correctAnswer(
      "correctString1",
      1
    );
  }
  if (answerScore("q2") === 0) {
    document.getElementById("correctAnswer2").innerHTML = correctAnswer(
      "correctString2",
      2
    );
  }

  // calculate "possible score" integer
  var questionCountArray = document.getElementsByClassName("quiz1");
  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }

  // show score as "score/possible score"
  var showScore = "Your Score: " + calcScore + "/" + questionCounter;
  // if 4/4, "perfect score!"
  if (calcScore === questionCounter) {
    showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("userScore").innerHTML = showScore;
}

$(document).ready(function() {
  $("#submitButton").click(function() {
    $(this).addClass("hide");
  });
});

//Quiz 2
function submitQuizTwo() {
  console.log("submitted");

  // get each answer score
  function answerScore2(quizTwoName) {
    var radiosNo = document.getElementsByName(quizTwoName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        // do something with radiosNo
        var quizTwoValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(quizTwoValue)) {
      quizTwoValue = 0;
    }
    return quizTwoValue;
  }

  // calc score with answerScore function
  var calcScore2 =
    answerScore2("quizTwo1") +
    answerScore2("quizTwo2") +
    answerScore2("quizTwo3") +
    answerScore2("quizTwo4");
  console.log("CalcScore: " + calcScore2); // it works!

  // function to return correct answer string
  function correctAnswer(quiz2CorrectStringNo, quizTwoNumber) {
    console.log("quizTwoNumber: " + quizTwoNumber); // logs 1,2,3,4 after called below
    return (
      "Correct answer: " +
      ": &nbsp;<strong>" +
      document.getElementById(quiz2CorrectStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerScore2("quizTwo1") === 0) {
    document.getElementById("quizTwoCorrectAnswer1").innerHTML = correctAnswer(
      "quiz2CorrectString1",
      1
    );
  }
  if (answerScore2("quizTwo2") === 0) {
    document.getElementById("quizTwoCorrectAnswer2").innerHTML = correctAnswer(
      "quiz2CorrectString2",
      2
    );
  }
  if (answerScore2("quizTwo3") === 0) {
    document.getElementById("quizTwoCorrectAnswer3").innerHTML = correctAnswer(
      "quiz2CorrectString3",
      3
    );
  }
  if (answerScore2("quizTwo4") === 0) {
    document.getElementById("quizTwoCorrectAnswer4").innerHTML = correctAnswer(
      "quiz2CorrectString4",
      4
    );
  }

  // calculate "possible score" integer
  var quiz2QuestionCountArray = document.getElementsByClassName("correct");

  var quiz2QuestionCount = 0;
  for (var i = 0, length = quiz2QuestionCountArray.length; i < length; i++) {
    quiz2QuestionCount++;
  }

  // show score as "score/possible score"
  var showQuiz2Score = "Your Score: " + calcScore2 + "/" + quiz2QuestionCount;
  // if 4/4, "perfect score!"
  if (calcScore2 === quiz2QuestionCount) {
    showQuiz2Score = showQuiz2Score + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("quizTwoScore").innerHTML = showQuiz2Score;
}

$(document).ready(function() {
  $("#submitButton").click(function() {
    $(this).addClass("hide");
  });
});


//Test1
function submitTest1() {
  console.log("submitted");
  // get each answer score
  function testScore(tName) {
    var radiosNo = document.getElementsByName(tName);
    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        // do something with radiosNo
        var testValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(testValue)) {
      testValue = 0;
    }
    return testValue;
  }

  // calc score with testScore function
  var calcTestScore = testScore("t1") + testScore("t2");
  console.log("calcTestScore: " + calcTestScore);
  // function to return correct answer string
  function correctAnswer(testCorrectStringNo, tNumber) {
    console.log("tNumber: " + tNumber); // logs 1,2,3,4 after called below
    return (
      "The correct answer for question #" +
      tNumber +
      ": &nbsp;<strong>" +
      document.getElementById(testCorrectStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (testScore("t1") === 0) {
    document.getElementById("testCorrectAnswer1").innerHTML = correctAnswer(
      "testCorrectString1",
      1
    );
  }
  if (testScore("t2") === 0) {
    document.getElementById("testCorrectAnswer2").innerHTML = correctAnswer(
      "testCorrectString2",
      2
    );
  }

  // calculate "possible score" integer
  var testQuestionCountArray = document.getElementsByClassName("test1");
  var testQuestionCounter = 0;
  for (var i = 0, length = testQuestionCountArray.length; i < length; i++) {
    testQuestionCounter++;
  }

  // show score as "score/possible score"
  var showTestScore = "Your Score: " + calcTestScore + "/" + testQuestionCounter;
  if (calcTestScore === testQuestionCounter) {
    showTestScore = showTestScore + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("testUserScore").innerHTML = showTestScore;
}


$(document).ready(function() {
  $("#testSubmitButton").click(function() {
    $(this).addClass("hide");
  });
});

$('#send').click(function() {
  $('#results').html($('textarea').val().replace(/\n/g, '<br>'));
});


