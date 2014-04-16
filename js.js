$(document).ready(function(){
    
    var cvs = document.getElementById('cvs');
    c = cvs.getContext("2d");
    
    function load1(){
        var color1 = c.createLinearGradient(0, 0, 400, 500);
        color1.addColorStop(0, "ffac00");
        color1.addColorStop(1, "ff7000");
        c.strokeStyle = "#ff7000";
        c.beginPath();
        c.arc(75, 75, 35, 0, Math.PI*2);
        c.stroke();
    }
    
    load1();
    
});