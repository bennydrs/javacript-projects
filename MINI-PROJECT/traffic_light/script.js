const circles = document.querySelectorAll('.circle')
let activeLight = 0
let interval = 1000

const changeLight = () => {
  circles[activeLight].className = 'circle'
  activeLight++

  if (activeLight > 2) activeLight = 0

  const currentLight = circles[activeLight]
  const currentColor = currentLight.dataset.color
  currentLight.classList.add(currentColor)

  if (currentColor !== 'yellow') interval = 3000
  
  setTimeout(changeLight, interval)
}

changeLight()
