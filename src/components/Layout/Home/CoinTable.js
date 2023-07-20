import React, { useEffect, useState } from 'react';
import { CryptoState } from '../../../context';
import { CoinList } from '../../config/api';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import classes from './CoinTable.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const CoinTable = () => {
  const [tableData, setTableData] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchData = async () => {
    const data = await axios.get(CoinList(currency));
    setTableData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const paginationOptions = {
    hideSizePerPage: true,
  };

  const tableImage = (cell, row) => {
    return (
      <a href={`/coin/${row.id}`} className={classes.links}>
        <div key={row.id} className={classes['coin-name']}>
          <img className={classes['table-image']} src={cell} alt={row.name} />
          <p className={classes['p-margin']}>{row.name}</p>
        </div>
      </a>
    );
  };

  const priceFormatter = (cell, row) => {
    const price = cell.toFixed(2);
    return (
      <a href={`/coin/${row.id}`} className={classes.links}>
        <div>
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
            ` ${symbol}`}
        </div>
      </a>
    );
  };

  const marketCapFormatter = (cell, row) => {
    return (
      <a href={`/coin/${row.id}`} className={classes.links}>
        <div>
          {cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ` ${symbol}`}
        </div>
      </a>
    );
  };

  const changeFormatter = (cell, row) => {
    const change = cell.toFixed(4);
    return (
      <a href={`/coin/${row.id}`} className={cell > 0 ? classes['links-green'] : classes['links-red']}>
        <div>{change.toString() + ` %`}</div>
      </a>
    );
  };

  const columns = [
    {
      dataField: 'image',
      text: 'Coin',
      formatter: tableImage,
      classes: classes['col-color'],
      headerClasses: classes['header-color'],
    },
    {
      dataField: 'current_price',
      text: 'Price',
      classes: classes['col-color'],
      headerClasses: classes['header-color'],
      formatter: priceFormatter,
    },
    {
      dataField: 'price_change_percentage_24h',
      text: '24h Change',
      classes: classes['col-color'],
      formatter: changeFormatter,
      style: (cell) => {
        if (cell < 0) {
          return { color: 'red' };
        } else {
          return { color: 'green' };
        }
      },
      headerClasses: classes['header-color'],
    },
    {
      dataField: 'market_cap',
      text: 'Market Cap',
      formatter: marketCapFormatter,
      classes: classes['col-color'],
      headerClasses: classes['header-color'],
    },
  ];

  return (
    <Container>
      <h1 className={classes['market-cap']}>Market Cap</h1>
      <BootstrapTable
        classes={classes['coin-table']}
        keyField="coin"
        data={tableData}
        columns={columns}
        pagination={paginationFactory(paginationOptions)}
      />
    </Container>
  );
};

export default CoinTable;
