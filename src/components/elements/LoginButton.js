/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../utils/theme';
import ButtonPressAnimation from './ButtonPressAnimation';
import Text from './Text';

const Container = styled(ButtonPressAnimation)`
  height: ${props => props.height || '45'};
  justify-content: center;
`;

const ContainerInner = styled.View`
  align-items: center;
`;

const TextStyled = styled(Text)`
  color: ${props =>
    props.inverted ? props.theme.primaryColor : props.theme.textColorAlt};
  font-size: ${props =>
    props.small ? props.theme.fontSize : props.theme.fontSizeMedium};
  align-self: ${props => props.align || 'center'};
`;

const MyButton = ({
  children,
  style,
  onPress,
  disabled,
  isLoading,
  noAnimation,
  primary,
  secondary,
  secondaryAlt,
  title,
  align,
  inverted,
  round,
  small,
  height,
  ...other
}) => {
  let bgColor = theme.primaryColor;
  if (secondary) {
    bgColor = theme.backgroundColor;
  }
  if (secondaryAlt) {
    bgColor = theme.lightAccent;
  }

  return (
    <Container
      disabled={disabled || isLoading}
      isLoading={isLoading}
      noAnimation={noAnimation}
      bgColor={bgColor}
      round={round}
      height={height}
      onPress={e => {
        onPress(e);
      }}
    >
      <ContainerInner {...other}>
        {title ? (
          <TextStyled semibold align={align} inverted={inverted} small={small}>
            {title}
          </TextStyled>
        ) : (
          children
        )}
      </ContainerInner>
    </Container>
  );
};

MyButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default MyButton;
