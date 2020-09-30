const circles = document.querySelectorAll('.circle')
let activeLight = 0

let interval = setTimeout(changeLight, 0)

function changeLight() {
  circles[activeLight].className = 'circle'
  activeLight++

  if (activeLight > 2) activeLight = 0

  const currentLight = circles[activeLight]
  
  currentLight.classList.add(currentLight.getAttribute('color'))
  
  if (currentLight.getAttribute('color') !== 'yellow') {
    interval = setTimeout(changeLight, 4000)
  } else {
    interval = setTimeout(changeLight, 1000)
  }
}
