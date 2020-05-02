import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import localStylesImg from '../images/local-styles.png';
import componentsImg from '../images/components.png';
import iconsImg from '../images/icons.png';
import { useTranslation } from '../hooks';
import InsideItem from './inside-item';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1400,
    padding: `0 ${theme.spacing(3)}px`,
    margin: '0 auto',
  },
  content: {
    display: 'grid',
    gridGap: theme.spacing(5),
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    marginTop: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      gridGap: theme.spacing(3),
    },

    [theme.breakpoints.down('sm')]: {
      gridGap: theme.spacing(5),
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
}));

const Inside = () => {
  const classes = useStyles();
  const { t } = useTranslation('inside');

  const items = [
    {
      title: t('item1_title'),
      description: t('item1_description'),
      image: localStylesImg,
    },
    {
      title: t('item2_title'),
      description: t('item2_description'),
      image: componentsImg,
    },
    {
      title: t('item3_title'),
      description: t('item3_description'),
      image: iconsImg,
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        {t('heading')}
      </Typography>
      <div className={classes.content}>
        {items.map((item) => (
          <InsideItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Inside;
