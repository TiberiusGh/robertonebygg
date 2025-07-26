// Nav

const hamburgerMenu = document.querySelector('nav button')
const mobileMenu = document.querySelector('#mobile-menu')
const spans = hamburgerMenu.querySelectorAll('span')

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})
