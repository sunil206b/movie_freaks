import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/home/NotFound';
import Login from './components/login/Login';
import Movie from './components/movie/Movie';

import UserProvider from "./context";
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <GlobalStyles />
      </UserProvider>
    </Router>
  );
}

export default App;
