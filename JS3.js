var input = prompt("Please enter a positive number: ");

HeeHaw(input);

function HeeHaw() {
    if (isNaN(input) || input < 0) {
        console.log("invalid entry.")
    }
    for (i = 0; i <= input; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Hee Haw!");
        } else if (i % 3 == 0) {
            console.log("Hee!");
        } else if (i % 5 == 0) {
            console.log("Haw!");
        } else {
            console.log(i);
        }

    }
}