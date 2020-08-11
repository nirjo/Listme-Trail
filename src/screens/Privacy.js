import React from 'react';
import styled from 'styled-components/native';
// import { WebView } from 'react-native-webview';

import Layout from '../components/Layout';

const Wrapper = styled.View`
  flex: 1;
  padding-left: 10;
  padding-right: 10;
  padding-top: 10;
  padding-bottom: 10;
`;

export default class Privacy extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Privacy',
  });

  render() {
    return (
      <Layout>
        <Wrapper>
          {/* <WebView source={{ uri: 'https://www.listmeapp.co/privacy/' }} /> */}
        </Wrapper>
      </Layout>
    );
  }
}
