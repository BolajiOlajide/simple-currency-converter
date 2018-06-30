import * as React from 'react';

// styles
import './ConverterScreen.css';

// components
import Button from '../../components/Button/Button.component';
import SkeletonBody from '../../components/SkeletonBody/SkeletonBody.component';


class ConverterScreen extends React.Component {
  public render() {
    return (
      <SkeletonBody>
        <p>Welcome to converter screen</p>
        <Button label="CONVERT" />
      </SkeletonBody>
    );
  }
}

export default ConverterScreen;
