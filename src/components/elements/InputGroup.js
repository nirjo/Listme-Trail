import React from 'react';
import styled from 'styled-components/native';

import Label from './Label';

const Container = styled.View`
  width: ${(props) => (props.width ? props.width : '100%')};
  margin-bottom: 20;
`;

const InputGroup = ({ label, width, children }) => (
  <Container width={width}>
    <Label>{label}</Label>
    {children}
  </Container>
);

export default InputGroup;
