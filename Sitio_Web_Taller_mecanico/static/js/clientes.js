const clienteslist = [
      { nombre: "Juan Pérez", email: "juanperez@hotmail.com", ci: "0925610900", telefono: "0991594567", image:"juanperez.jpg" },
      { nombre: "Ana Gómez", email: "gomezana12@yahoo.com", ci: "1200040506", telefono: "0985644567", image:"anagomez.jpg" },
      { nombre: "Carlos Ruiz", email: "carlosrzavala@google.com", ci: "1304506077", telefono: "0979674567", image:"carlosruiz.jpg" },
      { nombre: "Luisa Méndez", email: "luisamen345@extra.com", ci: "6405071823", telefono: "0961234567", image:"luisamendez.jpg" },
      { nombre: "Mario León", email: "mleonp@unemi.edu.ec", ci: "1234567892", telefono: "0951333567", image:"marioleon.jpg" },
      { nombre: "Sofía Torres", email: "sofia@google.com", ci: "1757080910", telefono: "0946677567", image:"sofiatorres.jpg" },
      { nombre: "Pedro Lema", email: "pedro@google.com", ci: "0977801011", telefono: "0965234567", image:"pedrolema.jpg" },
      { nombre: "Daniela Paz", email: "danielapaz_98@google.com", ci: "0941011127", telefono: "0971235647", image:"danielapaz.jpg" },
      { nombre: "Milo Martillo", email: "milo_martillo@google.com", ci: "0910111213", telefono: "0985234587", image:"milomartillo.jpg" },
      { nombre: "Maria With", email: "withmariaus@latam.com", ci: "1259101112", telefono: "0994234567", image:"mariawith.jpg" },
      { nombre: "Ricardo Moya", email: "ricardomoya12@outlook.com", ci: "0910111213", telefono: "0994334567", image:"ricardomoya.jpg" },
      { nombre: "Manuel Ríos", email: "riosmanuel_1992@pfizer.com", ci: "1451213145", telefono: "0983345367", image:"manuelrios.jpg" }
    ];

// Función para cargar los clientes en la página
function loadcustomerslist() {
    const ClienteContainer = document.getElementById('cliente-container');
    
    if (!ClienteContainer) {
        console.error('No se encontró los clientes');
        return;
    }
    
    clienteslist.forEach(c => {
        // Crear la tarjeta para cada cliente
        const clienteCard = document.createElement('div');
        clienteCard.className = `card-cliente ${c.nombre.toLowerCase()}`;
        
        // Crear la estructura interna de la tarjeta cliente
        clienteCard.innerHTML = `
                <div class="cliente-image">
                    <img src="${getImagePath(c.image)}" alt="${c.nombre}">
                </div>
                <div class="cliente-info">
                    <h3>${c.nombre}</h3>
                    <h4>${c.email}</h4>
                    <p>${c.ci}</p>
		    <p>${c.telefono}</p>
                </div>
        `;
        
        // Añadir la tarjeta al contenedor
        ClienteContainer.appendChild(clienteCard);
    });
}

// Función para obtener la ruta correcta de las imágenes
function getImagePath(imageName) {
    // Ajusta la ruta según la estructura de carpetas de tu proyecto
    return `static/img/clientes/${imageName}`;
}

// Cargar los clientes cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadcustomerslist);