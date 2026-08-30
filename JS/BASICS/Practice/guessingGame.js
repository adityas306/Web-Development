const max = prompt("Enter Maximum Number : ");
const random = Math.floor(Math.random() * max) + 1;
let  guess = prompt("Guess the Number : ");
while(true) {
    if(guess == 'quit') {
        console.log("Quiting the Game");
        break;
    }
    if(random == guess) {
        console.log("Correct guess");
    } else {
       guess = prompt("your guess was wrong. please try again");
    }
}