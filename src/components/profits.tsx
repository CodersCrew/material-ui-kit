import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CategoryIcon from '@material-ui/icons/CategoryOutlined';
import BrushIcon from '@material-ui/icons/BrushOutlined';
import MoodIcon from '@material-ui/icons/MoodOutlined';
import CodeIcon from '@material-ui/icons/CodeOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModuleOutlined';
import TuneIcon from '@material-ui/icons/TuneOutlined';
import * as faker from 'faker';
import Profit, { ProfitProps } from './profit';

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

const profits: ProfitProps[] = [
  {
    title: '3600+ Components',
    description: faker.lorem.sentences(3),
    icon: CategoryIcon,
  },
  {
    title: '2400 Material Icons',
    description: faker.lorem.sentences(3),
    icon: MoodIcon,
  },
  {
    title: '80 Styles',
    description: faker.lorem.sentences(3),
    icon: BrushIcon,
  },
  {
    title: 'Development Ready',
    description: faker.lorem.sentences(3),
    icon: CodeIcon,
  },
  {
    title: 'Modular',
    description: faker.lorem.sentences(3),
    icon: ViewModuleIcon,
  },
  {
    title: 'Fully Customizable',
    description: faker.lorem.sentences(3),
    icon: TuneIcon,
  },
];

const Profits = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">What you get?</Typography>
      <div className={classes.content}>
        {profits.map((profit) => (
          <Profit key={profit.title} {...profit} />
        ))}
      </div>
    </div>
  );
};

export default Profits;
