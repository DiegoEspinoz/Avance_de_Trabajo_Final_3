// Seleccionar los botones.
const botonInicioPausa = document.querySelector('#boton-inicio-pausa');
const botonReiniciar = document.querySelector('#boton-reiniciar');

// Variables para almacenar los milisegundos, segundos, minutos y horas.
let [milisegundos, segundos, minutos, horas] = [0, 0, 0, 0];

// Variables para almacenar el intervalo de tiempo y el estado del cronómetro.
let intervaloDeTiempo;
let estadoCronometro = 'pausado'; // Dos estados posibles: 'pausado' o 'andando'.

// Actualizar el cronómetro.
function actualizarCronometro() {
  milisegundos += 10;
// El conteo de milisegundos
  if (milisegundos === 1000) {
    milisegundos = 0;
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++;

      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
    }
  }

  // Formatear las unidades de tiempo.
  const milisegundosConFormato = asignarFormato(milisegundos, true);
  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  // Actualizar el contenido del cronómetro.
  const cronometro = document.getElementById('cronometro');
  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}:${milisegundosConFormato}`;
}

// Agregar un cero a la izquierda si se necesita.
function asignarFormato(unidadDeTiempo, esMilisegundos = false) {
  if (esMilisegundos) {
    return unidadDeTiempo.toString().padStart(3, '0'); // Para milisegundos (tres dígitos).
  }
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

// Controlar el botón de inicio/pausa.
botonInicioPausa.addEventListener('click', function () {
  if (estadoCronometro === 'pausado') {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 10); // Actualiza cada 10 ms.
    document.getElementById('boton-inicio-pausa').innerHTML = `<i class="bi bi-pause" id="boton-inicio-pausa"></i>`;
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCronometro = 'andando';
  } else {
    window.clearInterval(intervaloDeTiempo);
    document.getElementById('boton-inicio-pausa').innerHTML = `<i class="bi bi-play-fill" id="boton-inicio-pausa"></i>`;
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
});

// Reiniciar el cronómetro.
botonReiniciar.addEventListener('click', function () {
  window.clearInterval(intervaloDeTiempo);

  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById('cronometro').innerHTML = '00:00:00:000';

  document.getElementById('boton-inicio-pausa').innerHTML = `<i class="bi bi-play-fill" id="inicio"></i>`;
  botonInicioPausa.classList.remove('pausar');
  botonInicioPausa.classList.add('iniciar');

  estadoCronometro = 'pausado';
});
