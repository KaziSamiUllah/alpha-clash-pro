// function play(){
    
//     const homeSec = document.getElementById('home');
//     homeSec.classList.add('hidden')
//     const playSec = document.getElementById('');
//     playSec.classList.remove('hidden')
//     console.log(homeSec)
// }


function keyboardButtonHandler(event){
    const keyPressed = event.key;
    console.log('player pressed-', keyPressed);
    const currentAlphabet =document.getElementById('letter-display');
    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();
    console.log('expected Alphabet', expectedAlphabet);
    
    console.log(score);
    if(keyPressed === expectedAlphabet){
        console.log('you win');
        // score-update
        const currentScore = parseInt(document.getElementById('score').innerText);
        console.log('cuurent Score= ', currentScore);
        newScore = currentScore +1;
        document.getElementById('score').innerText = newScore;
        // new round
        removeBgColorByID(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife= parseInt(document.getElementById('life-left').innerText);
        const newLife = currentLife - 1;
        document.getElementById('life-left').innerText= newLife;
        console.log( 'life', newLife);
        if(newLife<=0){
            showScore();
            console.log('game over')
            document.getElementById('final-score').innerText = newScore;
        }
    }
}

document.addEventListener('keyup',keyboardButtonHandler);


function  continueGame(){
    // step-1: Generate Random alphabet
    const alphabet =getRandomAlphabet();
    // console.log(alphabet);
    // step-2: display the letter in HTML inner text
    const displayLetter = document.getElementById('letter-display');
    // console.log(displayLetter.innerText);
    displayLetter.innerText = alphabet;

    // hilight the key on keyboard
    setBgColorByID(alphabet);
}

function play(){
    hideElementByID('home');
    hideElementByID('score-page');
    showElementByID('play-ground');
    document.getElementById('life-left').innerText = 5;
    document.getElementById('score').innerText = 0;

    continueGame();
}
function showScore(){
    hideElementByID('play-ground', 'home');
    showElementByID('score-page');
   const displayedAlphabet = document.getElementById('letter-display').innerText;
   console.log(displayedAlphabet);
   removeBgColorByID(displayedAlphabet);
}
function goBackHome(){
    hideElementByID('score-page','play-ground');
    showElementByID('home');
}