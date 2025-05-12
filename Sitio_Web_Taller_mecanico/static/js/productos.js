// Datos de productos con URLs de imágenes actualizados
const productos = [
    {
        codigo: "P001",
        nombre: "FILTRO DE ACEITE PREMIUM",
        stock: 45,
        iva: 15,
        precio: "$12.99",
        imagen: "https://www.boschautopartes.mx/o/commerce-media/accounts/-1/images/5119159?download=true"
    },
    {
        codigo: "P002",
        nombre: "ACEITE SINTÉTICO 5W-30",
        stock: 78,
        iva: 15,
        precio: "$39.99",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_968983-MLA74805962991_022024-T.webp"
    },
    {
        codigo: "P003",
        nombre: "FILTRO DE AIRE DEPORTIVO",
        stock: 32,
        iva: 15,
        precio: "$24.50",
        imagen: "https://cdn.club-magazin.autodoc.de/uploads/sites/11/2020/09/filtro-de-aire-deportivo.jpg"
    },
    {
        codigo: "P004",
        nombre: "PASTILLAS DE FRENO DELANTERAS",
        stock: 56,
        iva: 15,
        precio: "$45.75",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_792545-MEC80258158802_112024-N.webp"
    },
    {
        codigo: "P005",
        nombre: "KIT DE BUJÍAS PLATINO",
        stock: 29,
        iva: 15,
        precio: "$32.50",
        imagen: "https://m.media-amazon.com/images/I/71xgxn8pmOL._AC_UF894,1000_QL80_.jpg"
    },
    {
        codigo: "P006",
        nombre: "ANTICONGELANTE CONCENTRADO",
        stock: 83,
        iva: 15,
        precio: "$18.25",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_741514-MLU74390597813_022024-O.webp"
    },
    {
        codigo: "P007",
        nombre: "LÍQUIDO DE FRENOS DOT 4",
        stock: 41,
        iva: 15,
        precio: "$14.99",
        imagen: "https://www.vistony.com.py/wp-content/uploads/2021/04/LIQUIDO-PARA-FRENO-DOT4-8-ONZAS.png"
    },
    {
        codigo: "P008",
        nombre: "BATERÍA AUTOMOTRIZ 75AH",
        stock: 18,
        iva: 15,
        precio: "$129.99",
        imagen: "https://bateriasecuador.com/wp-content/uploads/2023/07/BE-EQ-HighPower-Foto-Render.png"
    },
    {
        codigo: "P009",
        nombre: "JUEGO DE ESCOBILLAS LIMPIAPARABRISAS",
        stock: 62,
        iva: 15,
        precio: "$27.50",
        imagen: "https://www.recambiosaranda.es/server/Portal_0003955/juegolimpiasbosch1.jpg"
    },
    {
        codigo: "P010",
        nombre: "BOMBA DE AGUA",
        stock: 15,
        iva: 15,
        precio: "$85.99",
        imagen: "https://www.ro-des.com/images/mecanica/bomba_agua.jpg"
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
    const iconoTitulo = createElement('i', { className: 'fas fa-car-battery' });
    titulo.appendChild(iconoTitulo);
    titulo.appendChild(document.createTextNode(' NUESTROS PRODUCTOS'));
    container.appendChild(titulo);
    
    // Crear contenedor de productos
    const productosContainer = createElement('div', { className: 'productos-container' });
    
    // Crear cada producto
    productos.forEach(producto => {
        const productoDiv = createElement('div', { className: 'producto' });
        
        // Contenedor de imagen (ahora a la izquierda)
        const imagenContainer = createElement('div', { className: 'producto-imagen-container' });
        const img = createElement('img', { 
            className: 'producto-imagen', 
            src: producto.imagen, 
            alt: producto.nombre 
        });
        imagenContainer.appendChild(img);
        productoDiv.appendChild(imagenContainer);
        
        // Contenedor de detalles (ahora a la derecha)
        const detallesContainer = createElement('div', { className: 'producto-detalles' });
        
        // Código
        const codigoP = createElement('p', { 
            className: 'producto-codigo', 
            textContent: `CÓDIGO: ${producto.codigo}` 
        });
        detallesContainer.appendChild(codigoP);
        
        // Nombre
        const nombreP = createElement('p', { 
            className: 'producto-nombre', 
            textContent: producto.nombre 
        });
        detallesContainer.appendChild(nombreP);
        
        // Stock
        const stockP = createElement('p', { 
            className: 'producto-stock', 
            textContent: `Cantidad en stock: ${producto.stock}` 
        });
        detallesContainer.appendChild(stockP);
        
        // IVA
        const ivaP = createElement('p', { 
            className: 'producto-iva', 
            textContent: `IVA: ${producto.iva}%` 
        });
        detallesContainer.appendChild(ivaP);
        
        // Precio
        const precioP = createElement('p', { 
            className: 'producto-precio', 
            textContent: producto.precio 
        });
        detallesContainer.appendChild(precioP);
        
        // Botón
        const btnA = createElement('a', { 
            href: '#', 
            className: 'producto-btn', 
            textContent: 'COMPRAR AHORA' 
        });
        detallesContainer.appendChild(btnA);
        
        // Agregar el contenedor de detalles al producto
        productoDiv.appendChild(detallesContainer);
        
        productosContainer.appendChild(productoDiv);
    });
    
    container.appendChild(productosContainer);
    return container;
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    app.appendChild(crearPagina());
});