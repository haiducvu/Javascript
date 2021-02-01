'use strict';
var scores, roundScore, activePlayer, dice;

scores= [0,0];
roundScore= 0;
activePlayer= 0;

// dice= Math.floor(Math.random() * 6) +1;
// console.log("dice", dice);

// document.querySelector('#current--'+ activePlayer).textContent= dice;

// var x = document.querySelector('#score--0').textContent; //DOM HTML
// console.log(x);

document.querySelector('.dice').style.display= 'none'; //DOM CSS
 
document.getElementById('score--0').textContent= '0';
document.getElementById('score--1').textContent= '0';
document.getElementById('current--0').textContent= '0';
document.getElementById('current--1').textContent='0';

document.querySelector('.btn--roll').addEventListener('click', function(){
    //Do something here

    //1. Radom number
    dice= Math.floor(Math.random() * 6) +1;  

    //2. Display the result 
    var diceDOM= document.querySelector('.dice');
    diceDOM.style.display= 'block'; 
    diceDOM.src='dice-' + dice + '.png';

    //3. Update the round score IF the rolled  number was NOT a 1       //Video 8: Updating Scores and Changing the Active Player      
    if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current--'+ activePlayer).textContent= roundScore;
    }else{
        //next player
        nextPlayer();
    
    }

 
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    //Add current score to GLOBAL score
        scores[activePlayer] += roundScore; 
    //Update UI
    document.querySelector('#score--', activePlayer).textContent= scores[activePlayer];
    //Check if player won the game
       //next player
       activePlayer === 0 ? activePlayer =1: activePlayer=0;
       roundScore=0;
 
       document.getElementById('current-0').textContent= '0';
       document.getElementById('current-1').textContent= '0';
 
 
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
   
       document.querySelector('.dice').style.display= 'none';
    
    
});

function nextPlayer(){
      //next player
      activePlayer === 0 ? activePlayer =1: activePlayer=0;
      roundScore=0;

      document.getElementById('current-0').textContent= '0';
      document.getElementById('current-1').textContent= '0';


      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
  
      document.querySelector('.dice').style.display= 'none';
}