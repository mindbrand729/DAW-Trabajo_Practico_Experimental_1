# DAW-Trabajo_Practico_Experimental_1
Creación de un sitio web

Instrucciones para el correcto funcionamiento del repositorio 

En Windows abre la terminal (PowerShell, CMD o terminal de VS Code) y ejecuta:

    git clone https://github.com/mindbrand729/DAW-Trabajo_Practico_Experimental_1.git
    cd Sitio_Web_Taller_mecanico
    python -m venv venv
    venv\Scripts\activate
    pip install -r requirements.txt
    python main.py

En Linux abre la terminal y ejecuta:

    git clone https://github.com/mindbrand729/DAW-Trabajo_Practico_Experimental_1.git
    cd Sitio_Web_Taller_mecanico
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python main.py

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

Lista de Productos para el Taller Mecánico
🔋 Accesorios y componentes básicos
    •	Baterías para autos (convencionales y AGM)
    •	Bombillas y faros LED/Halógenos
    •	Escobillas limpiaparabrisas
    •	Filtros de aire
    •	Filtros de aceite
    •	Filtros de combustible
🛢️ Lubricantes y fluidos
    •	Aceite de motor (sintético y semisintético)
    •	Refrigerante / Anticongelante
    •	Líquido de frenos
    •	Aceite para transmisión automática/manual
    •	Aditivos para motor y combustible
🧰 Herramientas y kits
    •	Kits de herramientas básicas para auto
    •	Gatos hidráulicos
    •	Compresores portátiles de aire
    •	Cables de arranque (booster)
    •	Llaves de ruedas telescópicas
🚗 Repuestos comunes
    •	Pastillas de freno
    •	Discos de freno
    •	Amortiguadores
    •	Correas de distribución y accesorios
    •	Bujías (convencionales e iridium)
🎯 Accesorios para comodidad y estilo
    •	Alfombras para auto (universales y a medida)
    •	Fundas para asientos
    •	Cubrevolantes
    •	Organizadores para baúl o asientos
    •	Cámaras de retroceso o sensores
🧼 Cuidado del vehículo
    •	Cera y shampoo para auto
    •	Limpiador de interiores
    •	Paños de microfibra
    •	Desengrasante para motor
    •	Ambientadores para auto

Estructura que tendrá el proyecto:

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
