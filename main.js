$(function () {
  console.log('main.js running well');
  loadTitle();
const questions = [
  {
    question: 'What is the name of the town that the series takes place in?',
    choices: ['Sun Valley', 'Green Valley', 'Hill Valley', 'Silicon Valley'],
    correctAnswer: 'Hill Valley'
  }, {
    question: 'What is the name of the device attached to Doc’s DeLorean that makes time travel possible?',
    choices: ['Tardis', 'Flux Capacitor', 'Time Sphere', 'Cosmic Treadmill'],
    correctAnswer: 'Flux Capacitor'
  }, {
    question: 'How much power is needed to power the DeLorean to make it travel in time?',
    choices: ['1.21 gigajoules', '1.21 gigabytes', '1.21 gigamons', '1.21 gigawatts'],
    correctAnswer: '1.21 gigawatts'
  }, {
    question: 'How fast does the DeLorean have to go before it can go back in time?',
    choices: ['88 mph', '75 mph', '100 mph', '200 mph'],
    correctAnswer: '88 mph'
  }, {
    question: 'What is the name of Doc’s dog in 1985?',
    choices: ['Galileo', 'Einstein', 'Hawking', 'Copernicus'],
    correctAnswer: 'Einstein'
  }, {
    question: 'What year does Marty travel to in the first film?',
    choices: ['1945', '1955', '1965', '1975'],
    correctAnswer: '1955'
  }, {
    question: 'When Marty tells Doc that Ronald Reagan (“The actor!”) is president in 1985, which actress does Doc speculate is the First Lady?',
    choices: ['Marilyn Monroe', 'Rita Hayworth', 'Nancy Davis', 'Jane Wyman'],
    correctAnswer: 'Jane Wyman'
  }, {
    question: 'What is the full name of the mayor who works in the diner when Marty travels to the past?',
    choices: ['Slade Wilson', 'Goldie Johnson', 'Ronnie Smith', 'Goldie Wilson'],
    correctAnswer: 'Goldie Wilson'
  }, {
    question: 'What is the name of the big dance that the characters converge on in the climax of the first film?',
    choices: ['Deep Sea Boogie', 'Enchantment Under The Sea', 'Starlight Sockhop', 'Hill Valley Swing'],
    correctAnswer: 'Enchantment Under The Sea'
  }, {
    question: 'What iconic rock song does Marty play with the band on stage at the dance?',
    choices: ['Johnny B. Goode', 'Jailhouse Rock', 'Purple Haze', 'Satisfaction'],
    correctAnswer: 'Johnny B. Goode'
  }, {
    question: 'Which actress, who had previously starred in The Karate Kid, plays Marty’s girlfriend Jennifer in the second film?',
    choices: ['Claudia Wells', 'Winona Ryder', 'Lea Thompson', 'Elizabeth Shue'],
    correctAnswer: 'Elizabeth Shue'
  }, {
    question: 'In Back to the Future 2, when Doc and Marty travel to the future, there’s a headline that says the Chicago Cubs won the World Series. What city is the losing team from?',
    choices: ['New York', 'Miami', 'Boston', 'Los Angeles'],
    correctAnswer: 'Miami'
  }, {
    question: 'What is the title of the sports almanac from the second film?',
    choices: ['Grays Sports Almanac', 'Gordons Sports Almanac', 'Greens Sports Almanac', 'Golds Sports Almanac'],
    correctAnswer: 'Grays Sports Almanac'
  }, {
    question: 'What year do Marty and Doc travel to in Back to the Future 3?',
    choices: ['1865', '1875', '1885', '1905'],
    correctAnswer: '1885'
  }, {
    question: 'What alias does Marty use when he’s in the past in Back to the Future 3?',
    choices: ['Sergio Leone', 'Lee Van Cleef', 'Eli Wallach', 'Clint Eastwood'],
    correctAnswer: 'Clint Eastwood'
  }, {
    question: 'Which Oscar-winning actress plays Clara, Doc’s love interest in BTTF 3?',
    choices: ['Mary Steenburgen', 'Meryl Streep', 'Jane Fonda', 'Jessica Lange'],
    correctAnswer: 'Mary Steenburgen'
  }, {
    question:'From what country are the terrorists that Doc steals the plutonium from?',
    choices: ['Egypt', 'Libya', 'Palestine', 'Tunisia'],
    correctAnswer: 'Libya'
  }, {
    question: 'What is Biff’s ancestor’s name from in BTTF 3?',
    choices: ['Bruce', 'Beauregarde', 'Buford', 'Benjamin'],
    correctAnswer: 'Buford'
  }, {
    question: 'Which Oscar-winning director co-wrote and directed all 3 films in the series?',
    choices: ['Robert Zemeckis', 'Steven Spielberg', 'Sydney Pollack', 'Mike Nichols'],
    correctAnswer: 'Robert Zemeckis'
  }, {
    question: 'Name the actor that was originally cast as Marty McFly before Michael J. Fox replaced him six weeks into filming?',
    choices: ['Crispin Glover', 'Eric Stoltz', 'Tom Cruise', 'Tom Wilson'],
    correctAnswer: 'Eric Stoltz'
  }
];

  let score = 0; //score player has at any point through the game
  let questionCounter = 0; //tracks question number

//load title screen when the page loads
function loadTitle () {
  console.log('title screen loaded');
  let $container = $('<div>');
  $container.attr('id', 'container');
  $container.appendTo('body');
  let $titleScreen = $('<div>');
  $titleScreen.addClass('title-screen');
  $titleScreen.appendTo('#container');
  let $header = $('<header>');
  $header.addClass('header');
  $header.appendTo('.title-screen');
  let $subhead = $('<h2>');
  $subhead.addClass('subhead');
  $subhead.appendTo('.title-screen');
  let $poster = $('<img id = "poster">');
  $poster.appendTo('.title-screen');
  let $footer = $('<footer>');
  $footer.appendTo('.title-screen');
  let $start = $('<button>');
  $start.addClass('start');
  $start.appendTo('footer');
  let $buttonImage = $('<img>', {class: 'start-button'});
  $buttonImage.appendTo('.start');

}

//Event listener that allows the start button to be clicked on title screen
//and calls the clickStart function.
$('.start').click(clickStart);
//when I click start button, title screen hides and question page forms
function clickStart () {
  $('.title-screen').css('display', 'none');
   setGame();
    }
//create question screen
function setGame () {
    console.log('setting game');
    let $questionDiv = $('<div>');
    $questionDiv.attr('id', 'question');
    let $answerDiv = $('<div>');
    $answerDiv.attr('id', 'answers');
    let $answerList = $('<ol>');
    $answerList.attr('id', 'answer-list');
    let $nextButton = $('<button>');
    let $answerDisplay = $('<span>');
    $answerDisplay.attr('id', 'answer-display');
    $nextButton.attr('id', 'next');
    $nextButton.html('<img class = "forward" src="https://fontmeme.com/permalink/170713/bff1cef89969b680f10fdcc0595fa88e.png" alt="back-to-the-future-font" border="0">');
    $nextButton.on('click', nextQuestion);

    $questionDiv.appendTo('#container');
    $answerDiv.appendTo('#container');
    $nextButton.appendTo('#container');
    $answerList.appendTo('#answers');
    $answerDisplay.appendTo('#container');


//Allow '#next' button to be disabled until an answer is clicked

    $('#next').prop('disabled', true);

    createQuestions();
    createAnswers();
    clickAnswers();
  }
//displays a new question every time previous question is answered
function createQuestions () {
  console.log('questions created');
  let q = questionCounter;
  //$('#question').text(questions[q].question);
  if (q === questions.length) {
      console.log('button removed');

    } else {
      $('#question').text(questions[q].question);
    }
}
//displays new answers on the game screen. For every answer in the 'choices'
//key value in each object of the questions array, an ID will be assigned
//corresponding to its position in the 'choices' array.
 function createAnswers () {
  console.log('answers created');
   let a = questionCounter;
  for (let i = 0; i < questions[a].choices.length; i++) {
      let $answer = $('<li>', {id: `answer${i}`}).text(questions[a].choices[i]);
      $answer.appendTo('ol');
    }
  }
//allow individual answers to be clicked and correctAnswers function to
//be called.
  function clickAnswers () {
    console.log('click answer');
    let $answer = $('li');
    $answer.on('click', correctAnswers);

    }

//tracks and stores all correct clicked answers
function correctAnswers () {
  let txt = $(this).text();
  let q = questions[questionCounter].question
  console.log(txt);
  let a = questionCounter;
      if (txt === questions[a].correctAnswer) {
        console.log(score);
        score++;
        let $greatScott = $('<img src="https://fontmeme.com/permalink/170713/ed064265069424468ecf3747bbdce20f.png" alt="back-to-the-future-font" border="0">')
        $('#answer-display').html($greatScott);
      } else {
        let $helloMcfly = $('<img src="https://fontmeme.com/permalink/170713/5d64ad88f0589b049dcec156f4e6fba3.png" alt="back-to-the-future-font" border="0">')
        $('#answer-display').html($helloMcfly);
      }

    //enables "forward" button to click to next question
    $('#next').prop('disabled', false);

      if (a === 19) {
        console.log('results button');
        //create "see results" button on the last question screen
        //set event listener so that when "see results" button is clicked
        //clickResults function runs
        let $nextButton = $('#next');
        console.log($nextButton);
        $nextButton.html('<img class = "see-results" src="https://fontmeme.com/permalink/170713/8ec3a4efc62dd0ca6572cf7bfba1ea20.png" alt="back-to-the-future-font" border="0">');
        $nextButton.off('click', nextQuestion);
        $nextButton.click(clickResults);
        $nextButton.attr('id', 'result-button');
      }
  };
//changes the answers to the corresponding question
//every time the previous question is answered
function updateAnswers () {
  console.log('updating answers!');
  let a = questionCounter;
  for (let i = 0; i < questions[a].choices.length; i++) {
       $(`#answer${i}`).text(questions[a].choices[i]);

    }
  }

//enables the next question button when an answer is clicked
//then after that button is clicked, creates new questions and answers
//counts the number of questions answered at any point in the game.
function nextQuestion () {
    console.log('next question!');
    questionCounter++;
    console.log(questionCounter);
    createQuestions();
    updateAnswers();
    $('#answer-display').text('');
    $('#next').prop('disabled', true);

  };

//When 'See Results' button is clicked, player's score will appear at
//the bottom of the final question screen along with the button that
//will prompt the player to start the game over.
function clickResults () {
  console.log('click results');
  console.log(questionCounter);
  console.log(score);
  console.log('see score and restart button');
  let $scoreDiv = $('<div>');
  $scoreDiv.attr('id', 'score');
  $scoreDiv.text(`You Got ${score} Out Of 20!`);
  let $playAgain = $('<button>');
  $playAgain.html('<img class = "restart" src="https://fontmeme.com/permalink/170714/d65c6f9b8fc411d1dc64baee98524b21.png" alt="back-to-the-future-font" border="0">')
  $playAgain.attr('id', 'play-again');

  $scoreDiv.appendTo('#container');
  $playAgain.appendTo('#container');

  restartGame();
}

//When restart button is clicked, the screen will return
//the elements of the title screen along with its functionality.
//Score and questionCounter variables will then reset to 0.
function restartGame () {
  $('#play-again').click(function () {
    $('body').children().remove();
    loadTitle();
  });
  score = 0;
  questionCounter = 0;
};

});
