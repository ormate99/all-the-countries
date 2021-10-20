async function loadEvent() {
    const rootElement = document.getElementById('root');

    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    console.log(countries);

    for (const country of countries) {
        const countryHTML = `
        <section class="independent">
            <img src="${country.flags.png}" alt="flag">
            <h1>${country.name.official}</h1>
            <h2>${country.capital}</h2>
        </section>
        `;

        rootElement.insertAdjacentHTML('beforeend', countryHTML);
    }

  /*  console.log(peru);
    
    const country = peru[0];
    console.log(country);

    const peruHTML = `
        <section class="independent">
            <img src="${country.flags.png}" alt="flag">
            <h1>${country.name.official}</h1>
            <h2>${country.capital}</h2>
            <ul>
                <li>First language</li>
            </ul>
            <!-- ha landlocked true:  <h5>I've never met the sea</h5> -->
        </section>
    `;

    console.log(rootElement);
    
rootElement.insertAdjacentHTML('beforeend', peruHTML);*/
}

window.addEventListener("load", loadEvent);