import currencySymbolMapping from './symbolMapping';
import rateMapping from './rateMapping';

const getExchangeRate = (selectedFromCurrency, selectedToCurrency) => {
  const symbol = currencySymbolMapping[selectedToCurrency];
  if (selectedFromCurrency === selectedToCurrency) {
    return `${symbol}1`;
  }
  const exchangeRateMap = rateMapping.find((rateMap) => {
    return rateMap.selectedFromCurrency === selectedFromCurrency && rateMap.selectedToCurrency === selectedToCurrency;
  });
  return `${symbol}${exchangeRateMap.exchangeRate}`;
};

export default getExchangeRate;
