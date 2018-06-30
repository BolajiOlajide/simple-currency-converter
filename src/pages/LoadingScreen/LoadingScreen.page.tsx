import * as React from 'react';

// components
import SkeletonBody from '../../components/SkeletonBody/SkeletonBody.component';
import Spinner from '../../components/Spinner/Spinner.component';

// styles
import './LoadingScreen.css';


const LoadingScreen = () => <SkeletonBody>
  <h4 className="loading-tip">... getting data needed to start the converter...</h4>
  <Spinner />
</SkeletonBody>;

export default LoadingScreen;
