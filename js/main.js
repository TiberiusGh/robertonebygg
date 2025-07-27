// Nav
const hamburgerMenu = document.querySelector('nav button')
const mobileMenu = document.querySelector('#mobile-menu')
const nav = document.querySelector('nav')
const logo = document.querySelector('nav h1')
const hamburgerSpans = hamburgerMenu.querySelectorAll('span')
const body = document.body

hamburgerMenu.addEventListener('click', () => {
  const isOpen = nav.classList.contains('bg-black')

  if (isOpen) {
    // Close menu
    mobileMenu.style.maxHeight = '0'
    nav.classList.remove('bg-black')
  } else {
    // Open menu
    nav.classList.add('bg-black')
    logo.classList.add('text-white')
    mobileMenu.style.maxHeight = '800px'
  }

  body.classList.toggle('overflow-hidden')
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    nav.classList.remove('absolute')
    nav.classList.add('fixed')
  } else {
    nav.classList.add('absolute')
    nav.classList.remove('fixed')
  }
})
