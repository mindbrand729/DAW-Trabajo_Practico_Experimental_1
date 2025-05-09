/*Las sucursales y direccion*/
document.addEventListener('DOMContentLoaded', function () {
  const sucursales = [
    {
      img: '1.jpg',
      Direccion: 'Av. Rosales 304 ',
      Ciudad: 'Machala'
    },
    {
      img: '2.jpg',
      Direccion: 'Av. Cordova y Leon',
      Ciudad: 'Machala'
    },
    {
      img: '3.jpg',
      Direccion: 'Av. Pricipal Cruz Vera',
      Ciudad: 'Machala'
    },
    {
      img: '4.jpg',
      Direccion: 'Av. Ochoa Leon',
      Ciudad: 'Machala'
    },
    {
      img: '55.jpg',
      Direccion: 'Av. Morales 234',
      Ciudad: 'Machala'
    }
  ];

  const row = document.createElement('div');
  row.className = 'row justify-content-center';

  sucursales.forEach(sucursal => {
    const col = document.createElement('div');
    col.className = 'col-2';

    const img = document.createElement('img');
    img.src = sucursal.img;
    img.className = 'rounded-circle mb-2';
    img.alt = 'Cinque Terre';
    img.width = 130;
    img.height = 100;

    const infoBox = document.createElement('div');
    infoBox.className = 'border p-3 rounded border-primary';
    infoBox.style.maxWidth = '300px';

    const direccionP = document.createElement('p');
    direccionP.className = 'mb-1';
    direccionP.innerHTML = `<strong>Dirección:</strong> ${sucursal.direccion}`;

    const ciudadP = document.createElement('p');
    ciudadP.className = 'mb-0';
    ciudadP.innerHTML = `<strong>Ciudad:</strong> ${sucursal.ciudad}`;

    infoBox.appendChild(direccionP);
    infoBox.appendChild(ciudadP);

    col.appendChild(img);
    col.appendChild(infoBox);

    row.appendChild(col);
  });


  document.querySelector('.container').appendChild(row);
});