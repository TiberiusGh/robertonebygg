// Handle file upload disabled since netlify caps form at low file size uppload but migh implement again if client pays for higher netlify tier
// let fileCounter = 1

// filBtn.addEventListener('click', function () {
//   // Always create a new input for each file
//   const newInput = document.createElement('input')
//   newInput.type = 'file'
//   newInput.name = `file${fileCounter}`
//   newInput.className = 'hidden'

//   newInput.addEventListener('change', function (e) {
//     if (e.target.files[0]) {
//       // Add to container so it gets submitted
//       fileInputContainer.appendChild(newInput)

//       // Update display
//       updateFileDisplay()

//       // Increment counter for next file
//       fileCounter++
//     }
//   })

//   // Trigger file selection immediately
//   newInput.click()
// })

// function updateFileDisplay() {
//   const allInputs = document.querySelectorAll(
//     '#file-inputs-container input[type="file"]'
//   )
//   const selectedFiles = []

//   allInputs.forEach((input) => {
//     if (input.files[0]) {
//       selectedFiles.push(input.files[0])
//     }
//   })

//   if (selectedFiles.length > 0) {
//     fileList.replaceChildren()
//     fileList.classList.remove('hidden')

//     selectedFiles.forEach((file) => {
//       const fileItem = document.createElement('div')
//       fileItem.textContent = `📎 ${file.name} (${(file.size / 1024).toFixed(
//         1
//       )} KB)`
//       fileItem.className = 'py-1'
//       fileList.appendChild(fileItem)
//     })
//   } else {
//     fileList.classList.add('hidden')
//   }
// }
