import * as React from 'react';

// styles
import './ConverterScreen.css';

// components
import Button from '../../components/Button/Button.component';
import CurrencySelector from '../../components/CurrencySelector/CurrencySelector.component';
import Header from '../../components/Header/Header.component';
import Input from '../../components/Input/Input.component';
import SkeletonBody from '../../components/SkeletonBody/SkeletonBody.component';


class ConverterScreen extends React.Component {
  public state = {
    amount: '',
    items: [
      { currency: '🇳🇬 NGN', value: 'NGN' },
      { currency: '🇺🇸 USA', value: 'USD'},
      { currency: '🇰🇪 KSH', value: 'KSH' },
      { currency: '🇨🇳 YEN', value: 'YEN'}
    ],
    selectedFromCurrency: '',
    selectedToCurrency: '',
  }

  public onChange = (event: any) => this.setState({
    [event.target.name]: event.target.value
  });

  public currencyOneChange = (event: any) => this.setState({
    selectedFromCurrency: event.target.value
  });

  public currencyTwoChange = (event: any) => this.setState({
    selectedToCurrency: event.target.value
  });

  public render() {
    const {
      amount, items, selectedFromCurrency, selectedToCurrency
    } = this.state;

    return (
      <SkeletonBody>
        <Header rate="$0.07"/>
        <Input
          type="number" value={amount}
          name="amount" label="Amount" onChange={this.onChange}
        />
        <CurrencySelector
          items={items} currencyOneValue={selectedFromCurrency}
          currencyTwoValue={selectedToCurrency}
          currencyOneChange={this.currencyOneChange}
          currencyTwoChange={this.currencyTwoChange} />
        <Button label="CONVERT" />
      </SkeletonBody>
    );
  }
}

export default ConverterScreen;
