const pararReloj = document.getElementById("pararReloj")
const playPauseButton = document.getElementById("play-pause")
const segundosEsfera = document.getElementById("segundosEsfera")


let pararMirar;
let tiempoCorriendo = 0;

const playPause = () => {
    const estaPausado = !playPauseButton.classList.contains("runing");
    if(estaPausado){
        playPauseButton.classList.add("runing");
        start();
    }else{
        playPauseButton.classList.remove("runing");
        pause();
    }
}

const pause = () => {
    clearInterval(pararMirar);
}

const stop = () => {
    playPauseButton.classList.remove("runing")
    tiempoCorriendo = 0;
    clearInterval(pararMirar)
    pararReloj.textContent= "00:00"
}

const start = () => {
    let startTime = Date.now() - tiempoCorriendo;
    pararMirar = setInterval( () => {
        tiempoCorriendo = Date.now() - startTime;
        pararMirar.textContent = calculateTime(tiempoCorriendo)
    }, 1000 )
   
}

const calculateTime = tiempoCorriendo => {
    let total_segundos = Math.floor(tiempoCorriendo / 1000);
    let total_minutos = Math.floor(total_segundos / 60);

    

    let mostrar_segundos = (total_segundos % 60).toString().padStart(2, "0");
    let mostrar_minutos = total_minutos.toString().padStart(2, "0");
    
    document.getElementById("pararReloj").innerHTML = `${mostrar_minutos}:${mostrar_segundos}`
    
}



