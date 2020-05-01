import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import openGraph from '../images/og.png';
import { useTranslation } from '../hooks';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#1769aa',
      main: '#2196f3',
      light: '#4dabf5',
    },
    secondary: {
      dark: '#d81b60',
      main: '#e91e63',
      light: '#ec407a',
    },
  },
});

const Layout: FC = ({ children }) => {
  const { locale } = useTranslation('navbar');

  const helmet =
    locale === 'pl' ? (
      <Helmet>
        <title>Material UI Kit - Kompletny zestaw elementów Material UI dla Figmy</title>
        <meta name="description" content="Szybsze projektowanie komponentów dzięki gotowemu zestawowi zasobów. " />
        <meta property="og:title" content="Material UI Kit - Kompletny zestaw elementów Material UI dla Figmy" />
        <meta property="og:description" content="Projektuj szybciej dzięki darmowemu zestawowi edytowalnych zasobów " />
        <meta property="og:image" content={openGraph} />
      </Helmet>
    ) : (
      <Helmet>
        <title>Material UI Kit - Complete set of Material UI Components for Figma</title>
        <meta
          name="description"
          content="Design Material UI components faster using ready-made styles and assets. Customize everything with all elements and styles available for free."
        />
        <meta property="og:title" content="Material UI Kit - Complete set of Material UI Elements for Figma" />
        <meta
          property="og:description"
          content="Design Material UI components faster using ready-made styles and assets."
        />
        <meta property="og:image" content={openGraph} />
      </Helmet>
    );

  return (
    <ThemeProvider theme={theme}>
      {helmet}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
