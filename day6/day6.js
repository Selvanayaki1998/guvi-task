let XML = new XMLHttpRequest();
XML.open("GET", "https://restcountries.com/v3.1/all");
XML.send();
XML.onload = function () {
  let data = XML.response;
  console.log(data);
  let parsedData = JSON.parse(data);
  // Get all the countries from Asia continent /region using Filter function
  let getAsiaData = parsedData.filter(
    (countries) => countries.region == "Asia" && countries.continents == "Asia"
  );
  // Get all the countries with a population of less than 2 lakhs using Filter function
  let getCountriesPopulation = parsedData.filter(
    (countries) => parseInt(countries.population) < 200000
  );
  console.log(getAsiaData);
  console.log(getCountriesPopulation);

  // forEach Print the following details name, capital, flag, using forEach function
  let getDataUsingForEach = [];
  parsedData.forEach((data) => {
    let countrie = {
      name: data.name,
      capital: data.capital,
      flag: data.flag,
    };
    getDataUsingForEach.push(countrie);
  });
  console.log(getDataUsingForEach);

  // Print the total population of countries using reduce function
  let totalPopulation = parsedData.reduce((acc, val, ind, accArr) => {
    return (acc += val.population);
  }, 0);
  console.log(totalPopulation);

  // Print the country that uses US dollars as currency

  let usDollarCountries = parsedData.filter((countries) => {
    if (countries.currencies && countries.currencies.hasOwnProperty("USD")) {
      console.log(countries.name.common);
    }
  });
};
