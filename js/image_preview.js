const articles = document.querySelectorAll('article')
const lightbox = document.querySelector('.lightbox')
const closeBtn = lightbox.querySelector('.closeBtn')
const mainImage = lightbox.querySelector('#lightboxImage')
const nextBtn = lightbox.querySelector('.lightboxNextBtn')
const prevBtn = lightbox.querySelector('.lightboxPrevBtn')

let lightboxOn = false
let currentImageArray = []
let currentImageIndex = 0

let startX = 0
let isDragging = false

articles.forEach((article) => {
  const allImgs = article.querySelectorAll('img')

  allImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
      const isMobile = window.innerWidth <= 750
      currentImageArray = Array.from(allImgs).map((img) => {
        if (isMobile) {
          return img.src.replace('/thumbnails/', '/mobile/')
        } else {
          return img.src.replace('/thumbnails/', '/full_rez/')
        }
      })

      currentImageIndex = index
      openLightbox()
    })
  })
})

function openLightbox() {
  lightboxOn = true
  document.body.classList.add('overflow-hidden')

  mainImage.src = currentImageArray[currentImageIndex]

  handleNavBtnsVisibility()
  lightbox.classList.toggle('hidden')
}

closeBtn.addEventListener('click', () => {
  hideLightBox()
})

document.addEventListener('keydown', (event) => {
  if (lightboxOn) {
    if (event.key === 'ArrowRight') {
      nextImg()
    }
    if (event.key === 'ArrowLeft') {
      prevImg()
    }
    if (event.key === 'Escape') {
      hideLightBox()
    }
  }
})

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    hideLightBox()
  }
})

function hideLightBox() {
  lightboxOn = false
  currentImageArray = []
  currentImageIndex = 0
  document.body.classList.remove('overflow-hidden')

  mainImage.src = ''
  lightbox.classList.toggle('hidden')
}

nextBtn.addEventListener('click', () => {
  nextImg()
})

prevBtn.addEventListener('click', () => {
  prevImg()
})

function handleNavBtnsVisibility() {
  if (currentImageIndex === 0) {
    prevBtn.classList.add('hidden')
  } else {
    prevBtn.classList.remove('hidden')
  }

  if (currentImageIndex === currentImageArray.length - 1) {
    nextBtn.classList.add('hidden')
  } else {
    nextBtn.classList.remove('hidden')
  }
}

function nextImg() {
  if (currentImageIndex < currentImageArray.length - 1) {
    currentImageIndex++
    mainImage.src = currentImageArray[currentImageIndex]
    handleNavBtnsVisibility()
  }
}

function prevImg() {
  if (currentImageIndex > 0) {
    currentImageIndex--
    mainImage.src = currentImageArray[currentImageIndex]
    handleNavBtnsVisibility()
  }
}

// For swiping
lightbox.addEventListener('touchstart', (e) => {
  if (!lightboxOn) return
  startX = e.touches[0].clientX
  isDragging = false
})

lightbox.addEventListener('touchmove', (e) => {
  if (!lightboxOn) return
  const deltaX = Math.abs(e.touches[0].clientX - startX)
  if (deltaX > 10) {
    isDragging = true
    e.preventDefault()
  }
})

lightbox.addEventListener('touchend', (e) => {
  if (!lightboxOn || !isDragging) return

  const endX = e.changedTouches[0].clientX
  const diffX = startX - endX
  const minSwipeDistance = 50

  if (Math.abs(diffX) > minSwipeDistance) {
    if (diffX > 0 && currentImageIndex < currentImageArray.length - 1) {
      nextImg()
    } else if (diffX < 0 && currentImageIndex > 0) {
      prevImg()
    }
  }

  isDragging = false
})
