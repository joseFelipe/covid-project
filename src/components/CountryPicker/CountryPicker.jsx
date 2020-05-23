import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl, InputLabel } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <InputLabel className={styles.inputLabel} shrink>
          País
        </InputLabel>
        <NativeSelect className={styles.selectFont} defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
          <option value=''>Todos</option>
          {fetchedCountries.map((country, i) => <option id={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>

    </div>
  )
}

export default CountryPicker;