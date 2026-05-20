let userChoice;
let computerChoice;
let isWinner = false;

while(isWinner === false) {


    userChoice = prompt('Введите: "камень", "ножницы" или "бумага"').toLowerCase();
    console.log("Ты выбрал: ", userChoice);

    let randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    alert("Твой выбор: " + userChoice);

    if (randomNum === 0) {
        computerChoice = "камень"
    } else if (randomNum === 1) {
        computerChoice = "ножницы"
    } else {
        computerChoice = "бумага"
    }

    console.log(computerChoice);

    if (userChoice === "камень" || userChoice === "ножницы" || userChoice === "бумага") {
        alert("Компьютер выбрал: " + computerChoice);

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

    } else {

        alert("Введите корректное значение: камень, ножницы или бумага");
    }
}