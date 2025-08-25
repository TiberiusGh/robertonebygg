const articles = document.querySelectorAll('article')

articles.forEach((article) => {
  const toggleMoreBtn = article.querySelector('.toggle-btn')
  const toggleMoreBtnDesktop = article.querySelector('.toggle-btn-desktop')
  const textContainer = article.querySelector('.text-container')
  const textContent = article.querySelector('.project-text-content')
  const exactHeight = textContent.scrollHeight
  const imageContainer = article.querySelector('.image-container')
  const imageCarousel = article.querySelector('.image-carousel')

  const prevSlideDesktopBtn = article.querySelector('.prev-slide-desktop')
  const nextSlideDesktopBtn = article.querySelector('.next-slide-desktop')

  const allImgs = article.querySelectorAll('img')

  function toggleTextContent(button) {
    const isExpanded = textContainer.dataset.expanded === 'true'
    const newState = !isExpanded

    textContainer.dataset.expanded = newState

    if (newState) {
      textContent.style.maxHeight = exactHeight + 'px'
      button.textContent = 'Visa mindre'
    } else {
      textContent.style.maxHeight = ''
      button.textContent = 'Se mer'
    }

    return newState
  }

  // Mobile button logic
  toggleMoreBtn.addEventListener('click', () => {
    toggleTextContent(toggleMoreBtn)
  })

  // Desktop button logic
  toggleMoreBtnDesktop.addEventListener('click', () => {
    const isExpanded = toggleTextContent(toggleMoreBtnDesktop)

    if (isExpanded) {
      article.classList.toggle('xl:flex')
      imageContainer.classList.toggle('xl:w-1/2')
      textContainer.classList.toggle('xl:w-1/2')
      imageCarousel.classList.toggle('gap-4')
      nextSlideDesktopBtn.classList.toggle('hidden')
      prevSlideDesktopBtn.classList.toggle('hidden')
      toggleImagesFullWidth()
    } else {
      article.classList.toggle('xl:flex')
      imageContainer.classList.toggle('xl:w-1/2')
      textContainer.classList.toggle('xl:w-1/2')
      imageCarousel.classList.toggle('gap-4')
      nextSlideDesktopBtn.classList.toggle('hidden')
      prevSlideDesktopBtn.classList.toggle('hidden')
      toggleImagesLessWidth()
    }
  })

  function toggleImagesFullWidth() {
    allImgs.forEach((img) => {
      img.classList.toggle('min-w-full')
      img.classList.add('rounded-md')
    })
  }

  function toggleImagesLessWidth() {
    allImgs.forEach((img) => {
      img.classList.toggle('min-w-full')
    })
  }
})
