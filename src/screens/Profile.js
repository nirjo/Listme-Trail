import React from 'react';
import styled from 'styled-components/native';

import { Text, Avatar } from '../components/elements';
import Layout from '../components/Layout';
import OptionButton from '../components/OptionButton';
import avatar from '../assets/images/avatar.jpg';
import ProfileOptionsItem from '../components/ProfileOptionsItem';

const Container = styled.View`
  flex: 1;
  padding-horizontal: 35;
`;
const Top = styled.View`
  align-items: center;
  padding-top: 90;
`;
const NameText = styled(Text)`
  padding-top: 15;
`;
const TextColor = styled(Text)`
  color: ${props => props.theme.mainBrandColor};
`;
const Bottom = styled.ScrollView`
  border-radius: 15;
`;
const Middle = styled.View`
  flex-direction: row;
  padding-vertical: 25;
`;

const Profile = () => (
  <Layout>
    <Container>
      <Top>
        <Avatar source={avatar} size={130} borderColor="#fff" borderWidth={5} />
        <NameText bold size="extraLarge">
          Rishi Arch
        </NameText>
        <Text size="medium">
          <TextColor size="medium">30</TextColor> day streak
        </Text>
      </Top>
      <Middle>
        <OptionButton option="PERSONA" borderRadiusLeft="15" />
        <OptionButton border option="FRIENDS" />
        <OptionButton option="STATS" borderRadiusRight="15" />
      </Middle>
      <Bottom>
        <ProfileOptionsItem
          title="Expressive"
          subTitle="You are at this level now"
        />
        <ProfileOptionsItem
          title="Authentic"
          subTitle="You are at this level now"
        />
        <ProfileOptionsItem
          title="Expressive"
          subTitle="You are at this level now"
        />
        <ProfileOptionsItem
          title="Expressive"
          subTitle="You are at this level now"
        />
      </Bottom>
    </Container>
  </Layout>
);

export default Profile;
