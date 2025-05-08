let current = 0;
const imageElement = document.getElementById("carousel-image");

// Esta variable debe estar definida en el HTML antes de incluir este script:
console.log("Imágenes cargadas:", images); // para depuración

let autoSlideTimer;

function showImage(index) {
  imageElement.src = images[index];
}

// Función para avanzar automáticamente
function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

// Función para reiniciar el temporizador de auto-cambio
function resetAutoSlide() {
  clearInterval(autoSlideTimer); // Detiene el actual
  autoSlideTimer = setInterval(nextImage, 5000); // Reinicia
}

// Event listeners para navegación manual
document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
  resetAutoSlide(); // Reinicia temporizador
});

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
  resetAutoSlide(); // Reinicia temporizador
});

// Iniciar carrusel automático al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  showImage(current);
  resetAutoSlide(); // Primera vez
});
