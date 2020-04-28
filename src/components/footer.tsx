import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    backgroundColor: theme.palette.grey[900],
  },
}));

const Footer = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default Footer;
