import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

import Layout from '../components/layout';
import Heading from '../components/heading';
import Profits from '../components/profits';
import LookInside from '../components/look-inside';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const SectionBox: FC = ({ children }) => <Box mt={{ xs: 14, sm: 20 }}>{children}</Box>;

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Heading />
    <SectionBox>
      <Profits />
    </SectionBox>
    <SectionBox>
      <LookInside />
    </SectionBox>
    <SectionBox>
      <Contact />
    </SectionBox>
    <SectionBox>
      <Footer />
    </SectionBox>
  </Layout>
);

export default IndexPage;
