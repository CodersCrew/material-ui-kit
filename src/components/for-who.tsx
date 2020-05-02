import React from 'react';
import Typography from '@material-ui/core/Typography';
import AccountTreeIcon from '@material-ui/icons/AccountTreeOutlined';
import PaletteIcon from '@material-ui/icons/PaletteOutlined';
import CodeIcon from '@material-ui/icons/CodeOutlined';
import DoneIcon from '@material-ui/icons/DoneOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from '../hooks';

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
    marginTop: theme.spacing(8),

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      justifyItems: 'center',
      gridGap: theme.spacing(6),
    },
  },
  person: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  },
  personHead: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },

    '& > svg': {
      marginRight: theme.spacing(1.5),
    },
  },
  personItems: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    '& > div + div': {
      marginTop: theme.spacing(3),
    },
  },
  personItem: {
    display: 'flex',
    alignItems: 'flex-start',

    '& > svg': {
      marginRight: theme.spacing(1.5),
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
      textAlign: 'center',

      '& > svg': {
        display: 'none',
      },
    },
  },
}));

const ForWho = () => {
  const classes = useStyles();
  const { t } = useTranslation('for-who');

  const people = [
    {
      name: t('person1'),
      Icon: AccountTreeIcon,
      items: [...Array(4).keys()].map((i) => t(`person1_item${i + 1}`)),
    },
    {
      name: t('person2'),
      Icon: PaletteIcon,
      items: [...Array(4).keys()].map((i) => t(`person2_item${i + 1}`)),
    },
    {
      name: t('person3'),
      Icon: CodeIcon,
      items: [...Array(4).keys()].map((i) => t(`person3_item${i + 1}`)),
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        {t('heading')}
      </Typography>
      <div className={classes.content}>
        {people.map(({ name, Icon, items }) => (
          <div key={name} className={classes.person}>
            <div className={classes.personHead}>
              <Icon />
              <Typography variant="h6">{name}</Typography>
            </div>
            <div className={classes.personItems}>
              {items.map((item) => (
                <div key={item} className={classes.personItem}>
                  <DoneIcon />
                  <Typography>{item}</Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForWho;
