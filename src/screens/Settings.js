import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { navigationOptions } from '../components/TopNavigation';
import Layout from '../components/Layout';
import { Text } from '../components/elements';

const Container = styled.ScrollView`
  flex: 1;
  padding-horizontal: 20;
  padding-top: 70;
`;

const Wrapper = styled.View`
  flex: 1;
  padding-top: 20;
`;

const SettingItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding-vertical: 10;
  align-items: center;
  justify-content: space-between;
`;
const Heading = styled(Text)`
  color: ${props => props.theme.mainBrandColor};
`;

const Title = styled(Text)`
  padding-bottom: 25;
  color: ${props => props.theme.mainBrandColor};
`;

const TitleBottom = styled(Title)`
  margin-top: 30;
`;

const items = [
  {
    id: 1,
    screen: 'ProfileUpdate',
    title: 'Profile',
  },

  // {
  //   id: 5,
  //   screen: 'EventsBookmarked',
  //   title: 'Events Bookmarked',
  // },
  // {
  //   id: 6,
  //   screen: 'EventsLiked',
  //   title: 'Events Liked',
  // },
  // {
  //   id: 7,
  //   screen: 'PaymentMethods',
  //   title: 'Payment Methods',
  // },
  {
    id: 4,
    screen: 'Logout',
    title: 'Sign Out',
  },
];

const items2 = [
  {
    id: 1,
    screen: 'TermsAndConditions',
    title: 'Terms & Conditions',
  },
  {
    id: 2,
    screen: 'Privacy',
    title: 'Privacy',
  },
  {
    id: 3,
    screen: 'Help',
    title: 'Help',
  },
];

const Settings = ({ navigation }) => {
  const logout = useStoreActions(actions => actions.user.logout);
  const user = useStoreState(state => state.user.data);
  // console.log('user', user);

  return (
    <Layout>
      <Container>
        <Heading bold size="extraLarge">
          <Ionicons name="md-settings" size={30} color="#2D0C57" /> Settings
        </Heading>
        <Wrapper>
          <Title bold size="medium">
            Account
          </Title>
          {items.map(setting => (
            <SettingItem
              key={setting.id}
              onPress={() => {
                if (setting.screen === 'Logout') {
                  logout();
                } else {
                  navigation.navigate(setting.screen, setting.props);
                }
              }}
              color={setting.color}
            >
              <Text lite>{setting.title}</Text>
              {/* <MaterialIcons name="navigate-next" size={30} /> */}
              {/* <AntDesign name="arrowleft" size={24} />; */}
            </SettingItem>
          ))}
          <TitleBottom bold size="medium">
            System
          </TitleBottom>
          {items2.map(setting => (
            <SettingItem
              key={setting.id}
              onPress={() => navigation.navigate(setting.screen)}
              color={setting.color}
            >
              <Text lite>{setting.title}</Text>
              {/* <MaterialIcons name="navigate-next" size={30} /> */}
            </SettingItem>
          ))}
          {(user.type === 'courier' || user.type === 'restaurant') && (
            <SettingItem onPress={() => navigation.navigate('OrderList')}>
              <Text lite>
                {user.type === 'restaurant' ? 'Restaurant' : 'Courier'}{' '}
                Dashboard
              </Text>
              {/* <MaterialIcons name="navigate-next" size={30} /> */}
            </SettingItem>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
};

Settings.navigationOptions = {
  headerShown: false,
};

export default Settings;
