
function cargarTarea(e){
    e.preventDefault();
    function Tarea(nombre){
        this.nombre=nombre
    }
    let nombreCapturar = document.getElementById(`nombre`).value
    
    let tareaNueva = new Tarea(nombreCapturar);
    console.log(tareaNueva);
    agregar();
}
let lista = [];

function agregar(){
    lista.push(tareaNueva);
    document.getElementById("tabla").innerHTML += `<tbody><td>Nombre: ${tareaNueva.nombre}</td></tbody>`
}