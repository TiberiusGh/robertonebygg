// Nav
const hamburgerMenu = document.querySelector('#mobile-menu-button')
const mobileMenu = document.querySelector('#mobile-menu')
const nav = document.querySelector('nav')
const logo = document.querySelector('nav h1')
const body = document.body

const treshold = 70
let isMenuOpen = false

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > treshold

  nav.classList.toggle('fixed', isScrolled)
  nav.classList.toggle('absolute', !isScrolled)
  nav.classList.toggle('bg-brand-accent', isScrolled || isMenuOpen)
  hamburgerMenu.classList.toggle('hover:text-brand-accent', !isScrolled)
  hamburgerMenu.classList.toggle('hover:text-gray-300', isScrolled)
})

hamburgerMenu.addEventListener('click', () => {
  isMenuOpen = mobileMenu.classList.contains('max-h-0')

  body.classList.toggle('overflow-y-hidden')

  if (isMenuOpen) {
    // Opening menu - nav background immediately, menu after delay
    nav.classList.toggle('bg-brand-accent', window.scrollY > treshold || true)

    setTimeout(() => {
      mobileMenu.classList.remove('max-h-0')
      mobileMenu.classList.add('max-h-136')
    }, 150)
  } else {
    // Closing menu - menu collapses immediately, nav background after delay
    mobileMenu.classList.add('max-h-0')
    mobileMenu.classList.remove('max-h-136')

    // Delay nav background removal (only if not scrolled)
    if (window.scrollY < treshold) {
      setTimeout(() => {
        nav.classList.remove('bg-brand-accent')
      }, 400) // Match menu animation duration
    }
  }
})

body.addEventListener('click', (event) => {
  if (isMenuOpen && !event.target.closest('nav')) {
    hamburgerMenu.click()
  }
})
