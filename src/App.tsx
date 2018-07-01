import * as React from 'react';

import Footer from './components/Footer/Footer.component';
import ConverterScreen from './pages/ConverterScreen/ConverterScreen.component';
// import LoadingScreen from './pages/LoadingScreen/LoadingScreen.page';


const App = () => <React.Fragment>
  <ConverterScreen />
  <Footer />
</React.Fragment>;

export default App;
