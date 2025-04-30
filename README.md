# DAW-Trabajo_Practico_Experimental_1
Creación de un sitio web

Distribución de la Actividad:
1.	Coordinador general + Página Principal
    •	Diseña y programa la Página Principal del sitio web.
    •	Asegura que todas las páginas tengan coherencia visual y estructura.
    •	Redacta: Carátula, Introducción, Objetivos del informe.
    •	Supervisa el cumplimiento de plazos y la integración del trabajo final.

2.	Página de Nosotros + Edición del Informe
    •	Desarrolla la Página de Nosotros.
    •	Redacta la explicación de su trabajo con capturas para el informe.
    •	Se encarga de la edición y compilación del informe completo en PDF.

3.	Página de Equipo (JavaScript) + Conclusiones
    •	Crea dinámicamente la Página de Equipo usando JavaScript.
    •	Explica su código y resultados en el informe.
    •	Redacta las Conclusiones del grupo en el informe.

4.	Página de Clientes + Coordinador del video
    •	Diseña la Página de Clientes.
    •	Documenta cómo se hizo con capturas y explicación técnica.
    •	Organiza la carga del video grupal (ver detalles más abajo).
        	Presentación breve de cada integrante con cámara encendida.
        	Mostrar y explicar su parte del trabajo (pantalla compartida).
        	Navegación completa del sitio web terminado.
        	Cada integrante debe hablar y mostrar código + resultado.

5.	Página de Promociones (JavaScript) + Página de Productos
    •	Implementa la Página de Promociones con JavaScript.
    •	Desarrolla también la Página de Productos.
    •	Redacta su parte en el informe con capturas.

6.	Página de Sucursales (JavaScript) + Página de Login
    •	Crea la Página de Sucursales usando JavaScript.
    •	Programa la Página de Login con validación (usuario: unemi, contraseña: web2025).
    •	Explica ambas páginas en el informe y muestra su funcionamiento en el video.


Estructura que tendrá el proyecto:

sitio-web/
│
├── index.html                  → Página Principal (Persona 1)
├── nosotros.html              → Página de Nosotros (Persona 2)
├── equipo.html                → Página de Equipo (Persona 3)
├── clientes.html              → Página de Clientes (Persona 4)
├── promociones.html           → Página de Promociones (Persona 5)
├── productos.html             → Página de Productos (Persona 5)
├── sucursales.html            → Página de Sucursales (Persona 6)
├── login.html                 → Página de Login (Persona 6)
│
├── css/
│   └── estilos.css            → Estilos generales (colores, tipografías, layout común)
│
├── js/
│   ├── equipo.js              → JavaScript para generar contenido en equipo.html
│   ├── promociones.js         → JavaScript para generar contenido en promociones.html
│   ├── sucursales.js          → JavaScript para generar contenido en sucursales.html
│   └── login.js               → Validación de usuario en login.html
│
├── img/
│   └── [imágenes de uso común o individuales]
│
├── shared/
│   ├── header.html            → Encabezado común (menú de navegación)
│   └── footer.html            → Pie de página común
│
└── README.md                  → (Opcional) Notas o instrucciones del grupo

Dado que no se puede usar backend, se recomienda usar JavaScript para insertar el header y
footer dinámicamente desde los archivos shared/header.html y shared/footer.html

Cada persona puede hacer esto en su propia página así:

<body>
  <div id="header"></div>

  <!-- Contenido de la página -->

  <div id="footer"></div>

  <script>
    fetch('shared/header.html')
      .then(response => response.text())
      .then(data => document.getElementById('header').innerHTML = data);
    
    fetch('shared/footer.html')
      .then(response => response.text())
      .then(data => document.getElementById('footer').innerHTML = data);
  </script>
</body>

