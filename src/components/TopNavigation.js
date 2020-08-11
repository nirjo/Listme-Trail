import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Platform } from 'react-native';

import { Text } from './elements';
import theme from '../utils/theme';

export const LogoTitle = styled(Text)`
  font-size: ${props => props.theme.fontSizeMedium};
  font-weight: 700;
  align-self: center;
  justify-content: center;
  text-align: center;
  margin-left: ${Platform.OS === 'ios' ? 0 : 25};
`;

const HeadLeftContainer = styled.View`
  margin-left: 8;
  margin-right: 4;
  margin-top: 3;
`;
const HeadRightContainer = styled.TouchableOpacity`
  margin-right: 8;
`;

const BackButton = () => (
  <HeadLeftContainer>
    <Text>
      {/* <MaterialIcons name="chevron-left" size={28} color={theme.textColor} /> */}
      <AntDesign name="arrowleft" size={20} color={theme.textColor} />
    </Text>
  </HeadLeftContainer>
);

const HeaderTitle = ({ title }) => (
  <LogoTitle semibold primary>
    {title}
  </LogoTitle>
);

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export const HeaderRight = ({ icon, onRightPress }) => (
  <HeadRightContainer
    activeOpacity={theme.activeButtonOpacity}
    onPress={onRightPress}
  >
    <AntDesign name={icon} size={24} color={theme.textColor} />;
  </HeadRightContainer>
);

HeaderRight.propTypes = {
  icon: PropTypes.string.isRequired,
  onRightPress: PropTypes.func.isRequired,
};

export const navigationOptions = data => ({
  headerBackImage: Platform.OS === 'ios' ? <BackButton /> : null,
  headerBackTitle: null,
  tintColor: '#000',
  headerTitle: <HeaderTitle title={data.title} />,
  headerRight: data.rightIcon ? (
    <HeaderRight icon={data.rightIcon} onRightPress={data.onRightPress} />
  ) : null,
});

navigationOptions.propTypes = {
  data: PropTypes.object.isRequired,
};
