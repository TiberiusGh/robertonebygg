// Nav
const hamburgerMenu = document.querySelector('#mobile-menu-button')
const mobileMenu = document.querySelector('#mobile-menu')
const nav = document.querySelector('nav')
const logo = document.querySelector('nav h1')
const body = document.body
const mobileMenuA = document.querySelectorAll('#mobile-menu a')

const fil1 = document.getElementById('fil1')
const filBtn = document.getElementById('file-button')
const fileInputContainer = document.getElementById('file-inputs-container')
const fileList = document.getElementById('file-list')

function hello() {
  console.log('%cHej!', 'font-size: 16px; font-weight: bold; color: #1f2530;')
  console.log(
    '%cBehöver den här sidan åtgärdas eller förbättras? Vänligen meddela mig https://github.com/TiberiusGh/robertonebygg.',
    'font-size: 12px; font-weight: bold; color: #1f2530'
  )
  console.log(
    '%c/Tiberius https://linkedin.com/in/tiberius-gh/',
    'font-size: 12px; font-weight: bold; color: #1f2530;'
  )
}
hello()

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

mobileMenuA.forEach((element) => {
  element.addEventListener('click', () => {
    hamburgerMenu.click()
  })
})

// Handle multiple files
let fileCounter = 1
let currentInputId = 'fil1'

// Initialize first file input
fil1.addEventListener('change', handleFileSelection)

filBtn.addEventListener('click', function () {
  // Find the next available input or create a new one
  let currentInput = document.getElementById(currentInputId)

  if (currentInput.files.length === 0) {
    // Current input is empty, use it
    currentInput.click()
  } else {
    // Current input has a file, create a new one
    fileCounter++
    const newInputId = `fil${fileCounter}`

    const newInput = document.createElement('input')
    newInput.type = 'file'
    newInput.name = `file${fileCounter}`
    newInput.id = newInputId
    newInput.className = 'hidden'
    newInput.addEventListener('change', handleFileSelection)

    fileInputContainer.appendChild(newInput)
    currentInputId = newInputId
    newInput.click()
  }
})

function handleFileSelection(e) {
  if (e.target.files[0]) {
    updateFileDisplay()
  }
}

function updateFileDisplay() {
  const allCurrentInputs = document.querySelectorAll(
    '#file-inputs-container input[type="file"]'
  )
  const selectedFiles = []

  allCurrentInputs.forEach((input) => {
    if (input.files[0]) {
      selectedFiles.push(input.files[0])
    }
  })

  if (selectedFiles.length > 0) {
    fileList.replaceChildren()
    fileList.classList.remove('hidden')

    selectedFiles.forEach((file) => {
      const fileItem = document.createElement('div')
      fileItem.textContent = `📎 ${file.name} (${(file.size / 1024).toFixed(
        1
      )} KB)`
      fileItem.className = 'py-1'
      fileList.appendChild(fileItem)
    })
  } else {
    fileList.classList.add('hidden')
  }
}
