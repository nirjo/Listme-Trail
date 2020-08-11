import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';
import theme, { boxShadow } from '../../utils/theme';
import ButtonPressAnimation from './ButtonPressAnimation';

const Container = styled(ButtonPressAnimation)`
  border-radius: 8;
  border-width: 1;
  justify-content: center;
  align-items: center;
  border-color: ${props => props.theme.borderColor};
  opacity: ${props => (props.isLoading || props.disabled ? 0.75 : 1)};
`;

const ContainerInner = styled.View`
  flex-direction: row;
`;

const OutlineIconButton = ({
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
  fav,
  hasMargin,
  ...other
}) => {
  let bgColor = theme.mainBrandColor;
  if (secondary) {
    bgColor = theme.secondaryColor;
  }
  if (secondaryAlt) {
    bgColor = theme.lightAccent;
  }


  return (
    <Container
      style={[style]}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      noAnimation={noAnimation}
      bgColor={bgColor}
      hasMargin={hasMargin}
      onPress={e => {
        onPress(e);
      }}
    >
      <ContainerInner {...other}>
        <AntDesign name={fav} size={18} color="#9586A8" />
      </ContainerInner>
    </Container>
  );
};

OutlineIconButton.defaultProps = {
  hasMargin: true,
};

OutlineIconButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  hasMargin: PropTypes.bool,
};

export default OutlineIconButton;
