// Set date 
var countdownDate = new Date("Oct 26, 2024 20:53:00").getTime();

// Update count per second
var x = setInterval(function(){

    //Current date and time
    var now = new Date().getTime();

    //Calculate distance between current and countdown date
    var distance = countdownDate - now;

    //Calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 *60)) /(1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Result display
    document.getElementById("timer").innerHTML = days + "Days" + hours + "hours" + minutes + "minutes" + seconds + "seconds";

    //If countdown finishes display some text 
    if (distance < 0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TIME IS UP"
    }

}, 1000)