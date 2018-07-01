import * as React from 'react';

// styles
import './Header.css';


const Header = (props: any) => <div className="header">
  <span>Exchange Rate</span>
  <span className="rate">{props.rate}</span>
</div>;

export default Header;
