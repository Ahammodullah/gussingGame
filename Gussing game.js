//Gussing game//

var numofWon=0;
var numofLost=0;


for (var i = 1; i <= 5; i++) {

  var gussNumber= parseInt(prompt("Enter a number form 1 to 5:"));
  var randomNumber = Math.floor(Math.random() *5) + 1;

  if (gussNumber == randomNumber) {
    console.log("You have won");

    numofWon++;

  } else {
    console.log("You have lost. Random number was" + randomNumber);

    numofLost++;
  }
}
document.write("Total Number of Won =" +numofWon + "<br>");
document.write("Total Number of Lost=" +numofLost + "<br>");
