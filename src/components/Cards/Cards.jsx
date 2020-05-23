import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import SentimentVeryDissatisfiedSharpIcon from '@material-ui/icons/SentimentVeryDissatisfiedSharp';import SentimentVerySatisfiedSharpIcon from '@material-ui/icons/SentimentVerySatisfiedSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';import CountUp from "react-countup";
import styles from './Cards.module.css';
import cx from 'classnames';
import Divider from '@material-ui/core/Divider';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate} }) => {
  if (!confirmed) {
    return 'Carregando...'
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography 
              className={styles.cardTitle} 
              gutterBottom>
                Infectados
                <PeopleAltSharpIcon className={styles.icon}/>
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
            </Typography>
            <Divider className={styles.hr} />
            <Typography className={styles.lastUpdate}>Última atualização: <b>{new Date(lastUpdate).toLocaleString('pt-br')}</b></Typography>
            <Divider className={styles.hr} />
            <Typography variant='body2'>Número de casos ativos de COVID-19 </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography 
              className={styles.cardTitle} 
              color='textSecondary' 
              gutterBottom>
                Curados 
              <SentimentVerySatisfiedSharpIcon className={styles.icon}/>
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
            </Typography>
            <Divider className={styles.hr} />
            <Typography className={styles.lastUpdate}>Última atualização: <b>{new Date(lastUpdate).toLocaleString('pt-br')}</b></Typography>
            <Divider className={styles.hr} />
            <Typography variant='body2'>Número de curados do COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography 
              className={styles.cardTitle} 
              color='textSecondary' 
              gutterBottom>
                Mortes 
              <SentimentVeryDissatisfiedSharpIcon className={styles.icon} />
            </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
            </Typography>
            <Divider className={styles.hr} />
            <Typography className={styles.lastUpdate}>Última atualização: <b>{new Date(lastUpdate).toLocaleString('pt-br')}</b></Typography>
            <Divider className={styles.hr} />
            <Typography variant='body2'>Número de mortes causadas pelo COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;