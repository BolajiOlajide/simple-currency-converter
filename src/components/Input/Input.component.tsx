import * as React from 'react';

// styles
import './Input.css';


const Input = (props: any) => <input
  type="number" value={props.value} name="amount"
/>;

export default Input;