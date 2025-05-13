# DAW-Trabajo_Practico_Experimental_1
Instrucciones para la ejecución y el correcto funcionamiento del repositorio

Requisitos previos

Antes de ejecutar el proyecto, asegúrese de tener lo siguiente instalado:

    Python 3.9 o superior (recomendado: Python 3.11)
    pip (gestor de paquetes de Python)
    Opcional: Visual Studio Code o cualquier editor de texto
    Git (si va a clonar el repositorio directamente desde GitHub)

# Cómo Obtener el Proyecto
Opción 1: Desde Google Drive:

Descargue y descomprima la carpeta DAW-Trabajo_Practico_Experimental_1... en su computadora.

Opción 2: Desde GitHub (Archivo ZIP):

    •	Ingrese al repositorio:

    •	Haga clic en Code → Download ZIP.

    •	Descomprima la carpeta del proyecto.

Opción 3: Clonación con Git (recomendado):

En Windows abre la terminal (PowerShell, CMD o terminal de VS Code) y ejecute:

    git clone https://github.com/mindbrand729/DAW-Trabajo_Practico_Experimental_1.git

# Crear y activar el entorno virtual
Acceder a la carpeta del proyecto:

    cd DAW-Trabajo_Practico_Experimental_1/Sitio_Web_Taller_mecanico

Crear el entorno virtual

    python -m venv venv

Activar entorno virtual:

En Windows:

    venv\Scripts\activate
    
En Mac/Linux:

    source venv/bin/activate

Problemas comunes en Windows (PowerShell)

Si aparece un error como:

    File ...\Activate.ps1 cannot be loaded because running scripts is disabled...

Windows PowerShell está bloqueando la ejecución de scripts. Soluciones:

Opción 1: Activar usando cmd.exe

En lugar de usar PowerShell, abre una ventana de comandos normal (cmd) e intenta activar el entorno:

    venv\Scripts\activate

Opción 2: Cambiar la política de PowerShell (temporal o permanente)

Temporal (sólo para esta sesión):
    
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    venv\Scripts\activate

Permanente (menos recomendable en equipos institucionales):

    Set-ExecutionPolicy RemoteSigned
    venv\Scripts\activate

# Instalar dependencias
Una vez activado el entorno virtual, ejecuta:
    
    pip install -r requirements.txt

Si aparece un error indicando que Flask no está instalado, ejecuta:

    pip install Flask

# Ejecutar la aplicación Flask
Desde la misma terminal ejecuta:

    python main.py

Por defecto, Flask debería iniciar en:
    
    http://127.0.0.1:5000

Copie esa dirección en su navegador para ver la página principal.




# Distribución de la Actividad:
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

# Estructura que tendrá el proyecto:

├───git/
|
├───Sitio_Web_Taller_mecanico.../
|   |
|   ├── entornoGrupo17(venv en su defecto)/
|   |   ├── Include/
|   │   ├── Lib/
|   │   ├── Scripts/
|   │   └── pyvenv.cfg
|   |
|   ├── static/
|   │   ├── css/
|   |       └── estilos.css            → Estilos generales (colores, tipografías, layout común)
|   │   ├── img/
|   │       └── [imágenes de uso común o individuales]
|   │   └── js/
|   |       ├── equipo.js              → JavaScript para generar contenido en equipo.html
|   │       ├── promociones.js         → JavaScript para generar contenido en promociones.html
|   │       ├── sucursales.js          → JavaScript para generar contenido en sucursales.html
|   │       └── login.js               → Validación de usuario en login.html
|   |
|   ├── templates/
|   │   ├── shared/
|   │       ├── header.html            → Encabezado común (menú de navegación)
|   │       └── footer.html            → Pie de página común
|   |   ├── index.html                 → Página Principal (Persona 1)
|   |   ├── nosotros.html              → Página de Nosotros (Persona 2)
|   |   ├── equipo.html                → Página de Equipo (Persona 3)
|   |   ├── clientes.html              → Página de Clientes (Persona 4)
|   |   ├── promociones.html           → Página de Promociones (Persona 5)
|   |   ├──  productos.html            → Página de Productos (Persona 5)
|   |   ├── sucursales.html            → Página de Sucursales (Persona 6)
|   |   └── login.html                 → Página de Login (Persona 6)
|   │
|   ├── .gitignore
|   │
|   ├── main.py 
|   |
|   └── requirements.txt
|
└── README.md                      → (Opcional) Notas o instrucciones del grupo

Dado que no se puede usar backend, se recomienda usar JavaScript para insertar el header y
footer dinámicamente desde los archivos shared/header.html y shared/footer.html

Cada persona puede hacer esto en su propia página así:

<body>

    {% include 'shared/header.html' %}
        
        <main>

            <!-- Aquí va el contenido de la pagina -->
            
        </main>
        
    {% include 'shared/footer.html' %}

</body>
