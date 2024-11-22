// script.js

// Selección de elementos en el DOM
const button = document.getElementById('generateColor');
const colorCode = document.getElementById('colorCode');

// Verifica que los elementos existen antes de trabajar con ellos
if (button && colorCode) {
  // Agregar un evento de clic al botón
  button.addEventListener('click', () => {
    const randomColor = generateRandomHex(); // Generar un color hexadecimal aleatorio
    applyColor(randomColor); // Aplicar el color a la página
  });
} else {
  console.error('Error: No se encontraron los elementos necesarios en el HTML.');
}

// Función para generar un color hexadecimal aleatorio
function generateRandomHex() {
  const hexChars = '0123456789ABCDEF'; // Posibles caracteres para un color HEX
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Función para aplicar el color al fondo y al texto
function applyColor(color) {
  // Cambiar el fondo del body
  document.body.style.backgroundColor = color;

  // Actualizar el texto y el fondo del contenedor del código de color
  colorCode.textContent = color;
  colorCode.style.backgroundColor = color;

  // Asegurar que el texto sea visible dependiendo del color
  const textColor = isDarkColor(color) ? '#FFFFFF' : '#000000';
  colorCode.style.color = textColor;
}

// Función para determinar si un color es oscuro o claro
function isDarkColor(hex) {
  // Convertir el color hexadecimal a valores RGB
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  // Calcular la luminancia aproximada
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Un color es considerado oscuro si la luminancia es menor a 128
  return luminance < 128;
}