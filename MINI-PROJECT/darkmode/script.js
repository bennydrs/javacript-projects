const toggle = document.getElementById('toggle')
let darkMode = localStorage.getItem('dark');

const enable = () => {
  document.body.classList.add('dark')
  localStorage.setItem('dark', 'enabled')
}

const disable = () => {
  document.body.classList.remove('dark')
  localStorage.setItem('dark', null)
}

if(darkMode === 'enabled') {
  enable()
}

toggle.addEventListener('change', (e) => {
  darkMode = localStorage.getItem('dark');
  if (darkMode !== 'enabled') {
    enable()
  } else {
    disable()
  }
})
