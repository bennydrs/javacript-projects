let sliderImages = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('#arrow-left')
let arrowRight = document.querySelector('#arrow-right')
let current = 0

function reset() {
  for(let i = 0; i < sliderImages.length; i++ ) {
    sliderImages[i].style.display = 'none'
  }
}

function startSlide() {
  reset()
  sliderImages[0].style.display = 'block'
}

// show prev
function slideRight() {
  reset()
  sliderImages[current + 1].style.display = 'block'
  current++
}

// show next
function slideLeft() {
  reset()
  sliderImages[current - 1].style.display = 'block'
  current--
}

arrowLeft.addEventListener('click', () => {
  if(current === 0) {
    current = sliderImages.length
  }
  slideLeft()
})

arrowRight.addEventListener('click', () => {
  if(current === sliderImages.length - 1) {
    current = -1
  }
  slideRight()
})

startSlide()

// // auto slide
// function run() {
//   current++

//   if (current > sliderImages.length - 1) {
//     current = -1
//   }

//   slideRight()

//   setTimeout(run, 5000);
// }

// run()
