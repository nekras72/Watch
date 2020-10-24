let wrapper = document.querySelector('#wrapper');
let clock = document.querySelector('#clock');
let divForDate = document.createElement('div');
divForDate.classList.add('divForDate');
clock.appendChild(divForDate);


for (let i=0; i<12; i++) {
  const line = document.createElement('div');
  clock.appendChild(line);
  line.classList.add('line');
  line.style.transform = 'rotate('+(i*30)+'deg)';
}


for (let i=1; i<=12; i++){
  let className = 'digit'+i;
  const digit = document.createElement('div');
  clock.appendChild(digit);
  digit.innerText = i;
  digit.id = "digit"+i;
  digit.classList.add(className);
  digit.classList.add('digits');
}

const secondHand = document.createElement('div');
secondHand.classList.add('secondHand');
clock.appendChild(secondHand);

const minuteHand = document.createElement('div');
minuteHand.classList.add('minuteHand');
clock.appendChild(minuteHand);

const hourHand = document.createElement('div');
hourHand.classList.add('hourHand');
clock.appendChild(hourHand);


let currentHour = null;
let currentMinute = null;
let currentSecond = null;
let currentDate = null;

setInterval(timeEngine, 1000);

function timeEngine() {
  setTime();
  secondHand.style.transform = 'rotate('+currentSecond*6+'deg)';
  minuteHand.style.transform = 'rotate('+currentMinute*3+'deg)';
  hourHand.style.transform = 'rotate('+currentHour*15+'deg)';
  divForDate.innerText = currentDate;
}

function setTime(){
  const currentDateTime = new Date();
  currentHour = currentDateTime.getHours();
  currentMinute = currentDateTime.getMinutes();
  currentSecond = currentDateTime.getSeconds();
  currentDate = currentDateTime.getDate();
}

