import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AllInclusiveIcon from '@material-ui/icons/AllInclusiveOutlined';
import ViewAgendaIcon from '@material-ui/icons/ViewAgendaOutlined';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevicesOutlined';
import TuneIcon from '@material-ui/icons/TuneOutlined';
import GroupAddIcon from '@material-ui/icons/GroupAddOutlined';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import { useTranslation } from '../hooks';
import Profit, { ProfitProps } from './profit';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1400,
    padding: `0 ${theme.spacing(3)}px`,
    margin: '0 auto',
    textAlign: 'center',
  },
  content: {
    display: 'grid',
    gridGap: `${theme.spacing(8)}px ${theme.spacing(10)}px`,
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginTop: theme.spacing(6),

    [theme.breakpoints.down('sm')]: {
      gridGap: `${theme.spacing(6)}px ${theme.spacing(8)}px`,
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
}));

const Profits = () => {
  const classes = useStyles();
  const { t } = useTranslation('profits');

  const profits: ProfitProps[] = [
    {
      title: t('profit1_label'),
      description: t('profit1_description'),
      icon: AllInclusiveIcon,
    },
    {
      title: t('profit2_label'),
      description: t('profit2_description'),
      icon: ViewAgendaIcon,
    },
    {
      title: t('profit3_label'),
      description: t('profit3_description'),
      icon: ImportantDevicesIcon,
    },
    {
      title: t('profit4_label'),
      description: t('profit4_description'),
      icon: TuneIcon,
    },
    {
      title: t('profit5_label'),
      description: t('profit5_description'),
      icon: GroupAddIcon,
    },
    {
      title: t('profit6_label'),
      description: t('profit6_description'),
      icon: RemoveRedEyeIcon,
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
