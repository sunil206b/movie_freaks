import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyles />
    </div>
  );
}

export default App;
