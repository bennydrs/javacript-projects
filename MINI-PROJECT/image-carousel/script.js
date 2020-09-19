const imgs = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')

let index = 0

function run() {
  index++

  if (index > img.length - 1) {
    index = 0
  }

  imgs.style.transform = `translateX(${-index * 800}px)`

  setTimeout(run, 2000);
}
run()
