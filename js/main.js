var gameId = document.getElementById('game');
gameId.style.display = "none";

var formId = document.getElementById('form');
var pseudoPlayerId =  document.getElementById("pseudoPlayer");

var score = 0;
var scorePC = 0;

function start(){
  formId.style.display = "none";
  gameId.style.display = "block";
  pseudoPlayerId.innerHTML = document.getElementById("pseudo").value;
}



function play(userRep) {
  console.log(userRep);

  document.getElementById("userChoice").innerHTML= userRep;

  var myArray = ["Pierre", "Feuille", "Ciseaux"];
  var computerChoice = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById("computerChoice").innerHTML= computerChoice;

  if (userRep === computerChoice) {   // equality

  }

  else if (userRep === "Pierre" && (computerChoice === "Ciseaux")) {  // user win
    win(1);
  } else if ((userRep === "Pierre") && (computerChoice === "Feuille")) { // user loose
    win(0);

  } else if ((userRep === "Feuille") && (computerChoice === "Pierre")) { // user win
    win(1);

  } else if ((userRep === "Feuille") && (computerChoice === "Ciseaux")) {  // user loose
    win(0);

  } else if ((userRep === "Ciseaux")&&(computerChoice === "Feuille")) { // user win
    win(1);

  } else if ((userRep === "Ciseaux") && (computerChoice === "Pierre")) { // user loose
    win(0);

  }

}


function win(idWinner){
  if (idWinner === 1) { // user win
    score++;
    document.getElementById("userScore").innerHTML = score;
  } else if (idWinner === 0) { // pc win
    scorePC++;
    document.getElementById("ordinateurPoint").innerHTML = scorePC;

  } else {
    alert("la fonction win peut prendre que 0 ou 1");
  }
  if (score === 3) {
    alert("Bravo, tu as gagné!");
    restart();
  }else if (scorePC === 3) {
    alert("Désolez tu n'as pas le niveau!!");
    restart();

  }

}

function restart() {
  score = 0;
  scorePC = 0;
  gameId.style.display = "none";
  formId.style.display = "block";
}
