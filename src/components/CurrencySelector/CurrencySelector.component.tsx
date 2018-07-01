import * as React from 'react';

// styles
import './CurrencySelector.css';

// components
import Select from '../Select/Select.component';


const CurrencySelector = (props: any) => <section className="selector-container">
  <Select
    label="From"
    items={props.items} value={props.currencyOneValue}
    onChange={props.currencyOneChange}
  />
  <span>↭</span>
  <Select
    label="To"
    items={props.items} value={props.currencyTwoValue}
    onChange={props.currencyTwoChange}
  />
</section>;

export default CurrencySelector;
