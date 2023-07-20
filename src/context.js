import axios from 'axios';
import React, { useContext, useState, createContext, useEffect } from 'react';
import { CoinList } from './components/config/api';

const Crypto = createContext();

const Context = ({ children }) => {
  const [currency, setCurrency] = useState('usd');
  const [symbol, setSymbol] = useState('$');
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [count, setCount] = useState(
    localStorage.watchlist ? localStorage.watchlist.split(',').length : 0
  );
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    type: 'success',
  });
  const [userWatchlist, setUserWatchlist] = useState(
    localStorage.getItem('watchlist')
  );

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency.toLocaleLowerCase()));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === 'INR') setSymbol('₹');
    else if (currency === 'USD') setSymbol('$');
  }, [currency]);

  useEffect(() => {
    fetchCoins();
  }, [userWatchlist]);

  return (
    <Crypto.Provider
      value={{
        currency,
        symbol,
        coins,
        loading,
        alert,
        userWatchlist,
				count,
				setCount,
        setUserWatchlist,
        setAlert,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default Context;

export const CryptoState = () => {
  return useContext(Crypto);
};
