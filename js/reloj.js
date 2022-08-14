function obtenerHora(){
    let fechaActual = new Date();


let diaSemanas = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


//  <p>Jueves 11 de agosto de 2022</p>

let parrafoFecha = document.querySelector(`#fecha`);

parrafoFecha.innerHTML = `${diaSemanas[fechaActual.getDay()]}, ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`


let parrafoHora = document.querySelector(`#hora`);

let segundos = fechaActual.getSeconds()
if(segundos < 10){
    segundos = `0`+segundos
}
let horas = fechaActual.getHours()
if (horas < 10){
    horas = `0` + horas
}
let formato = horas
if (formato < 12){
    formato = "PM"
}else{
    formato = "AM"
}
parrafoHora.innerHTML = `${horas} : ${fechaActual.getMinutes()} : ${segundos} ${formato}`
}

setInterval(obtenerHora, 1000)
