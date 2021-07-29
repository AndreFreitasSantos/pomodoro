var minutes = 24;
var seconds = "00";

function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
    minutes -= 1;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    second = 1000;

    var minutes_interval = setInterval(minutesTimer, 60*second);
    var seconds_interval = setInterval(secondsTimer, second);

    function minutesTimer(){
        minutes -= 1
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer(){
        seconds -= 1
        document.getElementById("seconds").innerHTML = seconds
        if(seconds <= 0){
            if(minutes <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerText = "Session Completed!!! Take a break"
                document.getElementById("done").classList.add("show_message");
            }
            seconds = 60;
        }
    }

}