import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CodersCrewLogo from '../images/svg/coderscrew-logo.svg';
import FacebookIcon from '../images/svg/facebook-f-brands.svg';
import InstagramIcon from '../images/svg/instagram-brands.svg';
import WebsiteIcon from '../images/svg/globe-solid.svg';
import { useTranslation } from '../hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    padding: `0 ${theme.spacing(5)}px`,
    backgroundColor: theme.palette.grey[900],

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'unset',
      padding: theme.spacing(2),
    },
  },
  authors: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginBottom: theme.spacing(2),
    },
  },
  logo: {
    position: 'relative',
    top: -2,
    height: 20,
    width: 'auto',
    marginLeft: theme.spacing(2),

    [theme.breakpoints.down('xs')]: {
      height: 16,
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(1),
    },
  },
  socials: {
    display: 'flex',

    '& > a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: '100%',
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.common.white}`,

      '& + a': {
        marginLeft: theme.spacing(2),
      },

      '& svg': {
        width: 16,
        height: 16,
        fill: 'currentColor',
      },
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation('footer');

  return (
    <div className={classes.root}>
      <div className={classes.authors}>
        <Typography>{t('madeby')}</Typography>
        <a className={classes.logo} href="https://coderscrew.pl/" target="_blank" rel="noreferrer noopener">
          <CodersCrewLogo />
        </a>
      </div>
      <div className={classes.socials}>
        <a href="https://coderscrew.pl/" target="_blank" rel="noreferrer noopener">
          <WebsiteIcon />
        </a>
        <a href="https://www.facebook.com/ccrew18/" target="_blank" rel="noreferrer noopener">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/coderscrew.pl/" target="_blank" rel="noreferrer noopener">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
