import currencySymbolMapping from './symbolMapping';

const getExchangeRate = (selectedFromCurrency, selectedToCurrency) => {
  // tslint:disable-next-line
  console.log(currencySymbolMapping, selectedToCurrency);
  const symbol = currencySymbolMapping[selectedToCurrency];
  return symbol;
};

export default getExchangeRate;
