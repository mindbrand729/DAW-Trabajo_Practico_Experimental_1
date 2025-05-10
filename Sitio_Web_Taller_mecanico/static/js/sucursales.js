document.addEventListener('DOMContentLoaded', function() {
  const sucursales = [
    { imagen: '1.jpg', direccion: 'Av. Alvaro Ochoa', ciudad: 'Machala' },
    { imagen: '2.jpg', direccion: 'Av. Garcias 34', ciudad: 'Machala' },
    { imagen: '3.jpg', direccion: 'Av. Principal Cruz Vera', ciudad: 'Machala' },
    { imagen: '4.jpg', direccion: 'Av. Ochoa Leon', ciudad: 'Machala' },
    { imagen: '55.jpg', direccion: 'Av. Morales 234', ciudad: 'Machala' }
  ];

  const container = document.getElementById('team-container');

  sucursales.forEach(sucursal => {
    const col = document.createElement('div');
    col.classList.add('col-2');

    const img = document.createElement('img');
    img.src = sucursal.imagen;
    img.alt = `Sucursal en ${sucursal.ciudad}`;
    img.classList.add('sucursal-img');

    const info = document.createElement('div');
    info.classList.add('sucursal-info');

    const direccion = document.createElement('p');
    direccion.innerHTML = `<strong>Dirección:</strong> ${sucursal.direccion}`;

    const ciudad = document.createElement('p');
    ciudad.innerHTML = `<strong>Ciudad:</strong> ${sucursal.ciudad}`;

    info.appendChild(direccion);
    info.appendChild(ciudad);

    col.appendChild(img);
    col.appendChild(info);

    container.appendChild(col);
  });
});