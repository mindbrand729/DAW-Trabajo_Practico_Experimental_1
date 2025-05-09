/*Usuario y contraseña*/
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('login-form');
  const validCredentials = {
    username: 'unemi',
    password: 'web2025'
  };

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validCredentials.username && password === validCredentials.password) {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }
  });
});