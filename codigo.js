//RANDOM NUMBER GENERATE
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

function startGame(){
    let userNumber =
    parseInt(document.getElementById("userInput"    ).value);
    let resultDisplay = document.getElementById("display");

// CORRECT GUESS

if (randomNumber === userNumber) {
    resultDisplay.innerHTML =
    'Felicitaciones, acertaste el numero!';
    resultDisplay.style.backgroundColor = "green";

}
//GUESSED NUMBER IS LESS

else if (randomNumber < userNumber) {
    resultDisplay.innerHTML =
    `El numero es menor que ${userNumber}`;
    resultDisplay.style.backgroundColor = "red";

}

//GUESSED NUMBER IS GREATER

else if (randomNumber > userNumber) {
    resultDisplay.innerHTML =
    `El numero es mayor que ${userNumber}`  ;
    resultDisplay.style.backgroundColor = "red";
}

}

function reset() {
    window.location.reload();   
}