const toggle = document.getElementById("toggle")
let darkMode = localStorage.getItem("dark")
const sunIcon = '<i class="fas fa-sun"></i>'
const moonIcon = '<i class="fas fa-moon"></i>'

// check current icon theme
darkMode === "enabled" ? (toggle.innerHTML = sunIcon) : (toggle.innerHTML = moonIcon)

// enable dark mode
const enable = () => {
  document.documentElement.setAttribute("data-theme", "dark")
  localStorage.setItem("dark", "enabled")
}

// disable dark mode to light mode
const disable = () => {
  document.documentElement.setAttribute("data-theme", "light")
  localStorage.setItem("dark", null)
}

// check if dark mode enable run func enable
if (darkMode === "enabled") {
  enable()
}

// event click to change theme
toggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark")
  if (darkMode !== "enabled") {
    toggle.innerHTML = sunIcon
    enable()
  } else {
    toggle.innerHTML = moonIcon
    disable()
  }
})
