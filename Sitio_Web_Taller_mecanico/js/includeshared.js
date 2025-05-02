// js/includeShared.js

// Cargar header
fetch('shared/header.html')
  .then(res => res.text())
  .then(data => document.getElementById('header').innerHTML = data);

// Cargar footer
fetch('shared/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);
