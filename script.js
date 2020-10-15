function scan() {
    var chosenWordInput = document.getElementById("chosenWord");
    var wordToScanInput = document.getElementById("wordChallenge");
    var charsCountInput = document.getElementById("charsCount");
    var charsFoundInput = document.getElementById("charsFound");
    var historyListSelect = document.getElementById("historyList");

    var chosenWord = chosenWordInput.value.toLowerCase();
    var wordToScan = wordToScanInput.value.toLowerCase();

    var alpha = [];
    var counter = 0;

    for (var i = 0; i < wordToScan.length; i++) {

        if (chosenWord.includes(wordToScan.charAt(i)))
        {
            alpha.push(wordToScan.charAt(i));
            counter++;
        }
    }
    
    var alphaUnique = alpha.filter(function(item, pos){
        return alpha.indexOf(item)== pos; 
      });

    charsCountInput.value = alphaUnique.length;
    charsFoundInput.value = alphaUnique;

    historyListSelect.options.add(new Option(chosenWord + " >> " + wordToScan + " >> " + alphaUnique.length, alphaUnique.length), historyListSelect.options[0]);
}

function reset() {
    var wordToScanInput = document.getElementById("wordChallenge");
    var charsCountInput = document.getElementById("charsCount");
    var charsFoundInput = document.getElementById("charsFound");

    wordToScanInput.value = "";
    charsCountInput.value = "";
    charsFoundInput.value = "";

    wordToScanInput.focus();
}