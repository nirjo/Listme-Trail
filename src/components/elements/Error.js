import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import theme from '../../utils/theme';
import Text from './Text';

const Container = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Title = styled(Text)`
  margin-top: 20;
  margin-bottom: 20;
  font-size: 26;
  padding-horizontal: 30;
  text-align: center;
`;
const Details = styled(Text)`
  color: ${props => props.theme.textColorLite};
  text-align: center;
  padding-horizontal: 30;
`;

const Error = ({ title, details }) => (
  <Container>
    <MaterialIcons name="error" size={54} color={theme.textColor} />
    <Title bold>{title}</Title>
    <Details>{details}</Details>
  </Container>
);

Error.defaultProps = {
  icon: 'error',
  title: 'No data available',
  details: '',
};

Error.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
};

export default Error;
