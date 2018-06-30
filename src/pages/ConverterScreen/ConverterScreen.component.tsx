import * as React from 'react';

// styles
import './ConverterScreen.css';

// components
import Button from '../../components/Button/Button.component';
import Header from '../../components/Header/Header.component';
import Input from '../../components/Input/Input.component';
import SkeletonBody from '../../components/SkeletonBody/SkeletonBody.component';


class ConverterScreen extends React.Component {
  public state = {
    amount: ''
  }

  public onChange = (event: any) => this.setState({
    [event.target.name]: event.target.value
  });

  public render() {
    const { amount } = this.state;

    return (
      <SkeletonBody>
        <Header rate="$0.07"/>
        <Input
          type="number" value={amount}
          name="amount" label="Amount" onChange={this.onChange}
        />
        <Button label="CONVERT" />
      </SkeletonBody>
    );
  }
}

export default ConverterScreen;
