const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

// get json file
const searchCountries = async searchText => {
  const res = await fetch('./country.json')
  const countries = await res.json()

  let matches = countries.filter(c => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return c.CountryName.match(regex) || c.CountryCode.match(regex);
  })

  if(searchText.length === 0) {
    matches = []
    matchList.innerHTML = ''
  }

  output(matches)
}

// show result to HTML
const output = matches => {
  if (matches.length > 0) {
    const htmlResult = matches.map(match => `
      <div class="card">
        <h4>${match.CountryName} (${match.CountryCode}) <span>${match.CapitalName}</span></h4>
        <small>Lat: ${match.CapitalLatitude} / Long: ${match.CapitalLongitude} Continent: ${match.ContinentName}</small>
      </div>
    `).join('')

    matchList.innerHTML = htmlResult
  }
}

search.addEventListener('input', () => searchCountries(search.value))
