
class ListaTarea {
    constructor(tareas) {
      this.tareas = tareas;
    }
  }
  
  class tareaRealizar {
    agregarTarea(listado) {
      let listadoTareas = document.querySelector("#listaDeTareas");
      let elementos = document.createElement(`div`);
      let index = lista.length - 1
      elementos.setAttribute(`id`, `cardID${index}`)
      elementos.innerHTML = 
         `<section class="card d-flex w-50 my-3" id="borrar">
              <div class="card-body">
                 <p>
                 Tarea: ${listado.tareas}
                 </p>
                  <button class="btn btn-dark" onclick="borrar(${index})">Finalizada</button>
              </div>
         </section>;`
      listadoTareas.appendChild(elementos);
      this.resetearForm();
      
    }
  
    resetearForm() {
      document.querySelector("#formulario").reset();
    }
  
    borrarTarea() {}
  }
  
  let lista = [];
  console.log(lista)
  
  let formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", agregarTarea);
  
  function agregarTarea(e) {
    e.preventDefault();
    let listado = document.querySelector("#tarea").value;
    lista.push(listado);
  
    let listasTareas = new ListaTarea(listado);
  
    let NuevaTarea = new tareaRealizar();
  
    NuevaTarea.agregarTarea(listasTareas);
  }
  
  let eliminar = document.querySelector("#listaDeTareas")
  eliminar.addEventListener("clilk", borrar);
  
  function borrar(index) {
    // console.log("desde borrar")
    let card = document.getElementById(`cardID${index}`)
    
    document.getElementById("listaDeTareas").removeChild(card)
    
  }


  
