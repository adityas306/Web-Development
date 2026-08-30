let favMovie = "Avtaar";
let guess = prompt("guess my favoirite movie");
while((guess != favMovie) && guess != "quit"){
    guess = prompt("Wrong Guess Please Try again");
}
if(guess == favMovie) {
    console.log("Congrats!!");
}