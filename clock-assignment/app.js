var second = 0;
var minute = 0;
var hour = 0;
var d = newDate();
setInterval(
    function(){
        d = newDate();
        second = d.getseconds() * 6;
        minute = d.getminutes();
        hour = d.gethours();
        document.getElementById("second-hand").style.transform = "rotate (" + second + "deg)";
    }, 1000
);