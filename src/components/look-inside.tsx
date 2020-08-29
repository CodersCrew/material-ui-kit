import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import RefreshIcon from '@material-ui/icons/Refresh';
import HttpsIcon from '@material-ui/icons/Https';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/LinkOutlined';
import { useTranslation } from '../hooks';

const a11yProps = (index: string | number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    textAlign: 'center',
    padding: `0 ${theme.spacing(3)}px`,
  },
  tabs: {
    marginTop: theme.spacing(4),
    maxWidth: '100%',
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
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 960,
    height: 600,
    border: `1px solid ${theme.palette.grey[800]}`,
    marginTop: theme.spacing(5),
    borderRadius: 8,
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      height: 560,
    },

    [theme.breakpoints.down('xs')]: {
      height: 520,
    },
  },
  browserBar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 48,
    padding: `0 ${theme.spacing(1)}px`,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
  },
  buttons: {
    display: 'flex',
  },
  urlBar: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.palette.background.paper,
    padding: `0 ${theme.spacing(4)}px`,

    '& input': {
      fontSize: 12,
      lineHeight: 12,
    },
  },
  lockIcon: {
    position: 'absolute',
    top: theme.spacing(1.25),
    left: theme.spacing(1.25),
    width: 12,
    height: 12,
    color: theme.palette.success.dark,
  },
  refreshIcon: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    width: 16,
    height: 16,
    color: theme.palette.text.hint,
  },
  iframe: {
    border: 'none',
    backgroundColor: theme.palette.grey[300],
    height: '100%',
    width: '100%',
    flex: 1,
  },
}));

const LookInside = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const { t } = useTranslation('look-inside');
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const increment = () => setValue((prev) => prev + 1);

  const decrement = () => setValue((prev) => prev - 1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => setValue(newValue);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleMenuChoice = (choice: number) => () => {
    setValue(choice);
    handleMenuClose();
  };

  const refresh = () => {
    if (iframeRef.current) {
      // eslint-disable-next-line no-self-assign
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const content = [
    {
      label: t('guidelines_label'),
      icon: '🎨',
      content: t('guidelines_content'),
      url: 'https://materialuikit.com/guidelines',
      embedUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbzvvHg0C74GgHOkzTLc0JM%2FMaterial-UI-Kit-1.0.2%3Fnode-id%3D0%253A1',
    },
    {
      label: t('components_label'),
      icon: '🗂',
      content: t('components_content'),
      url: 'https://materialuikit.com/components',
      embedUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbzvvHg0C74GgHOkzTLc0JM%2FMaterial-UI-Kit-1.0.2%3Fnode-id%3D86%253A1437',
    },
    {
      label: t('frames_label'),
      icon: '🖼️',
      content: t('frames_content'),
      url: 'https://materialuikit.com/frames',
      embedUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbzvvHg0C74GgHOkzTLc0JM%2FMaterial-UI-Kit-1.0.2%3Fnode-id%3D926%253A2141',
    },
    {
      label: t('screens_label'),
      icon: '🖥',
      content: t('screens_content'),
      url: 'https://materialuikit.com/screens',
      embedUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbzvvHg0C74GgHOkzTLc0JM%2FMaterial-UI-Kit-1.0.2%3Fnode-id%3D692%253A0',
    },
  ];

  const currentItem = content[value];

  return (
    <div className={classes.root}>
      <Helmet>
        {content.map(({ label, embedUrl }) => (
          <link key={label} rel="preload" href={embedUrl} as="document"></link>
        ))}
      </Helmet>
      <Typography variant="h4">{t('heading')}</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        aria-label={t('tabs_aria')}
        variant={isXs ? 'scrollable' : 'standard'}
        scrollButtons="on"
      >
        {content.map(({ label, icon }, index) => (
          <Tab key={label} className={classes.tab} label={`${icon} ${label}`} {...a11yProps(index)} />
        ))}
      </Tabs>
      <Typography className={classes.description}>{currentItem.content}</Typography>
      <Button
        color="secondary"
        component="a"
        href={currentItem.url}
        target="__blank"
        rel="noreferrer noopener"
        variant="contained"
        size={isXs ? 'small' : 'medium'}
        startIcon={<LinkIcon />}
      >
        {t('go_to')} {currentItem.label}
      </Button>
      <div className={classes.browser}>
        <div className={classes.browserBar}>
          <div className={classes.buttons}>
            <IconButton aria-label={t('prev_aria')} color="inherit" disabled={value === 0} onClick={decrement}>
              <ArrowBackIosIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label={t('next_aria')}
              color="inherit"
              disabled={value === content.length - 1}
              onClick={increment}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </div>
          <div className={classes.urlBar}>
            <HttpsIcon className={classes.lockIcon} />
            <InputBase fullWidth value={`https://materialuikit.com/${currentItem.label.toLowerCase()}`} />
            <RefreshIcon className={classes.refreshIcon} onClick={refresh} />
          </div>
          <Hidden xsDown>
            <IconButton
              aria-label={t('menu_aria')}
              aria-haspopup="true"
              aria-controls="simple-menu"
              color="inherit"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              {content.map((item, index) => (
                <MenuItem key={item.label} onClick={handleMenuChoice(index)} disabled={index === value}>
                  {item.icon} {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Hidden>
        </div>
        <iframe className={classes.iframe} ref={iframeRef} allowFullScreen src={currentItem.embedUrl} />
      </div>
    </div>
  );
};

export default LookInside;
