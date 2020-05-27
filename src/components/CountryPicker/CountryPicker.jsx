import React, { useState, useEffect} from 'react';
import { FormControl, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';

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
      <div>
        <FormControl className={styles.formControl} variant="filled">
          <InputLabel className={styles.inputLabel} shrink>
            País
          </InputLabel>
            <Select
              native
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              <option aria-label="None" value="">Todos</option>
              {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default CountryPicker;