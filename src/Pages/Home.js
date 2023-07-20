import React from 'react';
import Banner from '../components/Layout/Home/Banner';
import CoinTable from '../components/Layout/Home/CoinTable';
import ChooseUs from '../components/Layout/Home/ChooseUs';
import JoinUs from '../components/Layout/Home/JoinUs';
import Footer from '../components/Layout/Home/Footer';

const Home = () => {
  return (
    <>
      <Banner />
      <CoinTable />
      <ChooseUs />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Home;
