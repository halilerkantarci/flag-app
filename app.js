//* ================================================
//*                     FLAG-APP
//* ================================================

const fetchCountry = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      renderError(`Something went wrong !! : ${res.status}`);
      throw new Error();
    }
    const data = await res.json();
    renderCountry(data[0]);
  } catch (error) {
    console.log(error);
  }
};

const renderError = (err) => {
  const countriesDiv = document.querySelector(".countries");
  countriesDiv.innerHTML = `
     <h1 class="text-danger">${err}</h1>
     <img src="1.jpeg" alt="" />
    `;
};

const renderCountry = (country) => {
  console.log(country);
  const countriesDiv = document.querySelector(".countries");
  const { capital } = country;
  console.log(capital[0]);
};

fetchCountry("turkey");
