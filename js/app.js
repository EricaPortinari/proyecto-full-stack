var nombre = document.getElementById('firstname');
var apellido = document.getElementById('lastname');
var telefono = document.getElementById('telephone');
var email = document.getElementById('email');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario() {
    console.log('Enviando formulario...');

    var mensajesError = [];

    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingrese su nombre');
    }

    if (apellido.value === null || apellido.value === '') {
        mensajesError.push('Ingrese su apellido');
    }

    if (telefono.value === null || telefono.value === '') {
        mensajesError.push('Ingrese su telefono');
    }

    if (email.value === null || email.value === '') {
        mensajesError.push('Ingrese su email');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}