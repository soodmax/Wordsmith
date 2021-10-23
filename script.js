"use strict";

const wordToScanInput = document.getElementById("wordChallenge");
const charsCountInput = document.getElementById("charsCount");
const charsFoundInput = document.getElementById("charsFound");
const chosenWordInput = document.getElementById("chosenWord");
const historyList = document.getElementById("history");

function challenge() {
    
    const chosenWord = chosenWordInput.value.toLowerCase();
    const wordToScan = wordToScanInput.value.toLowerCase();
    
    if (!chosenWord)
    {
        alert('Need a word to scan, chief!');
        chosenWordInput.focus();
        return;
    }

    if (!wordToScan)
    {
        alert('Need a word to challenge with, chief!');
        wordToScanInput.focus();
        return;
    }

    const alpha = [];
    let counter = 0;

    for (let i = 0; i < wordToScan.length; i++) {

        if (chosenWord.includes(wordToScan.charAt(i)))
        {
            alpha.push(wordToScan.charAt(i));
            counter++;
        }
    }
    
    const alphaUnique = alpha.filter(function(item, pos){
        return alpha.indexOf(item)== pos; 
      });

    charsCountInput.value = alphaUnique.length;
    charsFoundInput.value = alphaUnique;

    historyList.innerHTML = chosenWord + " >> " + wordToScan + " >> " + alphaUnique.length + "<br>" + historyList.innerHTML;
}

function retry() {
 
    wordToScanInput.value = "";
    charsCountInput.value = "";
    charsFoundInput.value = "";

    wordToScanInput.focus();
}