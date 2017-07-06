
$(document).ready(function() {
    // Problem 1
    kiteGame(100);

    // Problem 2
    isTrafficJam(30, false);

    // Problem 3
    fareForRide(6, 8, false);
    
    // Problem 4
    countMoneyInIndianNotes([10, 20, 100]);

    // Problem 5
    var text = [];
    text.push(["zara", "dhyaan", "dein"]);
    text.push(["mazarat", "chahenge"]);
    text.push(["attention", "please"]);
    linesToBeReversed = {};
    linesToBeReversed[2] = true;

    fixUrduText(text, linesToBeReversed);

});
