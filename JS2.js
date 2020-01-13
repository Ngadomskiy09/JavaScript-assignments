for (count = 1; count < 101; count++) {
    if (count % 3 == 0 && count % 5 ==0) {
        console.log("Hee Haw!");
    } else if (count % 3 == 0) {
        console.log("Hee!");
    } else if (count % 5 == 0) {
        console.log("Haw!");
    } else {
        console.log(count);
    }
}