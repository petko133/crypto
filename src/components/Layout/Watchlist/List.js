import React, { useEffect } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import classes from './List.module.css';
import { CryptoState } from '../../../context';
import axios from 'axios';
import { baseUrl } from '../../../shared';

const List = () => {
  const { coins, userWatchlist, setUserWatchlist, setCount, count } =
    CryptoState();

  const getWatchlist = async () => {
    try {
      const response = await axios.get(
        baseUrl + `watchlist/${localStorage.userId}`
      );
      console.log(response);
      sessionStorage.setItem('watchlist', response.data.watchlist);
      localStorage.setItem('watchlist', response.data.watchlist);
      setUserWatchlist(response.data.watchlist);
      setCount(
        localStorage.watchlist ? localStorage.watchlist.split(',').length : 0
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWatchlist();
  }, []);

  const handleRemove = async (coin) => {
    const data = { coinId: coin, userId: localStorage.userId };
    const response = await axios.post(baseUrl + 'delete', data);
    sessionStorage.setItem('watchlist', response.data.watchlist);
    localStorage.setItem('watchlist', response.data.watchlist);
    setCount(count - 1);
    setUserWatchlist(response.data.watchlist);
    console.log(response);
  };

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>Your Watchlist:</h1>
      {!count ? (
        <ListGroup>
          <ListGroup.Item>
            <h3 className={classes['list-content']}>
              You have 0 Coins in your watchlist. Click on a Coin to see details
              or add to the watchlist.
            </h3>
          </ListGroup.Item>
        </ListGroup>
      ) : (
        <ListGroup>
          {coins.map((coin) => {
            if (userWatchlist.includes(coin.id)) {
              return (
                <ListGroup.Item key={coin.id}>
                  <h3 className={classes['list-content']}>
                    <img
                      className={classes.image}
                      src={coin.image}
                      alt={coin.name}
                    />
                    {coin.name}:{' '}
                    {coin.current_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' $'}
                  </h3>
                  <Button
                    className={classes.button}
                    onClick={() => handleRemove(coin.id)}
                  >
                    <FaTrash />
                  </Button>
                </ListGroup.Item>
              );
            } else {
              return '';
            }
          })}
        </ListGroup>
      )}
    </Container>
  );
};

export default List;
