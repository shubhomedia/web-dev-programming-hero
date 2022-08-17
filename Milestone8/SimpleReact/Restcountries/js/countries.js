const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countryHTML = countries.map(country => getCountryHTML(country));
    console.log(countryHTML);
}

const getCountryHTML = country => {
    return `
        <div>
        <h2>${country.name}</h2>
        <h4>Capital: ${country.capital}</h4>
        <img src="${country.flag}">
        </div>
    `
}

loadCountries();