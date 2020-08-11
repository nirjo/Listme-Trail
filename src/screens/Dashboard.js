import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Alert } from 'react-native';
import { useStoreState } from 'easy-peasy';

import Layout from '../components/Layout';
import { Text, Loading, EmptyState } from '../components/elements';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.lightShades};
  padding-top: 70;
  padding-horizontal: 10;
`;

const TextStyle = styled(Text)`
  color: ${(props) => props.theme.mainBrandColor};
  padding-left: 10;
  padding-bottom: 30;
`;

const Wrapper = styled.View`
  flex-direction: row;
  margin-horizontal: 10;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100;
`;

const Dashboard = ({ navigation }) => (
  <Layout>
    <Container>
      <TextStyle bold size="large">
        Dashboard Screen
      </TextStyle>
    </Container>
  </Layout>
);

Dashboard.navigationOptions = {
  headerShown: false,
};

export default Dashboard;
