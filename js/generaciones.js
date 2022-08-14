let baseDatos = [];

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
        // get nombreIngresado(){
        //     return this.nombre;
        // }
        // get mostrarEdad(){
        //     return this.edad;
        // }
        // get mostrarDni(){
        //     return this.dni;
        // }
        // get mostrarSexo(){
        //     return this.sexo;
        // }
        // get mostrarPeso(){
        //     return this.peso;
        // }
        // get mostrarAltura(){
        //     return this.altura;
        // }
        // get mostrarFechaNac(){
        //     return this.fechaNac;
        // }
        
        // }
        // esMayorDeEdad(){
        //     if (this.edad > 18){
        //         document.write(`Eres mayor de edad`)
        //     }
        // }
      
        
        agregar(e);
        // mostrarDatos();
        // mostrarGeneracion();
}

function agregar(e){
    e.preventDefault()
    baseDatos.push(nuevaPersona)
    console.log(baseDatos)
    document.getElementById("tabla").innerHTML += `<tbody><td>Nombre: ${nuevaPersona.nombre}</td><td>Edad: ${nuevaPersona.edad}</td><td>DNI: ${nuevaPersona.dni}</td><td>Sexo: ${nuevaPersona.sexo}</td><td>Peso: ${nuevaPersona.peso}</td><td>Altura: ${nuevaPersona.altura}</td><td>Fecha de Nacimiento: ${nuevaPersona.fechaNac}</td></tbody>`
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

// function mostrarGeneracion(){
    
//             switch (true){
//                 case (this.fechaNacIngresada>=1994 && this.fechaNacIngresada <= 2010):
//                     document.write("Pertences a la generacion: Z<br>Rasgo Caracteristico: Irreverencia")
//                 break;
//                 case (this.fechaNacIngresada>=1981 && this.fechaNacIngresada <= 1993):
//                     document.write("Pertences a la generacion: Y Milenials<br>Rasgo Caracteristico: Frustracion")
//                 break;
//                 case (this.fechaNacIngresada>=1969 && this.fechaNacIngresada <= 1980):
//                     document.write("Pertences a la generacion: X<br>Rasgo Caracteristico: Obsesión por el éxito")
//                 break;
//                 case (this.fechaNacIngresada>=1949 && this.fechaNacIngresada <= 1968):
//                     document.write("Pertences a la generacion: Baby Boom<br>Rasgo Caracteristico: Ambición")
//                 break;
//                 case (this.fechaNacIngresada>=1930 && this.fechaNacIngresada <= 1948):
//                     document.write("Pertences a la generacion: Silent Generation (Los niños de la posguerra)<br>Rasgo Caracteristico: Austeridad")
//                 break;
//                 default:
//                     document.write("Sin generacion")
//             }

// }

