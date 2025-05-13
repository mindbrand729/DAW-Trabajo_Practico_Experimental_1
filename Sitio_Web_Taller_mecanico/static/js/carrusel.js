let current = 0;
const images = [
  { url: "static/img/inicio.jpg" },
  { url: "https://http2.mlstatic.com/D_NQ_NP_741514-MLU74390597813_022024-O.webp" },
  { url: "https://www.ro-des.com/images/mecanica/bomba_agua.jpg" },
  { url: "https://m.media-amazon.com/images/I/71xgxn8pmOL._AC_UF894,1000_QL80_.jpg" },
  { url: "https://diagnosticogt.web.app/assets/img/all/portada-banner.jpg" },
  { url: "https://cdn.club-magazin.autodoc.de/uploads/sites/11/2020/09/filtro-de-aire-deportivo.jpg" },
  { url: "https://http2.mlstatic.com/D_NQ_NP_2X_968983-MLA74805962991_022024-T.webp" },
  { url: "https://bateriasecuador.com/wp-content/uploads/2023/07/BE-EQ-HighPower-Foto-Render.png" },
  { url: "https://wvw.ubitecglobal.com/hs-fs/hubfs/alineaci%C3%B3n%20y%20balanceo%20de%20veh%C3%ADculos%202.jpg?width=1000&name=alineaci%C3%B3n%20y%20balanceo%20de%20veh%C3%ADculos%202.jpg" },
  { url: "https://www.recambiosaranda.es/server/Portal_0003955/juegolimpiasbosch1.jpg" },
  { url: "https://http2.mlstatic.com/D_Q_NP_2X_792545-MEC80258158802_112024-N.webp" }
];

const blurBackground = document.getElementById("blur-background");
const carouselTrack = document.getElementById("carousel-track");

function showImage(index, direction = "right") {
  const newImg = document.createElement("img");
  newImg.src = images[index].url;
  newImg.className = "carousel-img";

  // Animación de entrada según dirección
  newImg.classList.add(direction === "right" ? "slide-in-right" : "slide-in-left");

  const currentImg = carouselTrack.querySelector(".carousel-img");
  if (currentImg) {
    carouselTrack.insertBefore(newImg, currentImg);
    // Animación de salida según dirección opuesta
    currentImg.classList.add(direction === "right" ? "slide-out-left" : "slide-out-right");
    currentImg.addEventListener("animationend", () => {
      currentImg.remove();
    }, { once: true });
  } else {
    carouselTrack.appendChild(newImg); // primera vez
  }

  blurBackground.style.backgroundImage = `url(${images[index].url})`;
}

function nextImage() {
  const nextIndex = (current + 1) % images.length;
  current = nextIndex;
  showImage(current, "right");
}

function prevImage() {
  const prevIndex = (current - 1 + images.length) % images.length;
  current = prevIndex;
  showImage(current, "left");
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(nextImage, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(current);

  document.getElementById("nextBtn").addEventListener("click", () => {
    nextImage();
    resetAutoSlide();
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    prevImage();
    resetAutoSlide();
  });

  autoSlideTimer = setInterval(nextImage, 5000);
});

let autoSlideTimer;
