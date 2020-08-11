import React from 'react';
import styled from 'styled-components/native';

import Text from './Text';

const Container = styled(Text)`
  margin-bottom: 5;
`;

const Label = ({ children }) => (
  <Container lite size="small">
    {children}
  </Container>
);

export default Label;
