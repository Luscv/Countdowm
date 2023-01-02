var countDownDate = new Date("Mar 07, 2023 00:00:00").getTime();

var countdown = setInterval(function(){

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calcular os dias, horas, minutos e segundos
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Resultado para cada elemento
    document.getElementById("dias").innerHTML = days
    document.getElementById("horas").innerHTML = hours
    document.getElementById("minutos").innerHTML = minutes
    document.getElementById("segundos").innerHTML = seconds 

}, 1000)