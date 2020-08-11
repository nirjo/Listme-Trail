import React from 'react';
import styled from 'styled-components/native';
import SelectInput from 'react-native-select-input-ios';

const Container = styled.View`
  background-color: ${props => props.theme.lightShades};
  border-radius: 4;
  height: 50;
  margin-bottom: 10;
  justify-content: center;
  padding-left: 10;
`;

const Select = ({ options }) => (
  <Container>
    <SelectInput labelStyle={{ color: '#000' }} value={0} options={options} />
  </Container>
);

export default Select;
