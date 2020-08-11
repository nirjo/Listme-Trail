import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import { Text, ButtonPressAnimation } from './elements';

const Item = styled(ButtonPressAnimation)`
  padding-vertical: 15;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled(Text)`
  margin-bottom: 3;
`;
const Subtitle = styled(Text)`
  color: ${props => props.theme.textGrey};
`;

const ProfileUpdateItem = ({ title, details, id, navigation, icon }) => (
  <Item onPress={() => navigation.navigate(id)}>
    <View>
      <Title semibold size="small">
        {title}
      </Title>
      <Subtitle size="extraSmall">{details}</Subtitle>
    </View>
    {icon && (
      <View>
        <MaterialIcons name="navigate-next" size={24} color="#9B9B9B" />
      </View>
    )}
  </Item>
);

export default withNavigation(ProfileUpdateItem);
