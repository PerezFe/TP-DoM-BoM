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
        console.log(nombreIngresado)

        let edadIngresada = document.getElementById("edad").value
        let dniIngresado = document.getElementById("dni").value
        let sexoIngresado = document.getElementById("sexo").value
        let pesoIngresado = document.getElementById("peso").value
        let alturaIngresada = document.getElementById("altura").value
        let fechaNacIngresada = document.getElementById("anioNac").value

        nuevaPersona = new Persona(nombreIngresado,edadIngresada,dniIngresado,sexoIngresado,pesoIngresado,alturaIngresada,fechaNacIngresada)
        // get mostrarNombre(){
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
        // mostrarGeneracion(){
        //     switch (true){
        //         case (this.fechaNac>=1994 && this.fechaNac <= 2010):
        //             document.write("Pertences a la generacion: Z<br>Rasgo Caracteristico: Irreverencia")
        //         break;
        //         case (this.fechaNac>=1981 && this.fechaNac <= 1993):
        //             document.write("Pertences a la generacion: Y Milenials<br>Rasgo Caracteristico: Frustracion")
        //         break;
        //         case (this.fechaNac>=1969 && this.fechaNac <= 1980):
        //             document.write("Pertences a la generacion: X<br>Rasgo Caracteristico: Obsesión por el éxito")
        //         break;
        //         case (this.fechaNac>=1949 && this.fechaNac <= 1968):
        //             document.write("Pertences a la generacion: Baby Boom<br>Rasgo Caracteristico: Ambición")
        //         break;
        //         case (this.fechaNac>=1930 && this.fechaNac <= 1948):
        //             document.write("Pertences a la generacion: Silent Generation (Los niños de la posguerra)<br>Rasgo Caracteristico: Austeridad")
        //         break;
        //         default:
        //             document.write("Sin generacion")
        //     }
        // }
        // esMayorDeEdad(){
        //     if (this.edad > 18){
        //         document.write(`Eres mayor de edad`)
        //     }
        // }
        // mostrarDatos(){
        //     document.write(`Nombre: ${this.mostrarNombre}<br>Edad: ${this.mostrarEdad}<br> DNI: ${this.mostrarDni}<br>Sexo: ${this.mostrarSexo}<br>Peso: ${this.mostrarPeso}<br>Altura: ${this.mostrarAltura}<br>Año de Nacimiento: ${this.mostrarFechaNac}`)
        // }
        // generaDNI(){
        //     let length = 8;
        //     let resultado =  parseInt((Math.random() * 9 + 1) * Math.pow(10,length-1), 10)
        //     document.write(resultado) 
        // }
        agregar();
}

function agregar(){
    baseDatos.push(nuevaPersona)
    console.log(baseDatos)
    document.getElementById("tabla").innerHTML += `<tbody><td>${nuevaPersona.nombre}</td><td>${nuevaPersona.edad}</td><td>${nuevaPersona.dni}</td><td>${nuevaPersona.sexo}</td><td>${nuevaPersona.peso}</td><td>${nuevaPersona.altura}</td><td>${nuevaPersona.fechaNac}</td></tbody>`
}
