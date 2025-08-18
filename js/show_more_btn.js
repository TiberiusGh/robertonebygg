const articles = document.querySelectorAll('article')

articles.forEach((article) => {
  const toggleBtn = article.querySelector('.toggle-btn')
  const toggleBtnDesktop = article.querySelector('.toggle-btn-desktop')
  const textContainer = article.querySelector('.text-container')
  const textContent = article.querySelector('.project-text-content')
  const exactHeight = textContent.scrollHeight
  const imageContainer = article.querySelector('.image-container')
  const imageCarousel = article.querySelector('.image-carousel')

  toggleBtn.addEventListener('click', () => {
    if (textContent.classList.contains('max-h-44')) {
      textContent.classList.remove('max-h-44')
      textContent.style.maxHeight = exactHeight + 'px'
      toggleBtn.textContent = 'Visa mindre'
    } else {
      textContent.classList.add('max-h-44')
      textContent.style.maxHeight = ''
      toggleBtn.textContent = 'Se mer'
    }
  })

  // Desktop button logic
  toggleBtnDesktop.addEventListener('click', () => {
    if (textContent.classList.contains('max-h-44')) {
      textContent.classList.remove('max-h-44')
      textContent.style.maxHeight = exactHeight + 'px'
      toggleBtnDesktop.textContent = 'Visa mindre'
      article.classList.toggle('xl:flex')
      imageContainer.classList.toggle('xl:w-1/2')
      textContainer.classList.toggle('xl:w-1/2')
      imageCarousel.classList.toggle('gap-4')
      toggleImagesFullWidth()
    } else {
      textContent.classList.add('max-h-44')
      textContent.style.maxHeight = ''
      toggleBtnDesktop.textContent = 'Se mer'
    }
  })

  function toggleImagesFullWidth() {
    const allImgs = article.querySelectorAll('img')

    allImgs.forEach((img) => {
      img.classList.toggle('min-w-full')
    })
  }
})
