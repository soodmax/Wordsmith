function challenge() {
    var chosenWordInput = document.getElementById("chosenWord");
    var wordToScanInput = document.getElementById("wordChallenge");
    var charsCountInput = document.getElementById("charsCount");
    var charsFoundInput = document.getElementById("charsFound");
    var historyList = document.getElementById("history");

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

    historyList.innerHTML = chosenWord + " >> " + wordToScan + " >> " + alphaUnique.length + "<br>" + historyList.innerHTML;
    // historyListSelect.options.add(new Option(chosenWord + " >> " + wordToScan + " >> " + alphaUnique.length, alphaUnique.length), historyListSelect.options[0]);
}

function retry() {
    var wordToScanInput = document.getElementById("wordChallenge");
    var charsCountInput = document.getElementById("charsCount");
    var charsFoundInput = document.getElementById("charsFound");

    wordToScanInput.value = "";
    charsCountInput.value = "";
    charsFoundInput.value = "";

    wordToScanInput.focus();
}