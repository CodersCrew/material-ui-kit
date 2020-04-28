import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
  },
  logo: {
    position: 'relative',
    top: -2,
    height: 20,
    width: 'auto',
    marginLeft: theme.spacing(2),
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
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation('footer');

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" color="common.white">
        <Typography>{t('madeby')}</Typography>
        <CodersCrewLogo className={classes.logo} />
      </Box>
      <div className={classes.socials}>
        <a href="#">
          <WebsiteIcon />
        </a>
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
