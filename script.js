'use strict';
let againButton = document.querySelector('.again');
let checkButton = document.querySelector('.check');
let guess = document.querySelector('.guess');
let message = document.querySelector('.message');
let randomNumber = document.querySelector('.number');
// let score = document.querySelector('.score');
// let highScore = document.querySelector('.highscore');
let body = document.querySelector('body')


let number=Math.trunc(Math.random()*20)+1;
console.log(number)
let score = 20;
let highScore = 0;

const  mess=function(m){
  document.querySelector('.message').textContent=m}

 
  checkButton.addEventListener('click',function(){
    let guess1=Number(guess.value)
    
if (guess1 == number) {
  randomNumber.innerHTML=number;
  mess('you are correct!');
  body.style.backgroundColor="green";
  if(score > highScore){
    highScore = score;
    
  }

  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.check').disable="true ";

}else if (guess.value == ""){
  mess('NO INPUT!!!');

  
  
}else if (guess1 !== number){

  if(score>0){
    mess(guess1>number?'😜Too high!!!':'😒Too low!!!');
  score--
  document.querySelector('.score').textContent= score;
}else{
  mess('😡GAMEOVER!!!');
  body.style.backgroundColor="red";
}}

  });


  againButton.addEventListener('click',function(){
    score = 20
    mess('Start guessing...');
    randomNumber.innerHTML='?';
    body.style.backgroundColor="black";
    guess.value="";
    document.querySelector('.score').textContent= score;
    number=Math.trunc(Math.random()*20)+1;
console.log(number)
 document.querySelector('.check').disable="false" ;
  })
