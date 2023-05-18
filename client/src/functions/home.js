function flipCard(card) {
  card.classList.toggle("flipped");
}
const container = document.querySelector(".slider-container");
const slides = Array.from(document.querySelectorAll(".slide"));
let currentIndex = 0;
let intervalId;

function goToSlide(index) {
  currentIndex = index;
  const slideWidth = slides[currentIndex].offsetWidth;
  const translateX = -currentIndex * slideWidth;
  container.style.transform = `translateX(${translateX}px)`;
}

function Slide1() {
  goToSlide(0);
  startSlider();
}

function Slide2() {
  goToSlide(1);
  startSlider();
}

function Slide3() {
  goToSlide(2);
  startSlider();
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex);
}

function startSlider() {
  clearInterval(intervalId); // Limpia el intervalo anterior antes de iniciar uno nuevo
  intervalId = setInterval(nextSlide, 2000); // Cambia la diapositiva cada 2 segundos (2000 ms)
}

function stopSlider() {
  clearInterval(intervalId);
}

startSlider(); // Inicia el slider automáticamente

var inputSearch = document.getElementById("inputSearch"); //Asigna la barra de búsqueda con un ID
inputSearch.addEventListener("keypress", function(e) { //Cuando das enter, redireccionar a la página de búsqueda
  if(e.key === "Enter"){
    e.preventDefault();
    window.location.replace("http://localhost:3000/search?q=" + inputSearch.value);
  }

});
// Agrega los siguientes event listeners para pausar/reanudar el slider cuando se haga clic en las diapositivas o en los botones de navegación
container.addEventListener("mouseenter", stopSlider);
container.addEventListener("mouseleave", startSlider);
document
  .querySelector(".slider-navigation")
  .addEventListener("mouseenter", stopSlider);
document
  .querySelector(".slider-navigation")
  .addEventListener("mouseleave", startSlider);