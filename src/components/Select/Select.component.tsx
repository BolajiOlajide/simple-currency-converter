import * as React from 'react';

// styles
import './Select.css';


const Select = (props: any) => <div className="select">
  <label>{props.label}</label>
  <select value={props.value} onChange={props.onChange}>
    <option value="" key={0} disabled={true}>-</option>
    {
      props.items.map((item: any) => {
        const { currency, value } = item;
        return <option
          value={value} key={value}
        >
          {currency}
        </option>
      })
    }
  </select>
</div>;

export default Select;
