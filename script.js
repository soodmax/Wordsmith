function scan() {
    var chosenWordInput = document.getElementById("chosenWord");
    var wordToScanInput = document.getElementById("wordChallenge");
    var charsCountInput = document.getElementById("charsCount");
    var historyListSelect = document.getElementById("historyList");

    var chosenWord = chosenWordInput.value.toLowerCase();
    var wordToScan = wordToScanInput.value.toLowerCase();

    console.log(chosenWord);
    console.log(wordToScan);

    var alpha;
    var counter = 0;

    for (var i = 0; i < wordToScan.length; i++) {
        console.log(wordToScan.charAt(i));

        if (chosenWord.includes(wordToScan.charAt(i)))
        {
            // alpha.push(wordToScan.charAt(i));
            counter++;
        }
    }
    charsCountInput.value = counter;
    historyListSelect.options.add(new Option(chosenWord + " >> " + wordToScan + " >> " + counter, counter), historyListSelect.options[0]);
}

function reset() {
    var wordToScanInput = document.getElementById("wordChallenge");
    var charsCountInput = document.getElementById("charsCount");
    var charsFoundInput = document.getElementById("charsCount");

    wordToScanInput.value = "";
    charsCountInput.value = "";
    charsFoundInput.value = "";

    wordToScanInput.focus();
}