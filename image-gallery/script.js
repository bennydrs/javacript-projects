const current = document.getElementById('current')
const imgs = document.querySelectorAll('.imgs img')
const opacity = 0.6

// set first img opacity
imgs[0].style.opacity = opacity

imgs.forEach(img => {
  img.addEventListener('click', imgClick)
})

function imgClick(e) {
  // reset opacity
  imgs.forEach(img => (img.style.opacity = 1))

  // change current image
  current.src = e.target.src

  // add animation fade-in
  current.classList.add('fade-in')

  // remove fade-in
  setTimeout(() => current.classList.remove('fade-in'), 500)

  // opacity
  e.target.style.opacity = opacity
}
