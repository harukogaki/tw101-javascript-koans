"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here
function changeElementText(element, answer) {
    $(element).text(answer);
}

//Formats the output for a single line... updates html
//creates an object containing the words themselves
//and whether they should be reversed or not
//returns said object
function processLineOfText(numLine, element, lineOfText, linesToBeReversed){
    var line_output = "";
    var line = {};
    line.text = [];
    line.isReversed = (linesToBeReversed[numLine]);
    for (var i = 0; i < lineOfText.length; i++){
        line_output += (lineOfText[i] + " ");
        line.text.push(lineOfText[i] );
    }
    changeElementText(element, line_output);

    return line;
}

function fixUrduText(text, linesToBeReversed){
    var advertisement = [];    //structure for storing advertisement info
    advertisement.wordCount = 0;


    var line = processLineOfText(1, "#firstLine", text[0], linesToBeReversed);
    advertisement.push(line);
    advertisement.wordCount += (line.text.length);

    line = processLineOfText(2, "#secondLine", text[1], linesToBeReversed);
    advertisement.push(line);
    advertisement.wordCount += (line.text.length);

    line = processLineOfText(3,"#thirdLine", text[2], linesToBeReversed);
    advertisement.push(line);
    advertisement.wordCount += (line.text.length);


    //reverse the second string
    var correctedText = "";

    //loop through every line of text
    for (var i = 0; i < advertisement.length; i++){

        var currLine = advertisement[i].text;

        //determine if line should be reversed or not
        if (linesToBeReversed[i+1]){
            for (var j = (currLine.length - 1); j >= 0; j--){
                correctedText += (currLine[j] + " ");
            }
        }
        else{
            for (var j = 0; j < currLine.length; j++){
                correctedText += (currLine[j] + " ");
            }
        }
    }

    changeElementText("#correctedLineOfText", correctedText);
    changeElementText("#numberOfWords", advertisement.wordCount);
    console.log(advertisement);
}