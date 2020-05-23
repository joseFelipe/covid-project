import React from 'react';

import { Cards, Chart, CountryPicker, Profile } from './components';
import { Typography, Divider } from '@material-ui/core';
import styles from './App.module.css';
import { fetchData } from './api';

import logoCovid from './images/logo-herocode-covid-white.png';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    
    return (
      <div className={styles.container}>
        <img className={styles.image} src={logoCovid} alt='COVID-19' />
        <Divider className={styles.hr} />
        <Cards data={data}/>
        <div className={styles.containerLight}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country}/>
        </div>
        <div className={styles.container}>
          <Profile />
        </div>
        <div className={styles.footer}>
          <Typography variant="body2" color="" component="p">
            <p>Desenvolvido por <b>Felipe Silva</b></p>
          </Typography>
        </div>
      </div>
    )
  }
}

export default App;