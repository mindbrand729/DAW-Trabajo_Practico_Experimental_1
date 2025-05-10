let current = 0;
const blurBackground = document.getElementById("blur-background");
const carouselTrack = document.getElementById("carousel-track");

function showImage(index, direction = "right") {
  const newImg = document.createElement("img");
  newImg.src = images[index];
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

  blurBackground.style.backgroundImage = `url(${images[index]})`;
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
