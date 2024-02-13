// function play(){
    
//     const homeSec = document.getElementById('home');
//     homeSec.classList.add('hidden')
//     const playSec = document.getElementById('');
//     playSec.classList.remove('hidden')
//     console.log(homeSec)
// }

function  continueGame(){
    // step-1: Generate Random alphabet
    const alphabet =getRandomAlphabet();
    console.log(alphabet);
    // step-2: display the letter in HTML inner text
    const displayLetter = document.getElementById('letter-display');
    console.log(displayLetter.innerText);
    displayLetter.innerText = alphabet;

    // hilight the key on keyboard
    setBgColorByID(alphabet);
    
}

function play(){
    hideElementByID('home');
    showElementByID('play-ground');
    continueGame();
}
