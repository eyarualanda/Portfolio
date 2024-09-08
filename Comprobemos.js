const carrossel = document.querySelector('.carrossel');
let currentIndex = 0;

function showNextItem() {
    currentIndex = (currentIndex + 1) % carrossel.children.length;
    carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextItem, 2000); // Cambia de diapositiva cada 2 segundos
