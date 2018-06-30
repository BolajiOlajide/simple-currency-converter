import * as React from 'react';

import './Button.css';


const Button = (props: any) => <button onClick={props.onClick}>{props.label}</button>;

export default Button;
