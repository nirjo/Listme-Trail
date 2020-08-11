import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styled from 'styled-components/native';
import { WaveIndicator } from 'react-native-indicators';

import theme from '../../utils/theme';

const Container = styled.View`
  position: relative;
`;

const Loading = ({ visible = true }) => (
  <Container>
    <Spinner
      visible={true}
      animation="fade"
      customIndicator={
        <WaveIndicator color={theme.mainBrandColor} size={120} />
      }
    />
  </Container>
);

export default Loading;
