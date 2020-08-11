import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import theme from '../../utils/theme';

const Container = styled(Text)`
  font-size: ${props => props.fontSize};
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  letter-spacing: 1;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const MyText = props => {
  const {
    style,
    children,
    light,
    semibold,
    bold,
    extrabold,
    size,
    lite,
    liteAlt,
    ...other
  } = props;

  let { fontFamily, fontSize, textColor } = theme;

  if (light) {
    fontFamily = `${fontFamily}-Light`;
  } else if (semibold) {
    fontFamily = `${fontFamily}-SemiBold`;
  } else if (bold) {
    fontFamily = `${fontFamily}-Bold`;
  } else if (extrabold) {
    fontFamily = `${fontFamily}-ExtraBold`;
  } else {
    fontFamily = `${fontFamily}-Regular`;
  }

  if (size === 'medium') {
    fontSize = theme.fontSizeMedium;
  } else if (size === 'large') {
    fontSize = theme.fontSizeLarge;
  } else if (size === 'small') {
    fontSize = theme.fontSizeSmall;
  } else if (size === 'extraSmall') {
    fontSize = theme.fontSizeExtraSmall;
  } else if (size === 'extraLarge') {
    fontSize = theme.fontSizeExtraLarge;
  } else {
    fontSize = theme.fontSize;
  }

  if (lite) {
    textColor = theme.textColorLite;
  } else if (liteAlt) {
    textColor = theme.textColorAlt;
  } else {
    textColor = theme.textColor;
  }

  if (!children) {
    return null;
  }

  return (
    <Container
      style={style}
      fontFamily={fontFamily}
      allowFontScaling={false}
      fontSize={fontSize}
      textColor={textColor}
      {...other}
    >
      {children}
    </Container>
  );
};

MyText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  light: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  extrabold: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf([
    'extraSmall',
    'small',
    'medium',
    'large',
    'extraLarge',
  ]),
  lite: PropTypes.bool,
  center: PropTypes.bool,
};

export default MyText;
