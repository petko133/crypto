import React, { useEffect, useState } from 'react';
import classes from './Carousel.module.css';
import axios from 'axios';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../../context';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Container, NavLink } from 'react-bootstrap';

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h > 0;

    return (
      <NavLink className={classes['carousel-item']} href={`/coin/${coin.id}`}>
        <img
          key={coin.id}
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin.symbol}&nbsp;
          <span>
            {profit && '+'}
            {coin.price_change_percentage_24h.toFixed(2)}
          </span>
        </span>
        <span>
          {symbol} {coin.current_price.toFixed(2)}
        </span>
      </NavLink>
    );
  });

  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
  };

  return (
    <Container className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </Container>
  );
};

export default Carousel;
