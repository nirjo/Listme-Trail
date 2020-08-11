import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Text from './Text';
import theme, { boxShadow } from '../../utils/theme';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Counting = styled(Text)`
  padding-horizontal: 15;
`;

const CounterButton = styled.TouchableOpacity`
  height: ${props => (props.small ? '25' : '33')};
  width: ${props => (props.small ? '25' : '33')};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 20;
`;

const Counter = ({ small, count, add, subtract }) => (
  <Container>
    <CounterButton small={small} onPress={subtract} style={[boxShadow]}>
      <AntDesign name="minus" size={20} color="#9B9B9B" />
    </CounterButton>
    <Counting>{count}</Counting>
    <CounterButton small={small} onPress={add} style={[boxShadow]}>
      <AntDesign name="plus" size={20} color="#9B9B9B" />
    </CounterButton>
  </Container>
);

export default Counter;
