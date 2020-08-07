/* import React from 'react';

import './assets/styles/global.css';


function App() {
  return <Routes />;
} */

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';
import Routes from './pages/routes';
import GlobalStyled from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyled />
  </Router>
);

export default App;
