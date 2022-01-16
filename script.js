'use strict';

document.addEventListener('DOMContentLoaded', initialize);

const chosenWordInput = document.getElementById('chosenWord');
const wordToScanInput = document.getElementById('wordChallenge');
const charsCountInput = document.getElementById('charsCount');
const charsFoundInput = document.getElementById('charsFound');

const historyList = document.getElementById('history');

let challengeCount = 0;

function initialize() {
  chosenWordInput.focus();
}

function captureEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault(); // Ensure it is only this code that runs

    challenge();
    e.target.select();
  }
}

function challenge() {
  const chosenWord = chosenWordInput.value.toLowerCase();
  const wordToScan = wordToScanInput.value.toLowerCase();

  if (!chosenWord) {
    alert('Need a word to scan, chief!');
    chosenWordInput.focus();
    return;
  }

  if (!wordToScan) {
    alert('Need a word to challenge with, chief!');
    wordToScanInput.focus();
    return;
  }

  const alpha = [];
  let counter = 0;

  for (let i = 0; i < wordToScan.length; i++) {
    if (chosenWord.includes(wordToScan.charAt(i))) {
      alpha.push(wordToScan.charAt(i));
      counter++;
    }
  }

  const alphaUnique = alpha.filter(function (item, pos) {
    return alpha.indexOf(item) == pos;
  });

  charsCountInput.value = alphaUnique.length;
  charsFoundInput.value = alphaUnique;
  challengeCount++;

  historyList.innerHTML =
    "Attempt " + ('0' + challengeCount).substring(('0' + challengeCount).length - 2) +
    ' : ' +
    chosenWord +
    ' >> ' +
    wordToScan +
    ' >> ' +
    alphaUnique.length +
    ' >> ' +
    alphaUnique +
    '<br>' +
    historyList.innerHTML;
}

function retry() {
  challengeCount = 0;

  chosenWordInput.value = '';
  wordToScanInput.value = '';
  charsCountInput.value = '';
  charsFoundInput.value = '';
  historyList.innerHTML = '';

  chosenWordInput.focus();
}
