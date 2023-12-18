let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector("score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    //Math.random() gives a number between 0 and 1
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(word) {
    console.log(word);
    if (word = 'rock') {return 'Rock';}
    if (word = 'paper') {return 'Paper';}
    if (word = 'scissors') {return 'Scissors';}
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const sub_user = "user".fontsize(3).sub();
    const sub_comp = "comp".fontsize(3).sub();
    result_p.innerHTML = (`${convertToWord(userChoice)}${sub_user} beats ${convertToWord(computerChoice)}${sub_comp}. You won!`)
    result_p.removeAttribute("class");
    result_p.classList.add('result-visible');
    result_p.classList.add('result-win');
    document.getElementById(userChoice).classList.add('choice-win');
    setTimeout(() => document.getElementById(userChoice).classList.remove('choice-win'), 200);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const sub_user = "user".fontsize(3).sub();
    const sub_comp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${sub_user} loses to ${convertToWord(computerChoice)}${sub_comp}. You lost...`;
    result_p.removeAttribute("class");
    result_p.classList.add('result-visible');
    result_p.classList.add('result-lose');
    document.getElementById(userChoice).classList.add('choice-lose');
    setTimeout(() => document.getElementById(userChoice).classList.remove('choice-lose'), 200);
}

function draw(userChoice, computerChoice) {
    const sub_user = "user".fontsize(3).sub();
    const sub_comp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${sub_user} equals ${convertToWord(computerChoice)}${sub_comp}. It's a Draw`;
    result_p.removeAttribute("class");
    result_p.classList.add('result-visible');
    result_p.classList.add('result-draw');
    document.getElementById(userChoice).classList.add('choice-draw');
    setTimeout(() => document.getElementById(userChoice).classList.remove('choice-draw'), 200);
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            console.log("User Wins!");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            console.log("Computer Wins!");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            console.log("It's a Draw!");
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}

main();
