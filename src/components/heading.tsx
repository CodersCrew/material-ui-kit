import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import UIKitLogo from '../images/svg/ui-kit-logo.svg';
import FigmaLogo from '../images/svg/figma-logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content',
    textAlign: 'center',
  },
  figmaLogo: {
    height: 40,
    width: 'auto',
    marginRight: theme.spacing(2),
  },
  uiKitLogo: {
    height: 160,
    width: 'auto',
  },
  primaryHeader: {
    fontWeight: 500,
  },
  secondaryHeader: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(1),
  },
  buttons: {
    display: 'flex',
    marginTop: theme.spacing(8),

    '& > button + button': {
      marginLeft: theme.spacing(1.5),
    },
  },
}));

const Heading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" mt={10} mb={15}>
        <FigmaLogo className={classes.figmaLogo} />
        <Typography variant="button">Made for Figma</Typography>
      </Box>
      <UIKitLogo className={classes.uiKitLogo} />
      <Box maxWidth={720} mt={5}>
        <Typography className={classes.primaryHeader} variant="h5">
          Design faster, code easier
        </Typography>
        <Typography variant="body1" className={classes.secondaryHeader}>
          Prototype quickly and turn mock-ups into a fully functional app with a complex set of UI elements
        </Typography>
      </Box>
      <div className={classes.buttons}>
        <Button color="primary" size="large" variant="outlined">
          Read the docs
        </Button>
        <Button color="primary" size="large" variant="contained">
          Preview and download
        </Button>
      </div>
    </div>
  );
};

export default Heading;
