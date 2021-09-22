// Game values
let min = 1 , 
    max = 10 , 
    winningNumber = getWinningNum(1,10) ,
    guessesLeft = 3 ;



// UI Elements

const game = document.getElementById('game'); 
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const message = document.querySelector('.message')


// Assign UI min and max 

minNum.textContent = min ; 
maxNum.textContent = max ; 

// play again event listener
game.addEventListener('mousedown' , function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})



// Listen for guess
guessBtn.addEventListener('click', function(){
    let guessIn = (parseInt(guessInput.value));

    // Validate

    if(isNaN(guessIn) || guessIn < min || guessIn > max){
        setMessage(`Please enter a number beetween ${min} and ${max}` , 'red');
    }

    // check if 1
    if(guessIn === winningNumber){
        // game over and won
        gameOver(true , `${winningNumber} is correct number !!`);
    }else{
        //Wrong number
        guessesLeft -=1;

        if(guessesLeft === 0 ){
            gameOver(false , `Game over , You lost ! the correct number was ${winningNumber}`);
        }else{

            guessInput.value = '';
            // game continues ans wrong
            setMessage(`${guessIn} is not correct , you have ${guessesLeft} guesses left !`, 'tomato')
            
        }
        

    }

})

// game over function
function gameOver(won , msg) {
    let color ; 
    won === true ? color ='green' : color='red';

    //disable input
    guessInput.disabled = true;
    //Coloring border
    guessInput.style.borderColor = color;

    // set text color
    message.style.color = color

    //Set Message
    setMessage(msg)

    // Play again
    guessBtn.value = "Play Again"; 
    guessBtn.className += 'play-again'
     
}


// Get winning number
function getWinningNum(min , max) {
    return (Math.floor(Math.random()*(max-min+1)+min));

}


function setMessage(msg,color) {
    message.textContent = msg;
    message.style.color = color;

}


