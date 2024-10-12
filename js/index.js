// Toggle navigation menu for mobile
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('header nav ul');
  const logo = document.querySelector('header .logo');

  logo.addEventListener('click', () => {
      nav.classList.toggle('show');
  });
});

// Form validation and submission
const form = document.querySelector('#contacto form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar el envío por defecto del formulario

  // Obtener los valores del formulario
  const nombre = document.querySelector('#nombre').value.trim();
  const email = document.querySelector('#email').value.trim();
  const mensaje = document.querySelector('#mensaje').value.trim();

  // Validar los campos
  if (nombre === "" || email === "" || mensaje === "") {
      alert('Por favor, rellena todos los campos.');
      return;
  }

  if (!validarEmail(email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
  }

  // Simular el envío del formulario
  alert('Formulario enviado con éxito. ¡Gracias por contactarme!');
  form.reset(); // Limpiar el formulario después de enviar
});

// Función para validar el correo electrónico
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}




