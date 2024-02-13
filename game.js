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
    const displayLetter = document.getElementById('letter-display');
    console.log(displayLetter.innerText)
    displayLetter.innerText
}

function play(){
    hideElementByID('home');
    showElementByID('play-ground');
    continueGame()
}
