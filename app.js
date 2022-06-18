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
    // veri, array olarak geldiği için,içindeki objeleri direkt gördük
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
  //! name objesini dest yaptım, name objesinin içinde common olduğu için nested bir dest yapısı kullanabilirim
  //* DEST
  const {
    capital,
    name: { common },
    region,
    flags: { svg },
    languages,
    currencies,
  } = country;
  console.log(
    capital[0],
    common,
    region,
    svg,
    Object.values(languages)[0],
    Object.values(currencies)[0].name,
    Object.values(currencies)[0].symbol
  );
  // languages propertisi içinde değişken bir object var. bu şekilde çağırabiliriz; array dönderdiği için [index number] kullanabiliriz.
  console.log(Object.values(languages));
  console.log(Object.values(currencies)[0].name);
};

fetchCountry("turkey");
