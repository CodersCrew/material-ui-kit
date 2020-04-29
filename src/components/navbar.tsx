import React from 'react';
import { useWindowScroll } from 'react-use';
import { changeLocale } from 'gatsby-plugin-intl';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import UIKitLogo from '../images/svg/ui-kit-logo-h.svg';
import { useTranslation } from '../hooks';

const useStyles = makeStyles((theme) => ({
  defaultAppBar: {
    boxShadow: 'none',
  },
  fixedAppBar: {
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    height: 20,
    width: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,

    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
  },
  actions: {},
  previewButton: {
    marginLeft: theme.spacing(2),
  },
}));

type Language = {
  label: string;
  short: string;
};

const Navbar = () => {
  const classes = useStyles();
  const { t, locale } = useTranslation('navbar');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { y } = useWindowScroll();

  const languages: Record<string, Language> = {
    en: {
      label: `🇺🇸 ${t('lang_en')}`,
      short: '🇺🇸 EN',
    },
    pl: {
      label: `🇵🇱 ${t('lang_pl')}`,
      short: '🇵🇱 PL',
    },
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  const handleLangChoice = (lang: string) => () => {
    changeLocale(lang);
    handleMenuClose();
  };

  const isVisible = y > 560;

  const currentLanguage = languages[locale];

  const language = (
    <>
      <Button
        endIcon={<ArrowDropDownIcon />}
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        {currentLanguage.short}
      </Button>
      <Menu id="language-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {Object.entries(languages).map(([langKey, lang]) => (
          <MenuItem key={langKey} value={langKey} onClick={handleLangChoice(langKey)} disabled={langKey === locale}>
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return isVisible ? (
    <AppBar position="fixed" className={classes.fixedAppBar}>
      <Toolbar className={classes.toolbar}>
        <UIKitLogo className={classes.logo} />
        <div className={classes.actions}>
          {language}
          <Hidden xsDown>
            <Button className={classes.previewButton} color="secondary" variant="outlined">
              {t('cta_button')}
            </Button>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  ) : (
    <AppBar position="absolute" color="transparent" className={classes.defaultAppBar}>
      <div className={classes.header}>{language}</div>
    </AppBar>
  );
};

export default Navbar;
