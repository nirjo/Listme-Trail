import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 36;
  height: 8;
  background-color: #e8eef4;
  border-radius: 4.5;
`;

const Bar = styled.View`
  background-color: ${props => props.theme.secondaryColor};
  border-radius: 4.5;
  width: 15;
  height: 7;
`;

const ProgressBar = () => (
  <Container>
    <Bar></Bar>
  </Container>
);

export default ProgressBar;
