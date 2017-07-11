$(function () {
  console.log('main.js running well');
});

const questions = [
  {
    question: 'What is the name of the town that the series takes place in?',
    choices: ['Sun Valley', 'Green Valley', 'Hill Valley' 'Silicon Valley'],
    correctAnswer: 'Hill Valley'
  }
  {
    question: 'What is the name of the device attached to Doc’s DeLorean that makes time travel possible?',
    choices: ['Tardis', 'Flux Capacitor', 'Time Sphere', 'Cosmic Treadmill'],
    correctAnswer: 'Flux Capacitor'
  }
  {
    question: 'How much power is needed to power the DeLorean to make it travel in time?',
    choices: ['1.21 gigajoules', '1.21 gigabytes', '1.21 gigamons', '1.21 gigawatts'],
    correctAnswer: '1.21 gigawatts'
  }
  {
    question: 'How fast does the DeLorean have to go before it can go back in time?',
    choices: ['88 mph', '75 mph', '100 mph', '200 mph'],
    correctAnswer: '88 mph'
  }
  {
    question: 'What is the name of Doc’s dog?',
    choices: ['Galileo', 'Einstein', 'Hawking', 'Copernicus'],
    correctAnswer: 'Einstein'
  }
  {
    question: 'What year does Marty travel to in the first film?',
    choices: ['1945', '1955', '1965', '1975'],
    correctAnswer: '1955'
  }
  {
    question: 'When Marty tells Doc that Ronald Reagan (“The actor!”) is president in 1985, which actress does Doc speculate is the First Lady?',
    choices: ['Marilyn Monroe', 'Rita Hayworth', 'Nancy Davis', 'Jane Wyman'],
    correctAnswer: 'Jane Wyman'
  }
  {
    question: 'What is the full name of the mayor who works in the diner when Marty travels to the past?',
    choices: ['Slade Wilson', 'Goldie Johnson', 'Ronnie Smith', 'Goldie Wilson'],
    correctAnswer: 'Goldie Wilson'
  }
  {
    question: 'What is the name of the big dance that the characters converge on in the climax of the first film?',
    choices: ['Deep Sea Boogie', 'Enchantment Under The Sea', 'Starlight Sockhop', 'Hill Valley Swing'],
    correctAnswer: 'Enchantment Under The Sea'
  }
  {
    question: 'What iconic rock song does Marty play with the band on stage at the dance?'
    choices: ['Johnny B. Goode', 'Jailhouse Rock', 'Purple Haze', 'Satisfaction'],
    correctAnswer: 'Johnny B. Goode'
  }
  {
    question: 'Which actress, who had previously starred in The Karate Kid, plays Marty’s girlfriend Jennifer in the second film?',
    choices: ['Claudia Wells', 'Winona Ryder', 'Lea Thompson' 'Elizabeth Shue'],
    correctAnswer: 'Elizabeth Shue'
  }
  {
    question: 'In Back to the Future 2, when Doc and Marty travel to the future, there’s a headline that says the Chicago Cubs won the World Series. What city is the losing team from?',
    choices: ['New York', 'Miami', 'Boston', 'Los Angeles'],
    correctAnswer: 'Miami'
  }
  {
    question: 'What is the title of the sports almanac that is crucial to the entire plot of the second film?',
    choices: ['Grays Sports Almanac', 'Gordons Sports Almanac', 'Greens Sports Almanac', 'Golds Sports Almanac'],
    correctAnswer: 'Grays Sports Almanac'
  }
  {
    question: 'What year do Marty and Doc travel to in Back to the Future 3?',
    choices: ['1865', '1875', '1885', '1905'],
    correctAnswer: '1885'
  }
  {
    question: 'What alias does Marty use when he’s in the past in Back to the Future 3?',
    choices: ['Sergio Leone', 'Lee Van Cleef', 'Eli Wallach', 'Clint Eastwood'],
    correctAnswer: 'Clint Eastwood'
  }
  {
    question: 'Which Oscar-winning actress plays Clara, Doc’s love interest in BTTF 3?',
    choices: ['Mary Steenburgen', 'Meryl Streep', 'Jane Fonda', 'Jessica Lange'],
    correctAnswer: 'Mary Steenburgen'
  }
  {
    question:'From what country are the terrorists that Doc steals the plutonium from?',
    choices: ['Egypt', 'Libya', 'Palestine', 'Tunisia'],
    correctAnswer: 'Libya'
  }
  {
    question: 'What is Biff’s ancestor’s name from in BTTF 3?',
    choices: ['Bruce', 'Beauregarde', 'Buford', 'Benjamin'],
    correctAnswer: 'Buford'
  }
  {
    question: 'Which Oscar-winning director co-wrote and directed all 3 films in the series?',
    choices: ['Robert Zemeckis', 'Steven Spielberg', 'Sydney Pollack', 'Mike Nichols'],
    correctAnswer: 'Robert Zemeckis'
  }
  {
    question: 'Name the actor that was originally cast as Marty McFly before Michael J. Fox replaced him six weeks into filming?',
    choices: ['Crispin Glover', 'Eric Stoltz', 'Tom Cruise', 'Tom Wilson'],
    correctAnswer: 'Eric Stoltz'
  }
];
