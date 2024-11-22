const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
   if (e.key === 'Enter') {
      agregarTarea();
   }
});

function agregarTarea() {
   if (input.value.trim()) {

      const tareaNueva = document.createElement('div');
      tareaNueva.classList.add('tarea');

      const texto = document.createElement('p');
      texto.innerText = input.value;
      tareaNueva.appendChild(texto);

      const iconos = document.createElement('div');
      iconos.classList.add('iconos');

      const completar = document.createElement('i');
      completar.classList.add('icono-completar');
      completar.addEventListener('click', completarTarea);

      const eliminar = document.createElement('i');
      eliminar.classList.add('icono-eliminar');
      eliminar.addEventListener('click', eliminarTarea);

      iconos.append(completar, eliminar);
      tareaNueva.appendChild(iconos);

      listaDeTareas.appendChild(tareaNueva);

      input.value = '';
   } else {
      alert('Por favor ingresa una tarea.');
   }
}

function completarTarea(e) {
   const tarea = e.target.closest('.tarea');
   tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
   const tarea = e.target.closest('.tarea');
   tarea.remove();
}
