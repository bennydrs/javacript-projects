const ratings = {
  samsung: 4.7,
  apple: 4.8,
  huawei: 4.5,
  xiaomi: 4.3,
  oppo: 3.8,
  vivo: 3.7
}

// total stars
const starsTotal = 5

// run getRatings
document.addEventListener('DOMContentLoaded', getRatings)

// form
const productSelect = document.getElementById('product-select')
const ratingControl = document.getElementById('rating-control')

let product
productSelect.addEventListener('change', e => {
  product = e.target.value
  // enable rating control
  ratingControl.disabled = false
  ratingControl.value = ratings[product]
})

// rating control
ratingControl.addEventListener('blur', e => {
  const rating = e.target.value

  if (rating > 5) {
    alert('Please rate 1 - 5')
    return
  }
  // change rating
  ratings[product] = rating

  getRatings()
})

// get ratings
function getRatings() {
  for (let rating in ratings) {
    // get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100
    
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`
    
    // set stars-inner
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded

    // add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating]
  }
}
