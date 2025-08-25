const articles = document.querySelectorAll('article')
const lightbox = document.querySelector('.lightbox')
const closeBtn = lightbox.querySelector('.closeBtn')
const mainImage = lightbox.querySelector('#lightboxImage')
const nextBtn = lightbox.querySelector('.lightboxNextBtn')
const prevBtn = lightbox.querySelector('.lightboxPrevBtn')

let lightboxOn = false
let currentImageArray = []
let currentImageIndex = 0

articles.forEach((article) => {
  const allImgs = article.querySelectorAll('img')

  allImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentImageArray = Array.from(allImgs).map((img) => {
        return img.src.replace('/thumbnails/', '/full_rez/')
      })
      currentImageIndex = index
      openLightbox()
    })
  })
})

function openLightbox() {
  lightboxOn = true

  console.log('ImmageArray')
  console.log(currentImageArray)
  console.log('startIndex')
  console.log(currentImageIndex)

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

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightboxOn) {
    hideLightBox()
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
