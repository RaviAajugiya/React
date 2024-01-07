import { useEffect, useState } from "react"

function useCurrency(currency){
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then(res => res.json())
      .then(res => setCurrencyData(res[currency]));
    }, [currency])
    return currencyData;
}

export default useCurrency;
