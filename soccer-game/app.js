var targetNum, p1score, p2score
var target = document.getElementById("targetNum")
var winnerContainer = document.getElementById("winner")
var btn1 = document.getElementById("score-1")
var btn2 = document.getElementById("score-2")
var scoreBoardP1 = document.getElementById("p1score")
var scoreBoardP2 = document.getElementById("p2score")
var scoreContainer = document.getElementById("score-container")

function start(){
    targetNum = +target.value;
    if (!targetNum && targetNum < 1){
        alert("Please enter positive num");
        return;
        
    }
}
function score1(){
    var winner = document.getElementById("winner")
    if (target  === "p1score"){
        p1score = Number(scoreBoardP1.innerText);
        p1score++;
        scoreBoardP1.innerText = p1score;
        if (p1score === targetNum){
            btn1.setAttribute("disabled", "true")
            btn2.setAttribute("disabled", "true")
            winner.innerText = "Player 1 won"
        }
    }  else (target  === "p1score"){
        p2score = Number(scoreBoardP2.innerText);
        p2score++;
        scoreBoardP1.innerText = p2score;
        if (p2score === targetNum){
            btn1.setAttribute("disabled", "true")
            btn2.setAttribute("disabled", "true")
            winner.innerText = "Player 1 won"
        }
    }

}