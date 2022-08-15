const pararReloj = document.getElementById("pararReloj")



let pararMirar;
let minutosIntroducidos =  0 
let segundosIntroducidos = 0
let runing = false;


const pause = () => {
    clearInterval(pararMirar);
}

const stop = () => {
    minutosIntroducidos = 0
    segundosIntroducidos = 0
    clearInterval(pararMirar)
    document.getElementById("tiempoRestante").innerHTML = "00:00"
    runing = false;
}

const start = () => {
    if(!runing){
        inicializarDatos()
    }
    runing = true;
    console.log(minutosIntroducidos)
    pararMirar = setInterval( () => {
        pararMirar.textContent = calculateTime()
    }, 1000 )
   
}

const calculateTime = ()  => {
    if (segundosIntroducidos <= 0){
        if(minutosIntroducidos > 0){
            minutosIntroducidos--
            segundosIntroducidos = 60
        }else{
            stop();
            return
        }
    }segundosIntroducidos--


    let mostrar_segundos = (segundosIntroducidos % 60).toString().padStart(2, "0");
    let mostrar_minutos = minutosIntroducidos.toString().padStart(2, "0");
    
    document.getElementById("tiempoRestante").innerHTML = `${mostrar_minutos}:${mostrar_segundos}`
    
}

function inicializarDatos(){
    minutosIntroducidos = parseInt(document.getElementById("minutos").value)
    segundosIntroducidos = parseInt(document.getElementById("segundos").value)
    if(isNaN(minutosIntroducidos)) minutosIntroducidos = 0
    if(isNaN(segundosIntroducidos)) segundosIntroducidos = 0
}