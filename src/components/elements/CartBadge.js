import React from 'react';
import styled from 'styled-components/native';

import { useStoreState } from 'easy-peasy';
import Text from './Text';

const Container = styled.View`
  position: absolute;
  top: -8;
  right: 23%;
`;

const TextStyled = styled(Text)`
  color: ${props => props.theme.primaryColor};
`;

const CartBadge = () => {
  const cart = useStoreState(state => state.cart.data);

  if (cart.length === 0) {
    return null;
  }

  return (
    <Container>
      <TextStyled>{cart.length}</TextStyled>
    </Container>
  );
};

export default CartBadge;
