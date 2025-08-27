const allSlideContainers = document.querySelectorAll('article')

allSlideContainers.forEach((element) => {
  const imageCarousel = element.querySelector('.image-carousel')
  const nextSlideBtnMobile = element.querySelector('.next-slide-mobile')
  const prevSlideBtnMobile = element.querySelector('.prev-slide-mobile')
  const nextSlideBtnDesktop = element.querySelector('.next-slide-desktop')
  const prevSlideBtnDesktop = element.querySelector('.prev-slide-desktop')

  let currentTranslate = 0
  const images = imageCarousel.querySelectorAll('img')
  const totalImgs = images.length

  // Enhanced swipe variables
  let startX = 0
  let startY = 0
  let isDragging = false
  let currentX = 0
  let dragOffset = 0
  let startTime = 0
  let lastMoveTime = 0
  let velocity = 0

  // Add CSS transition when not dragging
  imageCarousel.style.transition =
    'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'

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
    const containerWidth = getContainerWidth()
    const positions = getImagePositions()

    for (let pos of positions) {
      const imageLeft = pos.left - currentTranslate
      const imageRight = pos.right - currentTranslate

      if (imageRight > containerWidth) {
        return pos
      }
    }

    return null
  }

  function findFirstHiddenOrPartialLeft() {
    const positions = getImagePositions()

    for (let i = positions.length - 1; i >= 0; i--) {
      const pos = positions[i]
      const imageLeft = pos.left - currentTranslate

      if (imageLeft < 0) {
        return pos
      }
    }

    return null
  }

  function canGoNext() {
    return findFirstHiddenOrPartialRight() !== null
  }

  function canGoPrev() {
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

  function getBounds() {
    const positions = getImagePositions()
    if (positions.length === 0) return { min: 0, max: 0 }

    const containerWidth = getContainerWidth()
    const totalWidth = positions[positions.length - 1].right

    return {
      min: 0,
      max: Math.max(0, totalWidth - containerWidth)
    }
  }

  function clampTranslate(translate) {
    const bounds = getBounds()
    return Math.max(bounds.min, Math.min(bounds.max, translate))
  }

  function updateTransform(translate, enableTransition = true) {
    if (enableTransition) {
      imageCarousel.style.transition =
        'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    } else {
      imageCarousel.style.transition = 'none'
    }
    imageCarousel.style.transform = `translateX(-${translate}px)`
  }

  function goToSlide(direction) {
    const containerWidth = getContainerWidth()
    const positions = getImagePositions()

    if (direction === 'next') {
      const target = findFirstHiddenOrPartialRight()
      if (target) {
        const newTranslate = target.right - containerWidth
        currentTranslate = Math.max(0, newTranslate)
      }
    } else if (direction === 'prev') {
      const target = findFirstHiddenOrPartialLeft()
      if (target) {
        currentTranslate = target.left
      } else if (currentTranslate > 0) {
        currentTranslate = 0
      }
    }

    updateTransform(currentTranslate)
    updateButtonVisibility()
  }

  function resetCarousel() {
    currentTranslate = 0
    updateTransform(currentTranslate)
    updateButtonVisibility()
  }

  // Button events
  prevSlideBtnMobile.addEventListener('click', () => goToSlide('prev'))
  nextSlideBtnMobile.addEventListener('click', () => goToSlide('next'))
  prevSlideBtnDesktop.addEventListener('click', () => goToSlide('prev'))
  nextSlideBtnDesktop.addEventListener('click', () => goToSlide('next'))

  const toggleMoreBtnDesktop = element.querySelector('.toggle-btn-desktop')
  if (toggleMoreBtnDesktop) {
    toggleMoreBtnDesktop.addEventListener('click', () => {
      setTimeout(resetCarousel, 100)
    })
  }

  window.addEventListener('resize', () => {
    updateButtonVisibility()
  })

  // Enhanced touch events
  imageCarousel.addEventListener(
    'touchstart',
    (e) => {
      const touch = e.touches[0]
      startX = touch.clientX
      startY = touch.clientY
      currentX = startX
      dragOffset = 0
      isDragging = false // Will be set to true in touchmove if horizontal
      startTime = Date.now()
      lastMoveTime = startTime
      velocity = 0
    },
    { passive: false }
  )

  imageCarousel.addEventListener(
    'touchmove',
    (e) => {
      const touch = e.touches[0]
      const deltaX = touch.clientX - startX
      const deltaY = touch.clientY - startY
      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)

      // Determine if this is a horizontal swipe
      if (!isDragging && absX > 10) {
        if (absX > absY) {
          isDragging = true
          e.preventDefault() // Prevent scrolling only after we're sure it's horizontal
        }
      }

      if (isDragging) {
        e.preventDefault()

        // Calculate velocity
        const now = Date.now()
        const timeDelta = now - lastMoveTime
        if (timeDelta > 0) {
          velocity = (touch.clientX - currentX) / timeDelta
        }

        currentX = touch.clientX
        lastMoveTime = now

        // Apply drag with some resistance at boundaries
        const rawOffset = deltaX
        const proposedTranslate = currentTranslate - rawOffset
        const bounds = getBounds()

        let finalOffset
        if (proposedTranslate < bounds.min) {
          // Resistance when dragging past left boundary
          const overscroll = bounds.min - proposedTranslate
          finalOffset = rawOffset - overscroll * 0.3
        } else if (proposedTranslate > bounds.max) {
          // Resistance when dragging past right boundary
          const overscroll = proposedTranslate - bounds.max
          finalOffset = rawOffset + overscroll * 0.3
        } else {
          finalOffset = rawOffset
        }

        dragOffset = finalOffset
        const newTranslate = currentTranslate - dragOffset
        updateTransform(newTranslate, false)
      }
    },
    { passive: false }
  )

  imageCarousel.addEventListener(
    'touchend',
    (e) => {
      if (!isDragging) return

      isDragging = false
      const endTime = Date.now()
      const swipeTime = endTime - startTime
      const swipeDistance = Math.abs(dragOffset)

      // Determine if we should snap to next/prev or return to original position
      const threshold = getContainerWidth() * 0.15 // 15% of container width
      const velocityThreshold = 0.5 // pixels per millisecond

      let shouldAdvance = false
      let direction = dragOffset > 0 ? 'prev' : 'next'

      // Check velocity for quick swipes
      if (Math.abs(velocity) > velocityThreshold && swipeTime < 300) {
        shouldAdvance = true
      }
      // Check distance for slower swipes
      else if (swipeDistance > threshold) {
        shouldAdvance = true
      }

      if (shouldAdvance) {
        // Check if we can actually go in that direction
        if (direction === 'next' && canGoNext()) {
          goToSlide('next')
        } else if (direction === 'prev' && canGoPrev()) {
          goToSlide('prev')
        } else {
          // Can't go in that direction, snap back
          updateTransform(currentTranslate)
        }
      } else {
        // Didn't meet threshold, snap back
        updateTransform(currentTranslate)
      }

      // Reset drag state
      dragOffset = 0
    },
    { passive: true }
  )

  // Prevent context menu on long press during drag
  imageCarousel.addEventListener('contextmenu', (e) => {
    if (isDragging) {
      e.preventDefault()
    }
  })

  updateButtonVisibility()
})
