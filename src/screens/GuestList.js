import React from 'react';
import styled from 'styled-components/native';

import Layout from '../components/Layout';

import SearchField from '../components/elements/SearchField';

const Container = styled.View`
  flex: 1;
`;

const GuestList = () => {
  return (
    <Layout>
      <Container>
        <SearchField/>
      </Container>
    </Layout>
  );
};

export default GuestList;
