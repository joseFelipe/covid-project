import React from 'react';

import { Card, CardContent, Typography, Grid, Divider,
          IconButton, CardActions } from '@material-ui/core';
import { Facebook, Instagram, GitHub,
          LinkedIn } from '@material-ui/icons';
import cx from 'classnames';
import styles from './Profile.module.css';
import imageFelipe from '../../images/Felipe.jpg';

const Profile = () => {

  return (
    <>
      <Grid className={styles.container} container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md className={cx(styles.card)}>
          <CardContent>
            <img 
              style={{ borderRadius: "50%", width: 150, border: '1px solid rgba(2, 218, 56, 0.8)' }}
              src={imageFelipe} 
              alt='Foto perfil Felipe'
            />
            <Typography 
              variant='h5'
              className={styles.cardTitle} 
              gutterBottom>
                Felipe Silva
            </Typography>
            <Typography variant="body2" color="" component="p">
              Programador apaixonado por tecnologia e por café <span aria-label="Emoji coffee" role="img">☕️</span>
            </Typography>
          </CardContent>
          <Divider className={styles.hr} />
          <CardActions className={styles.cardActions}>
            <IconButton aria-label="Felipe facebook profile">
              <a href='https://www.facebook.com/felipe.silva.315865'>
              <Facebook />
              </a>
            </IconButton>
            <IconButton aria-label="Felipe instagram profile">
              <a href='https://www.instagram.com/felipeearth/'>
                <Instagram />
              </a>
            </IconButton>
            <IconButton aria-label="Felipe github repository">
              <a href='https://github.com/joseFelipe'>
                <GitHub />
              </a>
            </IconButton>
            <IconButton aria-label="Felipe linkedin profile">
              <a href='https://www.linkedin.com/in/felipe-silva-b613aa57/'>
                <LinkedIn />
              </a>
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </>
  )
}

export default Profile;