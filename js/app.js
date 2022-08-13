let numeroAdivinar = 0;
let formulario = document.querySelector(`#formulario`)


formulario.addEventListener(`submit`, adivinar)

function comenzarJuego(){
    Math.floor(Math.random()*(6-1 +1) + 1)
    console.log(numeroAdivinar)
}

function adivinar(e){
    e.prevenDefault();
    console.log("desde la funcion submit")

    let numeroIngresado = document.querySelector("#inputAdivinar").value
    if(numeroIngresado === numeroAdivinar){
        alert(`Adivinaste`)
    }else if (aleatorio < valor){
        alert("¡Fallaste! Tu número " +valor+ " es mayor al número mágico ")
    }
    else{
        alert("¡Fallaste! Tu número " +valor+ " es menor al número mágico ")
    }

}
