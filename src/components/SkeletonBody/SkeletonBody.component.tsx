import * as React from 'react';

// styles
import './SkeletonBody.css';


const SkeletonBody = (props: any) => <div className="container">
  {props.children}
</div>;

export default SkeletonBody;
