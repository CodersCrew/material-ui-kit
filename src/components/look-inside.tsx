import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/LinkOutlined';
import * as faker from 'faker';

const a11yProps = (index: string | number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const content = [
  {
    label: 'Guidelines',
    content: faker.lorem.sentences(5),
    url: 'https://www.figma.com/file/TmOAGkLXWZGpvbh4wrVwlv/Material-UI-Kit-1.0.0-alpha.4?node-id=0%3A1',
    embedUrl:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTmOAGkLXWZGpvbh4wrVwlv%2FMaterial-UI-Kit-1.0.0-alpha.4%3Fnode-id%3D0%253A1',
  },
  {
    label: 'Components',
    content: faker.lorem.sentences(5),
    url: 'https://www.figma.com/file/TmOAGkLXWZGpvbh4wrVwlv/Material-UI-Kit-1.0.0-alpha.4?node-id=86%3A1437',
    embedUrl:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTmOAGkLXWZGpvbh4wrVwlv%2FMaterial-UI-Kit-1.0.0-alpha.4%3Fnode-id%3D86%253A1437',
  },
  {
    label: 'Frames',
    content: faker.lorem.sentences(5),
    url: 'https://www.figma.com/file/TmOAGkLXWZGpvbh4wrVwlv/Material-UI-Kit-1.0.0-alpha.4?node-id=926%3A2141',
    embedUrl:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTmOAGkLXWZGpvbh4wrVwlv%2FMaterial-UI-Kit-1.0.0-alpha.4%3Fnode-id%3D926%253A2141',
  },
  {
    label: 'Screens',
    content: faker.lorem.sentences(5),
    url: 'https://www.figma.com/file/TmOAGkLXWZGpvbh4wrVwlv/Material-UI-Kit-1.0.0-alpha.4?node-id=692%3A0',
    embedUrl:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTmOAGkLXWZGpvbh4wrVwlv%2FMaterial-UI-Kit-1.0.0-alpha.4%3Fnode-id%3D692%253A0',
  },
  {
    label: 'Docs',
    content: faker.lorem.sentences(5),
    url: 'https://coderscrew.gitbook.io/material-ui-kit/',
    embedUrl: 'https://coderscrew.gitbook.io/material-ui-kit/',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    textAlign: 'center',
  },
  tabs: {
    marginTop: theme.spacing(4),
  },
  tab: {
    minWidth: 'unset',
  },
  description: {
    maxWidth: 800,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),
  },
  browser: {
    width: 960,
    height: 600,
    marginTop: theme.spacing(5),
    borderRadius: 8,
    overflow: 'hidden',
  },
  browserBar: {
    width: '100%',
    height: 48,
    backgroundColor: theme.palette.grey[800],
  },
  iframe: {
    border: 'none',
    backgroundColor: theme.palette.grey[300],
  },
}));

const LookInside = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const currentItem = content[value];

  return (
    <div className={classes.root}>
      <Typography variant="h4">Look inside</Typography>
      <Tabs value={value} onChange={handleChange} className={classes.tabs} aria-label="content type choice tabs">
        {content.map(({ label }, index) => (
          <Tab key={label} className={classes.tab} label={label} {...a11yProps(index)} />
        ))}
      </Tabs>
      <Typography className={classes.description}>{currentItem.content}</Typography>
      <Button
        color="secondary"
        component="a"
        href={currentItem.url}
        target="__blank"
        variant="contained"
        startIcon={<LinkIcon />}
      >
        Go to the {currentItem.label}
      </Button>
      <div className={classes.browser}>
        <div className={classes.browserBar}></div>
        <iframe className={classes.iframe} height={600 - 48} width="100%" allowFullScreen src={currentItem.embedUrl} />
      </div>
    </div>
  );
};

export default LookInside;
