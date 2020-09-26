// set date
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// close links
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links')
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height

  if (containerHeight === 0)
    linksContainer.style.height = `${linksHeight}px`
  else
    linksContainer.style.height = 0
})

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

// fixed navbar
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height
  if (scrollHeight > navHeight)
    navbar.classList.add('fixed-nav')
  else 
    navbar.classList.remove('fixed-nav')

  if (scrollHeight > 500)
    topLink.classList.add('show-link')
  else
    topLink.classList.remove('show-link')
})

// smooth scroll
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    // active link
    const active = document.querySelector('.active')
    console.log(element.classList);
    if (active) active.classList.remove('active')
    link.classList.add('active')
    
    // calculate of height
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight

    if (!fixedNav) position = position - navHeight
    if (navHeight > 82) position = position + containerHeight

    window.scrollTo({
      left: 0, top: position
    })
    linksContainer.style.height = 0 // close menu if click link in small device
  })
})
