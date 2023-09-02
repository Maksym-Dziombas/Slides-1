const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
  slide.onclick = () => {
    clearAllClasses();
    slide.classList.add('active');
  }
})

function clearAllClasses() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  })
}