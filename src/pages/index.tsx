import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

import Layout from '../components/layout';
import Heading from '../components/heading';
import Inside from '../components/inside';
import Profits from '../components/profits';
import LookInside from '../components/look-inside';
import ForWho from '../components/for-who';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const SectionBox: FC = ({ children }) => <Box mt={{ xs: 14, sm: 20 }}>{children}</Box>;

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Heading />
    <SectionBox>
      <Inside />
    </SectionBox>
    <SectionBox>
      <Profits />
    </SectionBox>
    <Hidden xsDown>
      <SectionBox>
        <LookInside />
      </SectionBox>
    </Hidden>
    <SectionBox>
      <ForWho />
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
