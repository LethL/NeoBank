import React, { useEffect, useState } from "react";
import "./ExchangeList.css";
import bankLogo from "../../../../images/bank-logo.svg";
import { CurrenciesEntity } from "../../../../domains/Currencies.entity";

export default function ExchangeList() {
  const mainCurrency = "RUB";
  const currenciesList: CurrenciesEntity = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    THB: 0,
    CAD: 0,
    CNH: 0,
  };
  const [currencies, setCurrencies] = useState({ currenciesList });

  useEffect(() => {
    let tempCurrenciesList: CurrenciesEntity = {};
    for (let key in currenciesList) {
      fetch(
        `https://currency-exchange.p.rapidapi.com/exchange?from=${key}&to=${mainCurrency}&q=1.0`,
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
        .then((data) => {
          tempCurrenciesList[key] = data.toFixed(2);
          setCurrencies({ currenciesList: tempCurrenciesList });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <section className="exchange">
      <div className="exchange__wrapper">
        <div className="exchange__content">
          <h2 className="section-title">Exchange rate in internet bank</h2>
          <p className="exchange__currency">Currency</p>
          <div className="exchange__rate">
            {Object.keys(currencies.currenciesList).map((currency) => (
              <p className="exchange__rate-item" key={currency}>
                {currency}:
                <span
                  className="exchange__rate-item exchange__rate-item_black"
                  id="usd"
                >
                  {currencies.currenciesList[currency]}
                </span>
              </p>
            ))}
          </div>
          <a className="exchange__link" target="_blank" href="#">
            All courses
          </a>
        </div>
        <div className="exchange__info">
          <p className="exchange__info-text">
            Update every 15 minutes, MSC 09.08.2022
          </p>
          <img className="exchange__img" src={bankLogo} alt="bank image" />
        </div>
      </div>
    </section>
  );
}
