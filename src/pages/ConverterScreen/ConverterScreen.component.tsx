import * as React from 'react';

// styles
import './ConverterScreen.css';

// components
import Button from '../../components/Button/Button.component';
import CurrencySelector from '../../components/CurrencySelector/CurrencySelector.component';
import Header from '../../components/Header/Header.component';
import Input from '../../components/Input/Input.component';
import SkeletonBody from '../../components/SkeletonBody/SkeletonBody.component';

// third-party libraries
import * as toastr from 'toastr';

// utils
import getExchangeRate from '../../utils/convertCurrency';


class ConverterScreen extends React.Component {
  public state = {
    amount: '',
    exchangeRate: 0,
    items: [
      { currency: '🇳🇬 NGN', value: 'NGN' },
      { currency: '🇺🇸 USA', value: 'USD'},
      { currency: '🇰🇪 KSH', value: 'KSH' }
    ],
    selectedFromCurrency: '',
    selectedToCurrency: ''
  }

  public onChange = (event: any) => this.setState({
    [event.target.name]: event.target.value
  });

  public currencyOneChange = (event: any) => {
    const { selectedToCurrency } = this.state;

    const newState = {
      selectedFromCurrency: event.target.value
    }

    let exchangeRate;
    if (selectedToCurrency) {
      exchangeRate = getExchangeRate(event.target.value, selectedToCurrency);
      // tslint:disable-next-line
      newState['exchangeRate'] = exchangeRate;
    }

    this.setState(newState);

    return false;
  }

  public currencyTwoChange = (event: any) => {
    const { selectedFromCurrency } = this.state;

    const exchangeRate = getExchangeRate(selectedFromCurrency, event.target.value);

    this.setState({
      exchangeRate,
      selectedToCurrency: event.target.value
    });

    return false;
  }

  public displayError = (message: string) => {
    return toastr.error(message);
  }

  public convertCurrency = () => {
    const {
      amount, selectedFromCurrency, selectedToCurrency
    } = this.state;

    const formattedAmount = parseFloat(amount);

    if (!formattedAmount) {
      this.displayError('Please enter a valid amount.');
      return false;
    }

    if (!(selectedFromCurrency && selectedToCurrency)) {
      this.displayError('Please select the currency you\'d like to convert to and from.');
      return false;
    }

    return false;
  }

  public render() {
    const {
      amount, items, selectedFromCurrency, selectedToCurrency, exchangeRate
    } = this.state;

    return (
      <SkeletonBody>
        <Header rate={exchangeRate} />
        <Input
          type="number" value={amount}
          name="amount" label="Amount" onChange={this.onChange}
        />
        <CurrencySelector
          items={items} currencyOneValue={selectedFromCurrency}
          currencyTwoValue={selectedToCurrency}
          currencyOneChange={this.currencyOneChange}
          currencyTwoChange={this.currencyTwoChange} />
        <Button label="CONVERT" onClick={this.convertCurrency.bind(this, 'Sample')} />
      </SkeletonBody>
    );
  }
}

export default ConverterScreen;
