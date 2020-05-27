import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl, InputLabel } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
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
              inputProps={{
                name: 'country',
                id: 'filled-age-native-simple',
              }}
            >
              <option className={styles.allSelect} aria-label="None" value="">Todos</option>
              {fetchedCountries.map((country, i) => <option id={i} value={country}>{country}</option>)}
            </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default CountryPicker;