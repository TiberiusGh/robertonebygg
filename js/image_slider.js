const allSlideContainers = document.querySelectorAll('article')

allSlideContainers.forEach((element) => {
  const imageCarousel = element.querySelector('.image-carousel')
  const prevSlideBtn = element.querySelector('.prev-slide')
  const nextSlideBtn = element.querySelector('.next-slide')

  let imgCounter = 0
  const totalImgs = imageCarousel.querySelectorAll('img').length

  // Swipe variables
  let startX = 0
  let startY = 0
  let isDragging = false

  function updateButtonVisibility() {
    prevSlideBtn.style.display = imgCounter === 0 ? 'none' : ''
    nextSlideBtn.style.display = imgCounter === totalImgs - 1 ? 'none' : ''
  }

  function goToSlide(direction) {
    if (direction === 'next' && imgCounter < totalImgs - 1) {
      imgCounter++
    } else if (direction === 'prev' && imgCounter > 0) {
      imgCounter--
    }
    imageCarousel.style.transform = `translateX(-${imgCounter * 100}%)`
    updateButtonVisibility()
  }

  prevSlideBtn.addEventListener('click', () => goToSlide('prev'))
  nextSlideBtn.addEventListener('click', () => goToSlide('next'))

  imageCarousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
    isDragging = true
  })

  imageCarousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return

    // Prevents scrolling while swiping horizontally
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = Math.abs(currentX - startX)
    const diffY = Math.abs(currentY - startY)

    if (diffX > diffY) {
      e.preventDefault() // Prevent vertical scrolling
    }
  })

  imageCarousel.addEventListener('touchend', (e) => {
    if (!isDragging) return
    isDragging = false

    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    const diffX = startX - endX
    const diffY = startY - endY

    // Minimum swipe distance (in pixels)
    const minSwipeDistance = 50

    // Check if horizontal swipe is longer than vertical
    if (
      Math.abs(diffX) > Math.abs(diffY) &&
      Math.abs(diffX) > minSwipeDistance
    ) {
      if (diffX > 0) {
        // Swiped left - go to next slide
        goToSlide('next')
      } else {
        // Swiped right - go to previous slide
        goToSlide('prev')
      }
    }
  })

  updateButtonVisibility()
})
