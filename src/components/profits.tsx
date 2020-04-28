import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CategoryIcon from '@material-ui/icons/CategoryOutlined';
import BrushIcon from '@material-ui/icons/BrushOutlined';
import MoodIcon from '@material-ui/icons/MoodOutlined';
import CodeIcon from '@material-ui/icons/CodeOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModuleOutlined';
import TuneIcon from '@material-ui/icons/TuneOutlined';
import Profit, { ProfitProps } from './profit';
import { useTranslation } from '../hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1120,
    margin: '0 auto',
    textAlign: 'center',
  },
  content: {
    display: 'grid',
    gridGap: `${theme.spacing(8)}px ${theme.spacing(10)}px`,
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: theme.spacing(8),
  },
}));

const Profits = () => {
  const classes = useStyles();
  const { t } = useTranslation('profits');

  const profits: ProfitProps[] = [
    {
      title: t('components_label'),
      description: t('components_description'),
      icon: CategoryIcon,
    },
    {
      title: t('icons_label'),
      description: t('icons_description'),
      icon: MoodIcon,
    },
    {
      title: t('styles_label'),
      description: t('styles_description'),
      icon: BrushIcon,
    },
    {
      title: t('development_label'),
      description: t('development_description'),
      icon: CodeIcon,
    },
    {
      title: t('modular_label'),
      description: t('modular_description'),
      icon: ViewModuleIcon,
    },
    {
      title: t('customizable_label'),
      description: t('customizable_description'),
      icon: TuneIcon,
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h4">{t('heading')}</Typography>
      <div className={classes.content}>
        {profits.map((profit) => (
          <Profit key={profit.title} {...profit} />
        ))}
      </div>
    </div>
  );
};

export default Profits;
