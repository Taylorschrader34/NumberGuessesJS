let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  var diffUser = Math.abs(secretNumber - userGuess);
  var diffComp = Math.abs(secretNumber - computerGuess);

  if(diffUser <= diffComp){
    return true;
  }else{
    return false;
  }
};

const updateScore = (winner) =>{
  if(winner === 'human'){
    humanScore += 1;
  }else{
    computerScore += 1;
  }
};

const advanceRound = () =>{
  currentRoundNumber +=1;
};

