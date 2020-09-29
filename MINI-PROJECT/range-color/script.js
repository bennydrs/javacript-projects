const colorsInput = document.querySelectorAll('input[type="range"]')
const colorsText = document.querySelectorAll('.color-text')
const values = document.querySelectorAll('.value')

colorsInput.forEach(color => {
  color.addEventListener('input', () => {
    const r = document.querySelector('.red').value
    const g = document.querySelector('.green').value
    const b = document.querySelector('.blue').value

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`

    colorsText.forEach(colorText => {
      if (r < 50 || g < 50 || b < 50) {
        colorText.style.color = '#fff'
      } else if (r > 200 || g > 200 || b > 200) {
        colorText.style.color = 'black'
      }
    })

    values[0].innerHTML = r
    values[1].innerHTML = g
    values[2].innerHTML = b
  })
})
