let baseDatos = [];

// nombreIngresado, edadIngresada, dniIngresado, sexoIngresado, pesoIngresado, alturaIngresada,fechaNacIngresada 

function crearPersona(){
   function Persona(nombre,edad,dni,sexo,peso,altura,fechaNac){
        
            this.nombre=nombre,
            this.edad=edad,
            this.dni=dni,
            this.sexo=sexo,
            this.peso=peso,
            this.altura=altura,
            this.fechaNac=fechaNac
        }
        
        let nombreIngresado = document.getElementById("nombre").value;
        let edadIngresada = document.getElementById("edad").value
        let dniIngresado = document.getElementById("dni").value
        let sexoIngresado = document.getElementById("sexo").value
        let pesoIngresado = document.getElementById("peso").value
        let alturaIngresada = document.getElementById("altura").value
        let fechaNacIngresada = document.getElementById("anioNac").value
        
        nuevaPersona = new Persona(nombreIngresado,edadIngresada,dniIngresado,sexoIngresado,pesoIngresado,alturaIngresada,fechaNacIngresada)
        agregar(nuevaPersona);
    
}

function agregar(nuevaPersona){
    // e.preventDefault()
    baseDatos.push(nuevaPersona)
    console.log(baseDatos)
    // document.getElementById("tabla").innerHTML += `<td>Nombre: ${nuevaPersona.nombre}</td><td>Edad: ${nuevaPersona.edad}</td><td>DNI: ${nuevaPersona.dni}</td><td>Sexo: ${nuevaPersona.sexo}</td><td>Peso: ${nuevaPersona.peso}</td><td>Altura: ${nuevaPersona.altura}</td><td>Fecha de Nacimiento: ${nuevaPersona.fechaNac}</td></>`
    createCard(nuevaPersona, baseDatos.length)
}

function mostrarDatos(){
    let x = document.getElementById(`mostrarDatos`)
    if(x.getElementsByClassName.display === "none"){
        x.style.display = "block"
        document.write(`Nombre: ${this.nombreIngresado}<br>Edad: ${this.edadIngresada}<br> DNI: ${this.dniIngresado}<br>Sexo: ${this.sexoIngresado}<br>Peso: ${this.pesoIngresado}<br>Altura: ${this.alturaIngresada}<br>Año de Nacimiento: ${this.fechaNacIngresada}`)
    }else{
        x.style.display = "none"
    }
}

function calcularGeneracion(fecha){

  let result = ""
    
                switch (true){
                case (fecha >=1994 && fecha <= 2010):
                    result = "Pertences a la generacion: Z<br>Rasgo Caracteristico: Irreverencia"
                break;
                case (fecha>=1981 && fecha <= 1993):
                    result = "Pertences a la generacion: Y Milenials<br>Rasgo Caracteristico: Frustracion"
                break;
                case (fecha>=1969 && fecha <= 1980):
                    result = "Pertences a la generacion: X<br>Rasgo Caracteristico: Obsesión por el éxito"
                break;
                case (fecha >=1949 && fecha <= 1968):
                    result = "Pertences a la generacion: Baby Boom<br>Rasgo Caracteristico: Ambición"
                break;
                case (fecha>=1930 && fecha <= 1948):
                    result = "Pertences a la generacion: Silent Generation (Los niños de la posguerra)<br>Rasgo Caracteristico: Austeridad"
                break;
                default:
                    result = "Sin generacion"
            }
            return result;

}

function createCard(nuevaPersona, index){
  console.log("desde create")
    let generacion = calcularGeneracion(nuevaPersona.fechaNac)
    let container = document.getElementById('cardContainer');
    let card = document.createElement('div');
    card.innerHTML = 
    `<div class="card w-75">
                            <div class="card-body ">
                              <h5 class="card-title bi bi-file-earmark-person">  Persona</h5>
                              <a href="#" id="mostrarDatos${index}" class="btn btn-primary" onclick="mostrarDatos(${index})">Mostrar Datos</a>
                              <button class="btn btn-primary m-2" id="mostrarGeneracion${index}" onclick="mostrarGeneracion(${index})">Mostrar Generacion</button>
                              <button class="btn btn-primary m-2" id="esMayor${index}" onclick="esMayorDeEdad(${nuevaPersona.edad})">Mayor de Edad</button>
                            </div>
                            <div class="ocultarDatos" id="datosPersona${index}">
                              <ul>
                                <li>Nombre: ${nuevaPersona.nombre}</li>
                                <li>Edad: ${nuevaPersona.edad}</li>
                                <li>DNI: ${nuevaPersona.dni}</li>
                                <li>Sexo: ${nuevaPersona.sexo}</li>
                                <li>Peso: ${nuevaPersona.peso}</li>
                                <li>Altura: ${nuevaPersona.altura}</li>
                                <li>Año de Nacimiento: ${nuevaPersona.fechaNac}</li>
                              </ul>
                            </div>
                            <p id="generacion${index}" class="ocultarDatos">${generacion}</p>
                        </div>`
  container.appendChild(card)

}

function mostrarDatos(index){
    let datos = document.getElementById(`datosPersona${index}`)
    if (datos.getAttribute(`class`)==""){
      datos.setAttribute(`class`, "ocultarDatos")
    }else{
      datos.setAttribute(`class`, "")
    }
}

function mostrarGeneracion(index){
  let datos = document.getElementById(`generacion${index}`)
  if (datos.getAttribute(`class`)==""){
    datos.setAttribute(`class`, "ocultarDatos")
  }else{
    datos.setAttribute(`class`, "")
  }
}

function esMayorDeEdad(edad){
      if (edad >= 18){
          alert(`Eres mayor de edad`)
      }else{
        alert("Eres menor de edad")
      }
  }

