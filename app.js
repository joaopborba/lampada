const lamp = document.getElementById("lamp");
const ligarlamp = document.getElementById("ligarlamp");
const desligarlamp = document.getElementById("desligarlamp");

function isLampBroken (){
    return lamp.src.indexOf("quebrada") > -1;
}

function lampOn () {
    if(!isLampBroken()){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if(!isLampBroken()){
        lamp.src = "./img/desligada.jpg";
    }
}

function doubleClick () {
    lamp.src = "./img/quebrada.jpg";
}


ligarlamp.addEventListener("click", lampOn);
desligarlamp.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", doubleClick);