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
    formato = "AM"
}else{
    formato = "PM"
}
parrafoHora.innerHTML = `${horas} : ${fechaActual.getMinutes()} : ${segundos} ${formato}`
}

setInterval(obtenerHora, 1000)

function cambiarRosa(){
    let color = document.getElementById(`btnRosa`)
    console.log(`desde cambiar rosa`)
    console.log(`btnRosa`)
    // if (color.getAttribute(`fondoRosa`)==""){
    //     color.setAttribute(`class`, "ocultarDatos")
    // }else{
    //     color.setAttribute(`class`, "")
    // }
  }

  function cambiarRosa(){
    let datos = document.getElementById(`btnRosa`)
    if (datos.getAttribute(`fondoAzul`)=="fondoAzul"){
      datos.setAttribute(`class`, "ocultarDatos")
    }else{
      datos.setAttribute(`class`, "")
    }
  }