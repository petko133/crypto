import React, { createContext, useState } from 'react';
import Navbar from './components/UI/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleCoin from './Pages/SingleCoin';
import Error from './Pages/Error';
import Watchlist from './Pages/Watchlist';

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.token ? true : sessionStorage.token ? true : false
  );

  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear();
    }
  }

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn, changeLoggedIn]}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/coin/:id" element={<SingleCoin />}></Route>
          <Route exact path="/watchlist/:id" element={<Watchlist />}></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
