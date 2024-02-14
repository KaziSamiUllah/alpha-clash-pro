function hideElementByID(elemetnId){
    const element = document.getElementById(elemetnId);
    element.classList.add('hidden');
}
function showElementByID(elemetnId){
    const element = document.getElementById(elemetnId);
    element.classList.remove('hidden');
}

function setBgColorByID(elemetntId){
    const element = document.getElementById(elemetntId);
    element.classList.add('bg-orange-300', 'text-black', 'font-bold');
}

function getRandomAlphabet(){
    // create an alphabet string or array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // generate a random number from 0-25
    const index = Math.round(Math.random() *25);
    const alphabetByIndex = alphabets[index];
    return alphabetByIndex;
}
