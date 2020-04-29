import React, { ComponentType } from 'react';
import { transparentize } from 'polished';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: transparentize(0.92, theme.palette.primary.main),
    color: theme.palette.primary.main,
  },
  title: {
    marginTop: theme.spacing(1),
  },
  description: {
    marginTop: theme.spacing(1),
  },
}));

export type ProfitProps = {
  icon: ComponentType;
  title: string;
  description: string;
};

const Profit = ({ icon, title, description }: ProfitProps) => {
  const classes = useStyles();
  const IconComponent = icon;

  return (
    <div className={classes.root}>
      <div className={classes.iconWrapper}>
        <IconComponent />
      </div>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Typography color="textSecondary" className={classes.description}>
        {description}
      </Typography>
    </div>
  );
};

export default Profit;
