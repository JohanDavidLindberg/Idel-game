var pengar = 0;
var pps = 0;
var klickpeng = 1;

let första = 0;
let förstakost = 10;




function köpaförsta() {
    if(pengar >= förstakost) {
        första++
        pengar -= förstakost
        förstakost += förstakost *1.05
        
    }
    förstakost = Math.round(förstakost * 10)/10;
    document.getElementById("förstaantal").textContent = första;
    document.getElementById("förstakost").textContent = "Kostand: " + förstakost;
}


setInterval(function(){ 
    pps = 0;
    klickpeng = 1;
    klickpeng += första * 0.1;


    pps += första;
    
    
    
    
    
    pengar += pps/10
    klickpeng = Math.round(klickpeng * 10)/10;
    pengar = Math.round(pengar * 10)/10;
    document.getElementById("antalpengar").textContent = pengar;
    document.getElementById("pps").textContent = pps + " pps";

}, 100);

function kakklick() {
    pengar += klickpeng;

    pengar = Math.round(pengar * 10)/10;

    document.getElementById("antalpengar").textContent = pengar;
    console.log(pengar)
}


