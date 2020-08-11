import React from 'react';
import styled from 'styled-components/native';

import { Text } from '../components/elements';
import Layout from '../components/Layout';

const Container = styled.View`
  flex: 1;
`;

const Test = () => {
  return (
    <Layout>
      <Container>
        <Text>This is Test page</Text>
      </Container>
    </Layout>
  );
};

export default Test;
