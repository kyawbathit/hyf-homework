const btn = document.querySelector('button');
const input = document.getElementById('input');
const para = document.getElementById('para');
btn.addEventListener('click', countSeconds);

let second = 0;
let clicked = false;
function countSeconds (e) {
    e.preventDefault();
    second = document.getElementById("input").value;
    if (second === "") {
        para.innerHTML = 'Insert time first!';
    } else {
        clicked = true;
    }
    countKeyPress (e); 
    setTimer(second);
} 

function setTimer(second) {
    setInterval(() => {
      second--;
      if (second > 0) {
        para.innerHTML = second; 
      } else if(second === 0){
        para.innerHTML = "Time's up! Restart"; 
        btn.innerText = 'Restart game';
       }
    }, 1000);
  };

const scoreL = document.getElementById("score-l");
const scoreS = document.getElementById("score-s");
document.addEventListener("keypress", countKeyPress);

function countKeyPress (e) {
    const keyValue = e.key;
       if (clicked && keyValue === "l") {
      countL = parseInt(scoreL.textContent || 0);
      scoreL.textContent = countL + 1;
    } else if (clicked && keyValue === "s") {
      countS = parseInt(scoreS.textContent || 0);
      scoreS.textContent = countS + 1;
    }
    return;
}

const winnerL = document.getElementById("win-l");
const winnerS = document.getElementById("win-s");
const getResult = ()  => {
    if (scoreS.innerHTML === "" && scoreL.innerHTML === "" && second === "") {
      winnerL.textContent = "";
      winnerS.textContent = "";
    } else if (scoreS.innerHTML === "" && scoreL.innerHTML === "") {
      scoreL.textContent = "Press the 'l' key";
      scoreS.textContent = "Press the 's' key";
    } else if (scoreS.innerHTML > scoreL.innerHTML) {
      winnerS.textContent = "You won!";
    } else if (scoreS.innerHTML < scoreL.innerHTML) {
      winnerL.textContent = "You won!";
    } else if (scoreS.innerHTML === scoreL.innerHTML) {
      winnerL.textContent = "It is draw";
      winnerS.textContent = "It is draw";
    }
    
};

const timeout = () => setTimeout(getResult, second * 1000)
btn.addEventListener("click", timeout);



