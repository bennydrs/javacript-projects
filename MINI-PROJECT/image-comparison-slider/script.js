const slider = document.querySelector('input')
const dragLine = document.querySelector('.drag-line')
const img = document.querySelector('.img-2')

slider.oninput = () => {
  let sliderVal = slider.value
  // drag slider
  dragLine.style.left = sliderVal + '%'
  // change image when slide
  img.style.width = sliderVal + '%'
}
