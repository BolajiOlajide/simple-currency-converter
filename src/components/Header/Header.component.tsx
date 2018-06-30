import * as React from 'react';


const Header = (props: any) => <React.Fragment>
  <span>Exchange Rate</span>
  <span>{props.rate}</span>
</React.Fragment>;

export default Header;
