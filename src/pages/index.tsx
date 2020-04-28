import React from 'react';
import Box from '@material-ui/core/Box';

import Layout from '../components/layout';
import Heading from '../components/heading';
import Profits from '../components/profits';
import LookInside from '../components/look-inside';
import Contact from '../components/contact';
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <Heading />
    <Box mt={20}>
      <Profits />
    </Box>
    <Box mt={20}>
      <LookInside />
    </Box>
    <Box mt={20}>
      <Contact />
    </Box>
    <Box mt={20}>
      <Footer />
    </Box>
  </Layout>
);

export default IndexPage;
