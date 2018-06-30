import * as React from 'react';

// styles
import './Input.css';


const Input = (props: any) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <input
        type={props.type || "text"} value={props.value}
        name={props.name} onChange={props.onChange}
      />
    </React.Fragment>
  );
};

export default Input;