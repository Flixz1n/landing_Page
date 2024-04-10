const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

// function ocultaElementos() {
//   const header = document.querySelector('header');
//   header.classList.add('header--is-hidden');
// }

// function exibeElementosHeader() {
//   const header = document.querySelector('header');
//   header.classList.remove('header--is-hidden');
// }