document.getElementById('team-container').addEventListener('submit', function(event) {
      event.preventDefault();

      const usuario = document.getElementById('username').value;
      const contrasena = document.getElementById('password').value;

      if (usuario === 'unemi' && contrasena === 'web2025') {
        alert('Inicio de sesión exitoso');
      } else {
        alert('Credenciales incorrectas');
      }
    });