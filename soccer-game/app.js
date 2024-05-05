var minute = 5;
var second = 60;

setInterval(function time(){
    if(minute == 0 && second == 1){
        document.getElementById("counter").innerHTML = "00:00"
    }else{
        second--;
        if(second == 0){
            minute--;
            second = 60;
            if(minute == 0){
                minute = minute;
            }
        }
        document.getElementById("counter").innerHTML = minute + ":" + second;
    }
},1000)
function score(){
    var scoreBoard = document.getElementById("p1score");
    p1score = Number(scoreBoard.innerText);
    p1score++
    console.log(p1score);
    scoreBoard.innerText = p1score;
}
function score2(){
    var scoreBoard = document.getElementById("p2score");
    p2score = Number(scoreBoard.innerText);
    p2score++
    console.log(p2score);
    scoreBoard.innerText = p2score;
}