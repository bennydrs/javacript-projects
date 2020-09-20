let count = 0

const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    if(styles.contains('decrease')) {
      count--
    } else if(styles.contains('increase')) {
      count++
    } else {
      count = 0
    }
    if(count > 0) value.style.color = '#00e0ff'
    if(count < 0) value.style.color = '#d72323'
    if(count === 0) value.style.color = '#eeeeee'
    value.textContent = count
  })
});
