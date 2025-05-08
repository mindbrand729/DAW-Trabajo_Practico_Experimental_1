let current = 0;
const imageElement = document.getElementById("carousel-image");
const blurBackground = document.getElementById("blur-background");

function showImage(index) {
  const newSrc = images[index];
  imageElement.src = newSrc;
  blurBackground.style.backgroundImage = `url(${newSrc})`;
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
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
