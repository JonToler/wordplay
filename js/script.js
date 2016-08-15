$(document).ready (function(){
  $("#sentence").submit(function(event){
    // debugger;
    var bigWords = [];
    var preScram = $("#scrambleMe").val().toLowerCase().replace(/[\.,?!"']/g,"").split(" ");
    preScram.forEach(function(scram) {
      if (scram.length >= 4) {
        bigWords.push(scram);
      }
    });
    var newSentence = bigWords.reverse().join(" ");
    var capCaseSent = newSentence.replace(/^[a-z]/, newSentence.charAt(0).toUpperCase());
    $("#scramOut").text(capCaseSent + ".");
    // alert(bigWords.reverse().join(" "));


    event.preventDefault();
  });


});
