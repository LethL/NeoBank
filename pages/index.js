const currencies = ["USD", "EUR", "GBP", "THB", "CAD", "CNH"];
const mainCurrency = "RUB";

async function getCurrencies() {
  currencies.forEach((currency) => {
    const currencySelector = document.querySelector(
      `#${currency.toLowerCase()}`
    );
    fetch(
      `https://currency-exchange.p.rapidapi.com/exchange?from=${currency}&to=${mainCurrency}&q=1.0`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fadcacf7femsh373536bc36696e7p191e2ejsn040483fdbe41",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      }
    )
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
      )
      .then((data) => (currencySelector.innerHTML = data.toFixed(2)))
      .catch((err) => console.log(err));
  });
}

getCurrencies();
setInterval(getCurrencies, 900000);
