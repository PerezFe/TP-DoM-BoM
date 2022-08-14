//variables
const tabla = document.querySelector(`#arregloPersonas`);
const contenedorPersonas = document.querySelector(`#lista-personas tbody`)
const mostrarPersonasBtn = document.querySelectorAll(`#mostrar-datos`)

cargarEventListener()
function cargarEventListener(){
    contenedorPersonas.addEventListener(`click`, agregarPersona)
}

//funciones
function agregarPersona(e){
    console.log(e.target.classList)
}
