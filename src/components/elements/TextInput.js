import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Text from './Text';

export const boxShadow = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowRadius: 1,
  },
  android: {
    elevation: 1,
  },
});

const Container = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
`;

const Input = styled.TextInput`
  border-radius: ${props => (props.secondary ? '0' : '4')};
  height: ${props => (props.secondary ? '70' : '55')};
  margin-bottom: ${props => (props.secondary ? '0' : '10')};
  background-color: ${props => props.theme.backgroundColor};
  padding-vertical: 12;
  padding-horizontal: 18;
  color: ${props => props.theme.textColor};
  font-size: ${props => props.theme.fontSize};
`;

const ErrorText = styled(Text)`
  margin-left: 15;
  margin-right: 15;
  font-size: 11;
  color: #e60533;
`;

const TextInput = ({ error, isLoading, secondary, width, className, ...props }) => (
  <Container style={boxShadow} width={width}>
    <Input
      className={className}
      secondary={secondary}
      underlineColorAndroid="transparent"
      // placeholderTextColor={'#344356'}
      placeholderStyle={{ fontSize: '20' }}
      editable={!isLoading}
      {...props}
    />
    {error && <ErrorText>{error}</ErrorText>}
  </Container>
);

TextInput.defaultProps = {
  isLoading: false,
};

TextInput.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default TextInput;
