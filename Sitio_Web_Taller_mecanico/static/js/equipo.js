// Datos del equipo (puedes reemplazar con datos reales o cargarlos desde una API)
const teamMembers = [
    {
        name: "Carlos Rodríguez",
        role: "Mecánico Jefe",
        bio: "Con más de 15 años de experiencia en reparación automotriz. Especialista en sistemas de inyección electrónica.",
        image: "MecánicoJefe.jpg"
    },
    {
        name: "Laura González",
        role: "Especialista en Transmisiones",
        bio: "Ingeniera automotriz con especialización en sistemas de transmisión automática y manual.",
        image: "mecanico2.jpg"
    },
    {
        name: "Miguel Hernández",
        role: "Técnico Electricista",
        bio: "Experto en sistemas eléctricos y electrónicos de vehículos modernos.",
        image: "mecanico3.jpg"
    },
    {
        name: "Ana Martínez",
        role: "Asesora de Servicio",
        bio: "Encargada de atención al cliente y diagnóstico inicial de problemas automotrices.",
        image: "asesora8.jpg"
    },
    {
        name: "Roberto Sánchez",
        role: "Especialista en Frenos",
        bio: "Certificado en sistemas de frenos ABS y convencionales para todo tipo de vehículos.",
        image: "mecanico4.jpg"
    },
    {
        name: "Diana Torres",
        role: "Gerente de Taller",
        bio: "Coordina todas las operaciones del taller para garantizar un servicio de calidad.",
        image: "gerente7.jpg"
    },
    {
        name: "Peter Smith",
        role: "Técnico de Mantenimiento",
        bio: "Realiza el mantenimiento y reparación de vehículos, asegurando que todos los sistemas funcionen correctamente.",
        image: "mecanico5.jpg"
    },
    {
        name: "Alice Brown",
        role: "Personal de Recepción",
        bio: "Atiende a los clientes, gestiona citas y asegura una comunicación eficiente entre el taller y los usuarios.",
        image: "recepcionista6.jpg"
    }
];

// Función para cargar los miembros del equipo en la página
function loadTeamMembers() {
    const teamContainer = document.getElementById('team-container');
    
    if (!teamContainer) {
        console.error('No se encontró el contenedor del equipo');
        return;
    }
    
    teamMembers.forEach(member => {
        // Crear la tarjeta para cada miembro del equipo
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';
        
        // Crear la estructura interna de la tarjeta
        memberCard.innerHTML = `
            <div class="member-image">
                <img src="${getImagePath(member.image)}" alt="${member.name}">
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <h4>${member.role}</h4>
                <p>${member.bio}</p>
            </div>
        `;
        
        // Añadir la tarjeta al contenedor
        teamContainer.appendChild(memberCard);
    });
}

// Función para obtener la ruta correcta de las imágenes
function getImagePath(imageName) {
    // Ajusta esta ruta según la estructura de carpetas de tu proyecto
    return `static/img/team/${imageName}`;
}

// Cargar los miembros del equipo cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadTeamMembers);