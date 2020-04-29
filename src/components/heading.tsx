import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import UIKitLogo from '../images/svg/ui-kit-logo-v.svg';
import FigmaLogo from '../images/svg/figma-logo.svg';
import { useTranslation } from '../hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `0 ${theme.spacing(3)}px`,
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

    [theme.breakpoints.down('xs')]: {
      height: 120,
      marginTop: theme.spacing(9),
    },
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

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginTop: theme.spacing(4),

      '& > button + button': {
        marginLeft: 0,
        marginTop: theme.spacing(1.5),
      },
    },
  },
}));

const Heading = () => {
  const classes = useStyles();
  const { t } = useTranslation('heading');
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <Hidden xsDown>
        <Box display="flex" alignItems="center" mt={10} mb={15}>
          <FigmaLogo className={classes.figmaLogo} />
          <Typography variant="button">{t('figma')}</Typography>
        </Box>
      </Hidden>
      <UIKitLogo className={classes.uiKitLogo} />
      <Box maxWidth={720} mt={{ xs: 3, sm: 5 }}>
        <Typography className={classes.primaryHeader} variant={isXs ? 'h6' : 'h5'}>
          {t('primary_title')}
        </Typography>
        <Typography variant={isXs ? 'body2' : 'body1'} className={classes.secondaryHeader}>
          {t('secondary_title')}
        </Typography>
      </Box>
      <div className={classes.buttons}>
        <Button color="primary" size="large" variant="outlined">
          {t('docs_button')}
        </Button>
        <Button color="primary" size="large" variant="contained">
          {t('preview_button')}
        </Button>
      </div>
    </div>
  );
};

export default Heading;
