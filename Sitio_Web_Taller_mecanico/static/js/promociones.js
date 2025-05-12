// Datos de las promociones con descripciones e iconos y precios actualizados
const promociones = [
    {
        nombre: "CAMBIO DE ACEITE PREMIUM",
        descripcion: "Incluye aceite sintético, filtro de aceite y revisión de 10 puntos clave",
        precio: "$29.99",
        imagen: "https://www.morepamotor.es/wp-content/uploads/2024/01/cambio-aceite.jpg",
        icono: "fas fa-oil-can",
        etiqueta: "POPULAR"
    },
    {
        nombre: "ALINEACIÓN Y BALANCEO",
        descripcion: "Balanceo de las 4 ruedas y alineación computarizada de precisión",
        precio: "$39.99",
        imagen: "https://wvw.ubitecglobal.com/hs-fs/hubfs/alineaci%C3%B3n%20y%20balanceo%20de%20veh%C3%ADculos%202.jpg?width=1000&name=alineaci%C3%B3n%20y%20balanceo%20de%20veh%C3%ADculos%202.jpg",
        icono: "fas fa-tachometer-alt"
    },
    {
        nombre: "FRENOS COMPLETOS",
        descripcion: "Cambio de pastillas, rectificación de discos y revisión del sistema",
        precio: "$79.99",
        imagen: "https://www.revista.ferrepat.com/wp-content/uploads/2018/02/475905-cambio-pastillas.jpg",
        icono: "fas fa-brake-system"
    },
    {
        nombre: "DIAGNÓSTICO COMPUTARIZADO",
        descripcion: "Escaneo completo de computadora y diagnóstico de todos los sistemas",
        precio: "$19.99",
        imagen: "https://diagnosticogt.web.app/assets/img/all/portada-banner.jpg",
        icono: "fas fa-laptop-code",
        etiqueta: "OFERTA"
    },
    {
        nombre: "PAQUETE MANTENIMIENTO",
        descripcion: "Cambio de aceite, filtros, revisión eléctrica y de suspensión",
        precio: "$99.99",
        imagen: "https://www.bmw.com.ec/content/dam/bmw/common/topics/offers-and-services/personal-services/service-incl/BMW-Service-Inclusive-Packages.jpg",
        icono: "fas fa-tools"
    },
    {
        nombre: "LIMPIEZA DE INYECTORES",
        descripcion: "Limpieza ultrasónica de inyectores y sistema de combustible",
        precio: "$49.99",
        imagen: "https://cdn.club-magazin.autodoc.de/uploads/sites/11/2020/09/todo-sobre-la-limpieza-de-inyectores.jpg",
        icono: "fas fa-spray-can"
    },
    {
        nombre: "REVISIÓN PRE-VIAJE",
        descripcion: "Revisión de 25 puntos para asegurar un viaje sin contratiempos",
        precio: "$34.99",
        imagen: "https://gomatodo.com/wp-content/uploads/2019/08/pre-viaje-05.jpeg",
        icono: "fas fa-car"
    }
];

// Función para crear elementos HTML con atributos
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    // Asignar atributos
    for (const key in attributes) {
        if (key === 'className') {
            element.className = attributes[key];
        } else if (key === 'textContent') {
            element.textContent = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }
    
    // Añadir elementos hijos
    if (Array.isArray(children)) {
        children.forEach(child => {
            if (child instanceof Node) {
                element.appendChild(child);
            } else if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            }
        });
    } else if (children instanceof Node) {
        element.appendChild(children);
    } else if (typeof children === 'string') {
        element.appendChild(document.createTextNode(children));
    }
    
    return element;
}

// Función para crear la estructura de la página
function crearPagina() {
    // Crear contenedor principal
    const container = createElement('div', { className: 'container' });   
    
    // Crear título principal
    const titulo = createElement('h1');
    const iconoTitulo = createElement('i', { className: 'fas fa-percentage' });
    titulo.appendChild(iconoTitulo);
    titulo.appendChild(document.createTextNode(' NUESTRAS PROMOCIONES'));
    container.appendChild(titulo);
    
    // Crear contenedor de promociones
    const promocionesContainer = createElement('div', { className: 'promociones-container' });
    
    // Crear cada promoción
    promociones.forEach(promocion => {
        const promocionDiv = createElement('div', { className: 'promocion' });
        
        // Etiqueta (solo si existe)
        if (promocion.etiqueta) {
            const etiqueta = createElement('div', { 
                className: 'etiqueta', 
                textContent: promocion.etiqueta 
            });
            promocionDiv.appendChild(etiqueta);
        }
        
        // Contenido de la promoción (primero)
        const contentDiv = createElement('div', { className: 'promocion-content' });
        
        // Icono
        const iconoI = createElement('i', { className: `${promocion.icono} icono` });
        contentDiv.appendChild(iconoI);
        
        // Nombre
        const nombreP = createElement('p', { 
            className: 'promocion-nombre', 
            textContent: promocion.nombre 
        });
        contentDiv.appendChild(nombreP);
        
        // Precio
        const precioP = createElement('p', { 
            className: 'promocion-precio', 
            textContent: promocion.precio 
        });
        contentDiv.appendChild(precioP);
        
        // Descripción
        const descripcionP = createElement('p', { 
            className: 'promocion-descripcion', 
            textContent: promocion.descripcion 
        });
        contentDiv.appendChild(descripcionP);
        
        // Botón
        const btnA = createElement('a', { 
            href: '#', 
            className: 'promocion-btn', 
            textContent: 'SOLICITAR AHORA' 
        });
        contentDiv.appendChild(btnA);
        
        promocionDiv.appendChild(contentDiv);
        
        // Contenedor de imagen (al final)
        const imagenContainer = createElement('div', { className: 'promocion-imagen-container' });
        const img = createElement('img', { 
            className: 'promocion-imagen', 
            src: promocion.imagen, 
            alt: promocion.nombre 
        });
        imagenContainer.appendChild(img);
        promocionDiv.appendChild(imagenContainer);
        
        promocionesContainer.appendChild(promocionDiv);
    });
    
    container.appendChild(promocionesContainer);
    return container;
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    app.appendChild(crearPagina());
});