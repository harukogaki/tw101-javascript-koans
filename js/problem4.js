"use strict";

/*
 Problem 4:

 Background:
 At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and
 Rs.1000.
 http://www.rbi.org.in/currency/faqs.html

 Problem statement:
 Write a program that will enable counting of money given in the form of Indian currency notes. The program must take
 a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number
 that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum
 counted so far.

 Examples:

 Given Rs 10, 20, 100 notes
 When I count the money
 Then my total is Rs 130

 Given Rs 20, 50, 10, 20, 13, 500 notes
 When I count the money
 Then my total is Rs 100

*/

// Write your JavaScript here
function changeElementText(element, answer) {
    $(element).text(answer);
}

function countMoneyInIndianNotes (notes){

    //Output Rs notes given to html
    var str = "";
    for (var i = 0; i < notes.length; i++){
        str += notes[i];

        //add a comma only if not the last note
        if (i != (notes.length - 1))
           str += ","

       str += " ";
    }
    changeElementText("#notesGiven", str);

    //Object containing valid RS Notes: the ones we should be counting
    var validNotes = {};
    validNotes[5] = true;
    validNotes[10] = true;
    validNotes[20] = true;
    validNotes[50] = true;
    validNotes[100] = true;
    validNotes[500] = true;
    validNotes[1000] = true;

    var total = 0;
    for (var i = 0; i < notes.length; i++){
        if (validNotes[notes[i]])
            total += notes[i];
        else
            break;
    }

    changeElementText("#totalRs", total)
}