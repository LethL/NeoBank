import Card from "../components/Card.js";
import Section from "../components/Section.js";

// get currencies

const currencies = ["USD", "EUR", "GBP", "THB", "CAD", "CNH"];
const mainCurrency = "RUB";

async function setCurrencies() {
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
      .then((data) => (currencySelector.textContent = data.toFixed(2)))
      .catch((err) => console.log(err));
  });
}

setCurrencies();
setInterval(setCurrencies, 900000);

// get news

const newsApiKey = "96da7fbe43e546f1941cae7b7a5fb5e7";

function createCard(data) {
  const card = new Card(
    {
      data: data,
    },
    "#template"
  );
  return card.generateCard();
}

const cardList = new Section(
  {
    renderer: (item) => {
      const card = createCard(item);
      cardList.addItem(card);
    },
  },
  ".swiper-wrapper"
);

fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`, {
  method: "GET",
  headers: {
    "X-Api-Key": newsApiKey,
    Authorization: newsApiKey,
  },
})
  .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)))
  .then((data) => cardList.renderItems(data.articles))
  .catch((err) => console.log(err));

// Slider
const swiper = new Swiper(".swiper", {
  observeParents: true,
  observeSlideChildren: true,
  observer: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    820: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 81,
    },
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
