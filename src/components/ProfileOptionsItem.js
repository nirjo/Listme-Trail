import React from 'react';
import styled from 'styled-components/native';

import { Text, Image } from './elements';
import rightImage from '../assets/images/logo.png';

const Container = styled.View`
  padding-vertical: 15;
  padding-horizontal: 20;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftWrapper = styled.View``;
const RightWrapper = styled.View``;

const ProfileOptionsItem = ({ title, subTitle }) => (
  <Container>
    <LeftWrapper>
      <Text size="medium">{title}</Text>
      <Text size="extraSmall">{subTitle}</Text>
    </LeftWrapper>
    <RightWrapper>
      <Image source={rightImage} width={45} height={45} />
    </RightWrapper>
  </Container>
);

export default ProfileOptionsItem;
