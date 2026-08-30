let color = prompt("Enter Color:");
switch(color){
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("SLOW DOWN");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Broken Light");
}