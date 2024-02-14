// function play(){
    
//     const homeSec = document.getElementById('home');
//     homeSec.classList.add('hidden')
//     const playSec = document.getElementById('');
//     playSec.classList.remove('hidden')
//     console.log(homeSec)
// }


function keyboardButtonHandler(event){
  
    const keyPressed = event.key;
    console.log( 'player pressed-', keyPressed);
    const currentAlphabet =document.getElementById('letter-display');
    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();
    console.log('expected Alphabet', expectedAlphabet);
    if(keyPressed === expectedAlphabet){
        console.log('you win');
        continueGame();
    }
    else{
        console.log('you Lost');
        showScore();
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
    showElementByID('play-ground');
    continueGame();
}
function showScore(){
    hideElementByID('play-ground');
    showElementByID('score');
}
function goBackHome(){
    hideElementByID('score');
    showElementByID('home');
}
