export function setupNav() {
  const hamburgerMenu = document.querySelector('#mobile-menu-button')
  const mobileMenu = document.querySelector('#mobile-menu')
  const nav = document.querySelector('nav')
  const body = document.body
  const mobileMenuA = document.querySelectorAll('#mobile-menu a')

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

    body.classList.toggle('overflow-hidden')

    if (isMenuOpen) {
      nav.classList.toggle('bg-brand-accent', window.scrollY > treshold || true)

      setTimeout(() => {
        mobileMenu.classList.remove('max-h-0')
        mobileMenu.classList.add('max-h-136')
      }, 150)
    } else {
      mobileMenu.classList.add('max-h-0')
      mobileMenu.classList.remove('max-h-136')

      if (window.scrollY < treshold) {
        setTimeout(() => {
          nav.classList.remove('bg-brand-accent')
        }, 400)
      }
    }
  })

  body.addEventListener('click', (event) => {
    if (isMenuOpen && !event.target.closest('nav')) {
      hamburgerMenu.click()
    }
  })

  mobileMenuA.forEach((element) => {
    element.addEventListener('click', () => {
      hamburgerMenu.click()
    })
  })
}
