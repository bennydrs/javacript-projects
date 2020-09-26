const lbsInput = document.getElementById('lbsInput')
const output = document.getElementById('output')

output.style.visibility = 'hidden'

lbsInput.addEventListener('input', e => {
  output.style.visibility = 'visible'
  const lbs = e.target.value
  document.getElementById('grOutput').innerHTML = `${lbs / 0.0022046} gr`
  document.getElementById('kgOutput').innerHTML = `${lbs / 2.2046} kg`
  document.getElementById('ozOutput').innerHTML = `${lbs * 16} oz`
})
