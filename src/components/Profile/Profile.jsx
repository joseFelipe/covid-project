import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Profile.module.css';
import imageFelipe from '../../images/Felipe.jpg';

import Divider from '@material-ui/core/Divider'
import CardActions from '@material-ui/core/CardActions';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import cx from 'classnames';

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
              Programador apaixonado por tecnologia e por café <span>☕️</span>
            </Typography>
          </CardContent>
          <Divider className={styles.hr} />
          <CardActions className={styles.cardActions}>
            <IconButton aria-label="Felipe facebook profile">
              <a href='https://www.facebook.com/felipe.silva.315865'>
              <FacebookIcon />
              </a>
            </IconButton>
            <IconButton aria-label="Felipe instagram profile">
              <a href='https://www.instagram.com/felipeearth/'>
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton aria-label="Felipe github repository">
              <a href='https://github.com/joseFelipe'>
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton aria-label="Felipe linkedin profile">
              <a href='https://www.linkedin.com/in/felipe-silva-b613aa57/'>
                <LinkedInIcon />
              </a>
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </>
  )
}

export default Profile;