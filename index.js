let userChoice;
let computerChoice;
let isWinner = false;

userChoice = prompt('Введите: "камень", "ножницы" или "бумага"');
console.log("Ты выбрал: ", userChoice);

let randomNum = Math.floor(Math.random() * 3);
console.log(randomNum);

if (randomNum === 0) {
    computerChoice = "камень"
} else if (randomNum === 1) {
    computerChoice = "ножницы"
} else {
    computerChoice = "бумага"
}

console.log(computerChoice);


if (userChoice === computerChoice) {
    alert("Ничья! Играем дальше")
} else if (userChoice === "камень" && computerChoice === "ножницы" ||
            userChoice === "ножницы" && computerChoice === "бумага" ||
            userChoice === "бумага" && computerChoice === "камень") {
    isWinner = true;
    alert("Ты победил!")

} else {
    alert("Компьютер выиграл")
}

// if (userChoice === "камень" && computerChoice === "ножницы" ||
//     userChoice === "ножницы" && computerChoice === "бумага" ||
//     userChoice === "бумага" && computerChoice === "камень") {
//     isWinner = true;
// } else {console.log()}