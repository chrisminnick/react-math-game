var timer, operator, low=0, high, soundMuted = false;
$(function() {
  operations = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
  for (var operation of operations) {
    $('<option value="' + operation.toLowerCase() + '">' + 
      operation + '</option>').appendTo($('#operation'));
  }
  $('#operation').val('multiplication');

  for (var i=2; i <= 100; i++) {
    $('<option value="' + i + '">' + i + '</option>').appendTo($('#num-high'));
  }
  $('#num-high').val(10);

  $('#operation').change(updateHomePageMsg);
  $('#num-high').change(updateHomePageMsg);
  updateHomePageMsg();


  $('section#game div.num-key').click(function(e) {
    var btn = e.target;
    var value = btn.dataset.value;
    checkAnswer(value);
  });

  $(document).keyup(function(e) {
    var value = e.key;
    if (e.keyCode === 8 || e.keyCode == 46) { // backspace
      var currentAnswer = $('#solution>output').html();
      if (currentAnswer.length) {
        var newAnswer = currentAnswer.substring(0,currentAnswer.length-1);
        $('#solution>output').html(newAnswer);
      }
    } else if (e.keyCode === 32) { // spacebar
      $('#solution>output').html('');
      // if (!soundMuted) {
      //   clearSound.play();
      // }
    } else if (e.keyCode >= 48 && e.keyCode <= 57 && timer) {
      $('#msg').html('Press <kbd>SPACEBAR</kbd> to clear.');
      checkAnswer(value);
    }
  });

  $('#play-button').click(function() {
    high = Number($('#num-high').val()); // Sets global var
    switch($('#operation').val()) {
      case 'addition':
        operator = '+';  // Sets global var
        break;
      case 'subtraction':
        operator = '-'; // Sets global var
        break;
      case 'multiplication':
        operator = 'x'; // Sets global var
        break;
      case 'division':
        operator = '/'; // Sets global var
    }
    switchSection($('#settings'), $('#game'));
    play();
  });

  $('#play-again').click(function() {
    switchSection($('#results'), $('#game'));
    play();
  });

  $('#change-settings').click(function() {
    switchSection($('#results'), $('#settings'));
  });
});

// if (!soundMuted) {
//   var clearSound = new Audio('sounds/clear.wav');
//   var clickSound = new Audio('sounds/button.wav');
//   var rightSound = new Audio('sounds/right.wav');
// }
function checkAnswer(value) {
  var correctAnswer = getCorrectAnswer(operator);
  var userAnswer;
  var score = parseInt($('#score > output').html());
  userAnswer = parseInt($('#solution>output').html());
  if (value === 'clear') {
    // if (!soundMuted) {
    //   clearSound.play();
    // }
    $('#solution>output').html('');
  } else if (correctAnswer !== userAnswer) { // If already answered don't change displayed value
    // if (!soundMuted) {
    //   clickSound.play();
    // }
    if (userAnswer === 0) {
      $('#solution>output').html(value); // don't include leading zeroes
    } else {
      $('#solution>output').html($('#solution>output').html() + value);
    }
    userAnswer = parseInt($('#solution>output').html());
  } else {
    return false; // Already got right answer. Don't check it again.
  }
  if (correctAnswer === userAnswer) {
    // if (!soundMuted) {
    //   rightSound.load();
    //   rightSound.play();
    // }
    score++;
    $('#score > output').html(score.toString());
    $("#solution>output").animate({
      opacity: 0.25
    }, 300, function() {
      $('#solution>output').html('');
      setEquation(operator, low, high);
    });
  }
}

function getCorrectAnswer(oper) {
  var num1 = parseInt($('#num1').html());
  var num2 = parseInt($('#num2').html());
  switch(oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

function play() {
  // soundMuted = $('#mute-sound')[0].checked;
  $('#time > output').html(60); // seconds left
  $('#score > output').html(0); // seconds left
  setEquation();
  startTimer();
}

function randInt(low, high, weighted=false) {
  var rndDec = Math.random();
  if (!weighted) {
    return Math.floor(rndDec * (high - low + 1) + low);
  }
  var numList = [];
  for (var i=low; i<=high; i++) {
    numList.push(i);
    for (j=0; j<=i; j++) {
      numList.push(i);
    }
  }
  var rndInt = numList[Math.floor(Math.random() * numList.length)];
  return rndInt;
}

function setEquation() {
  var num1 = randInt(low, high);
  var num2 = randInt(low, high, true);
  var numHigh = Math.max(num1, num2);
  var numLow = Math.min(num1, num2);
  switch(operator) {
    case '+':
      var spanNum1 = '<span id="num1">' + num1.toString() + '</span>';
      var spanNum2 = '<span id="num2">' + num2.toString() + '</span>';
      break;
    case '-':
      var spanNum1 = '<span id="num1">' + numHigh.toString() + '</span>';
      var spanNum2 = '<span id="num2">' + numLow.toString() + '</span>';
      break;
    case 'x':
      var spanNum1 = '<span id="num1">' + num1.toString() + '</span>';
      var spanNum2 = '<span id="num2">' + num2.toString() + '</span>';
      break;
    case '/':
      while (num2 === 0) { // No division by zero
        num2 = randInt(low, high);
      }
      var spanNum1 = '<span id="num1">' + (num1 * num2).toString() + '</span>';
      var spanNum2 = '<span id="num2">' + num2.toString() + '</span>';
  }
  $('#solution>output').html('');
  $('#solution>output').css({
    opacity: "1"
  });
  $('#equation').fadeOut(150, function() {
    $('#equation').html(spanNum1 + ' ' + operator + ' ' + spanNum2);
    $('#equation').fadeIn(150);
  });
}

function switchSection(hideSection, showSection) {
  hideSection.toggle('display');
  showSection.toggle('display');
}

function startTimer() {
  timer = setInterval(function() {
    var secondsLeft = parseInt($('#time > output').html());
    var score = parseInt($('#score > output').html());
    secondsLeft--;
    $('#time > output').html(secondsLeft.toString());
    if (secondsLeft < 10) {
      var a = (10-secondsLeft) * .1;
      console.log(a);
      var bgColor = 'rgb(255,102,0,' + a + ')';
      $('body').css({
        backgroundColor: bgColor
      });
    }
    if (secondsLeft === 0) {
      clearInterval(timer);
      timesUp(score);
    }
  }, 1000)
}

function timesUp(score) {
  $('#game').toggle('display');
  $('#results').toggle('display');
  $('#num-answered').html(score);

  $.post( "ajax/record-score.php", {'score': score, 
                                    'operator': operator, 
                                    'high-number': high})
    .done(function(json) {
      $('#recorded-result').html(json.msg);

      $('body').css({
        backgroundColor: 'rgb(255,255,255,100)'
      });
    });
}

function updateHomePageMsg() {
  var highNum = $('#num-high').val();
  var operation = $('#operation').val();

  $.post( "ajax/home-page-message.php", {'highNum': highNum, 
                                    'operation': operation})

    .done(function(json) {
      if (json.maxForAll) {
        var msg = '<ul>';
        msg += '<li>The record for ' + operation + ' with a high number of ' +
          highNum + ' is ' + json.maxForAll + '.</li>';
      } else {
        var msg = '<p class="text-center">Be first to try ' + operation + ' with a high number of ' + 
        highNum + '. You are guaranteed to set a record!</p>';
      }
      if (json.maxForUser) {
        msg+='<li>Your personal record is ' + json.maxForUser + '.</li>';
      }
      if (json.maxForAll) {
        msg += '</ul>';
        msg += '<p class="text-center"><strong>Can you do better?</strong></p>';
      }
      $('#homepage-msg').html(msg);
    });
}