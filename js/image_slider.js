const allSlideContainers = document.querySelectorAll('article')

allSlideContainers.forEach((element) => {
  const imageCarousel = element.querySelector('.image-carousel')
  const nextSlideBtnMobile = element.querySelector('.next-slide-mobile')
  const prevSlideBtnMobile = element.querySelector('.prev-slide-mobile')
  const nextSlideBtnDesktop = element.querySelector('.next-slide-desktop')
  const prevSlideBtnDesktop = element.querySelector('.prev-slide-desktop')
  const textContainer = element.querySelector('.text-container')

  let currentTranslate = 0
  const images = imageCarousel.querySelectorAll('img')
  const totalImgs = images.length

  // Swipe variables
  let startX = 0
  let startY = 0
  let isDragging = false

  function getGap() {
    const gap = window.getComputedStyle(imageCarousel).gap
    if (!gap || gap === 'normal') {
      return 0
    }
    return parseInt(gap) || 0
  }

  function getContainerWidth() {
    return imageCarousel.offsetWidth
  }

  function getImagePositions() {
    // Calculate actual position of each image based on their real widths
    const gap = getGap()
    const positions = []
    let currentLeft = 0

    for (let i = 0; i < totalImgs; i++) {
      const width = images[i].offsetWidth
      positions.push({
        index: i,
        left: currentLeft,
        right: currentLeft + width,
        width: width
      })
      currentLeft += width + gap
    }

    return positions
  }

  function findFirstHiddenOrPartialRight() {
    // Find the first image that is partially hidden or completely hidden on the right
    const containerWidth = getContainerWidth()
    const positions = getImagePositions()

    for (let pos of positions) {
      const imageLeft = pos.left - currentTranslate
      const imageRight = pos.right - currentTranslate

      // If image extends beyond the right edge or is completely hidden
      if (imageRight > containerWidth) {
        return pos
      }
    }

    return null
  }

  function findFirstHiddenOrPartialLeft() {
    // Find the first image that is partially hidden or completely hidden on the left
    const positions = getImagePositions()

    for (let i = positions.length - 1; i >= 0; i--) {
      const pos = positions[i]
      const imageLeft = pos.left - currentTranslate
      const imageRight = pos.right - currentTranslate

      // If image extends beyond the left edge or is completely hidden
      if (imageLeft < 0) {
        return pos
      }
    }

    return null
  }

  function canGoNext() {
    // Can go next if there's an image hidden or partial on the right
    return findFirstHiddenOrPartialRight() !== null
  }

  function canGoPrev() {
    // Can go prev if we've scrolled at all
    return currentTranslate > 0
  }

  function updateButtonVisibility() {
    const showPrev = canGoPrev()
    const showNext = canGoNext()

    prevSlideBtnMobile.style.display = showPrev ? '' : 'none'
    prevSlideBtnDesktop.style.display = showPrev ? '' : 'none'
    nextSlideBtnMobile.style.display = showNext ? '' : 'none'
    nextSlideBtnDesktop.style.display = showNext ? '' : 'none'
  }

  function goToSlide(direction) {
    const containerWidth = getContainerWidth()
    const positions = getImagePositions()

    if (direction === 'next') {
      const target = findFirstHiddenOrPartialRight()

      if (target) {
        // Move so this image's right edge aligns with container's right edge
        // Unless that would create empty space on the left
        const newTranslate = target.right - containerWidth
        currentTranslate = Math.max(0, newTranslate)
      }
    } else if (direction === 'prev') {
      const target = findFirstHiddenOrPartialLeft()

      if (target) {
        // Move so this image's left edge aligns with container's left edge
        currentTranslate = target.left
      } else if (currentTranslate > 0) {
        // If no hidden image but we're scrolled, go back to start
        currentTranslate = 0
      }
    }

    imageCarousel.style.transform = `translateX(-${currentTranslate}px)`
    updateButtonVisibility()
  }

  // Reset carousel
  function resetCarousel() {
    currentTranslate = 0
    imageCarousel.style.transform = 'translateX(0)'
    updateButtonVisibility()
  }

  // Mobile button events
  prevSlideBtnMobile.addEventListener('click', () => goToSlide('prev'))
  nextSlideBtnMobile.addEventListener('click', () => goToSlide('next'))

  // Desktop button events
  prevSlideBtnDesktop.addEventListener('click', () => goToSlide('prev'))
  nextSlideBtnDesktop.addEventListener('click', () => goToSlide('next'))

  // Reset carousel when expanding/collapsing
  const toggleMoreBtnDesktop = element.querySelector('.toggle-btn-desktop')
  if (toggleMoreBtnDesktop) {
    toggleMoreBtnDesktop.addEventListener('click', () => {
      setTimeout(resetCarousel, 100)
    })
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    updateButtonVisibility()
  })

  // Touch events for mobile swipe functionality
  imageCarousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
    isDragging = true
  })

  imageCarousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return

    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = Math.abs(currentX - startX)
    const diffY = Math.abs(currentY - startY)

    if (diffX > diffY) {
      e.preventDefault()
    }
  })

  imageCarousel.addEventListener('touchend', (e) => {
    if (!isDragging) return
    isDragging = false

    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    const diffX = startX - endX
    const diffY = startY - endY

    const minSwipeDistance = 50

    if (
      Math.abs(diffX) > Math.abs(diffY) &&
      Math.abs(diffX) > minSwipeDistance
    ) {
      if (diffX > 0) {
        goToSlide('next')
      } else {
        goToSlide('prev')
      }
    }
  })

  updateButtonVisibility()
})
