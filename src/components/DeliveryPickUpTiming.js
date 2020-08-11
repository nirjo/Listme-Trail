import React from 'react';
import styled from 'styled-components/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../utils/theme';
import { Text } from './elements';

const Container = styled.View`
  padding-vertical: 10;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.View`
  width: 46%;
  padding-right: 15;
`;

const Right = styled.View`
  width: 50%;
`;

const Flex = styled.View`
  flex-direction: row;
  margin-top: 5;
  align-items: center;
`;

const TextStyle = styled(Text)`
  color: ${props => props.theme.textColorLite};
  padding-left: 5;
`;

const DeliveryPickUpTiming = ({
  labelLeft,
  labelRight,
  icon,
  timing,
  startTime,
}) => (
  <Container>
    <Left>
      <Text size="small" semibold>
        {labelLeft}
      </Text>
      <Flex>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={theme.textColorLite}
        />
        <TextStyle size="small">{timing}</TextStyle>
      </Flex>
    </Left>
    <Right>
      <Text size="small" semibold>
        {labelRight}
      </Text>
      <Flex>
        <Ionicons name="md-timer" size={22} color={theme.textColorLite} />
        <TextStyle size="small">{startTime}</TextStyle>
      </Flex>
    </Right>
  </Container>
);

export default DeliveryPickUpTiming;
