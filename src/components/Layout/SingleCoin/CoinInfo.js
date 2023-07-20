import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './CoinInfo.module.css';
import { useParams } from 'react-router-dom';
import { CryptoState } from '../../../context';
import axios from 'axios';
import { SingleCoin } from '../../config/api';
// import { singleCoin } from '../../config/data';
import CoinChart from './CoinChart';
import ReactHtmlParser from 'react-html-parser';
import { Button } from 'react-bootstrap';
import { baseUrl } from '../../../shared';
import { LoginContext } from '../../../App';

const CoinInfo = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol, count, setCount } = CryptoState();

  const fetchCoin = async () => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleWatchlist = async (e) => {
    e.preventDefault();
    try {
      if (!loggedIn) {
        return alert('Please log in to add items to your watchlist.');
      }
      const data = {
        coinId: id,
        userId: sessionStorage.userId
          ? sessionStorage.userId
          : localStorage.userId,
      };
      const response = await axios.post(baseUrl + `coin/${id}`, data);
      setCount(count + 1);
      alert(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <Container className={classes.container}>
      {!coin ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Row className={classes.row}>
            <Col className={classes.image}>
              <img src={coin.image.large} alt={coin.name} />
            </Col>
            <Col>
              <h1 className={classes.header}>{coin.name}</h1>
              <p className={classes['p-text']}>
                {ReactHtmlParser(coin.description.en.split('. ')[0])}
              </p>
              <h2>Rank: {coin.market_cap_rank}</h2>
              <h2>
                Current Price: {symbol}{' '}
                {coin.market_data.current_price[currency.toLowerCase()]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </h2>
              <h2>
                Market Cap: {symbol}{' '}
                {coin.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                M
              </h2>
              <Button className={classes.button} onClick={handleWatchlist}>
                Add to Watchlist
              </Button>
            </Col>
          </Row>
          <CoinChart coin={coin} />
        </>
      )}
    </Container>
  );
};

export default CoinInfo;
