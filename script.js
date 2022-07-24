// player variables
const player = document.querySelector('.player');
const batuPlyr = document.querySelector('.player-batu');
const guntingPlyr = document.querySelector('.player-gunting');
const kertasPlyr = document.querySelector('.player-kertas');
let playerChoice = '';

// cpu variables
const cpu = document.querySelector('.cpu');
const batuCpu = document.querySelector('.cpu-batu');
const guntingCpu = document.querySelector('.cpu-gunting');
const kertasCpu = document.querySelector('.cpu-kertas');
let cpuChoice = '';

const rstBtn = document.querySelector('.restart-btn');
const resultText = document.querySelector('.vs');

//  start game

// player choose batu
batuPlyr.addEventListener('click', function () {
  batuPlyr.classList.add('game-active');
  playerChoice = 'batu';
  disableClick();
  cpuSelect();
  result();
});

// player choose kertas
kertasPlyr.addEventListener('click', function () {
  kertasPlyr.classList.add('game-active');
  playerChoice = 'kertas';
  disableClick();
  cpuSelect();
  result();
});

// player choose gunting
guntingPlyr.addEventListener('click', function () {
  guntingPlyr.classList.add('game-active');
  playerChoice = 'gunting';
  disableClick();
  cpuSelect();
  result();
});

// disable click function
const disableClick = () => {
  guntingPlyr.disable = true;
  kertasPlyr.disable = true;
  batuPlyr.disable = true;
};

// cpu choice
const cpuSelect = () => {
  c = Math.floor(Math.random() * 3);
  if (c === 0) {
    cpuChoice = 'batu';
    batuCpu.classList.add('game-active');
  }
  if (c === 1) {
    cpuChoice = 'kertas';
    kertasCpu.classList.add('game-active');
  }
  if (c === 2) {
    cpuChoice = 'gunting';
    guntingCpu.classList.add('game-active');
  }
};

// game result fucntion

const result = () => {
  //batu
  if ((playerChoice === 'batu') & (cpuChoice === 'gunting')) {
    document.querySelector('.vs').innerText = 'player 1 win';
    resultText.classList.add('win');
  }
  if ((playerChoice === 'batu') & (cpuChoice === 'kertas')) {
    document.querySelector('.vs').innerText = 'com win';
    resultText.classList.add('lose');
  }

  //gunting
  if ((playerChoice === 'gunting') & (cpuChoice === 'kertas')) {
    document.querySelector('.vs').innerText = 'player 1 win';
    resultText.classList.add('win');
  }
  if ((playerChoice === 'gunting') & (cpuChoice === 'batu')) {
    document.querySelector('.vs').innerText = 'com win';
    resultText.classList.add('lose');
  }

  //kertas
  if ((playerChoice === 'kertas') & (cpuChoice === 'gunting')) {
    document.querySelector('.vs').innerText = 'com win';
    resultText.classList.add('lose');
  }
  if ((playerChoice === 'kertas') & (cpuChoice === 'batu')) {
    document.querySelector('.vs').innerText = 'player 1 win';
    resultText.classList.add('win');
  }

  //tie
  if (playerChoice === cpuChoice) {
    document.querySelector('.vs').innerText = 'draw';
    resultText.classList.add('tie');
  }
};

// restart game fucntion

rstBtn.addEventListener('click', function () {
  kertasPlyr.classList.remove('game-active');
  batuPlyr.classList.remove('game-active');
  guntingPlyr.classList.remove('game-active');
  kertasCpu.classList.remove('game-active');
  batuCpu.classList.remove('game-active');
  guntingCpu.classList.remove('game-active');
  cpu.classList.remove('game-active');
  document.querySelector('.vs').innerText = 'vs';
  resultText.classList.remove('win', 'tie', 'lose');
});
