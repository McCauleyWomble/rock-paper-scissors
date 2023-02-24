var reruns = prompt("How many rounds do you want to play?");

while (isNaN(reruns)) {
    reruns = prompt("How many rounds do you want to play?");
}

var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["r", "p", "s"]

for (var i = 0; i < Number(reruns); i++) {
    var choice = prompt("Do you pick rock, paper or scissors (enter r, p, or s)?");
    while (choice != "r" && choice != "p" && choice != "s") {
        choice = prompt("Do you pick rock, paper or scissors (enter r, p, or s)?");
    }
    var index = parseInt((Math.random() * 3), 10);
    var computer = choices[index];

    if (choice == "r") {
        if (computer == "r") {
            ties++;
            alert("It's a tie");
        } else if (computer == "p") {
            losses++;
            alert("You lose! Computer picked " + computer + " which beats " + choice);
        } else if (computer == "s") {
            wins++;
            alert("You Win! You picked " + choice + " which beats " + computer);
        }
    } else if (choice == "p") {
        if (computer == "p") {
            ties++;
            alert("It's a tie");
        } else if (computer == "s") {
            losses++;
            alert("You lose! Computer picked " + computer + " which beats " + choice);
        } else if (computer == "r") {
            wins++;
            alert("You Win! You picked " + choice + " which beats " + computer);
        }
    } else if (choice == "s") {
        if (computer == "s") {
            ties++;
            alert("It's a tie");
        } else if (computer == "r") {
            losses++;
            alert("You lose! Computer picked " + computer + " which beats " + choice);
        } else if (computer == "p") {
            wins++;
            alert("You Win! You picked " + choice + " which beats " + computer);
        }
    }

}

alert("You won " + wins + " times, you tied " + ties + " times, you lost " + losses + " times")