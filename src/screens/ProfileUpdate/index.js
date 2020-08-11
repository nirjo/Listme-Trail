import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { ScrollView, Dimensions, Platform } from 'react-native';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import dayjs from 'dayjs';
import { startCase, toLower, find } from 'lodash';

import { navigationOptions } from '../../components/TopNavigation';
import { Text, Avatar, Loading, Error } from '../../components/elements';
import Layout from '../../components/Layout';
import ProfileUpdateItem from '../../components/ProfileUpdateItem';
import config from '../../utils/config';

const { height } = Dimensions.get('window');

const Wrapper = styled(ScrollView)`
  flex: 1;
  padding-top: 10;
  padding-horizontal: 20;
  background-color: ${props => props.theme.lightShades};
  min-height: ${height};
`;
const Title = styled(Text)`
  margin-top: 12;
`;
const Email = styled(Text)`
  color: ${props => props.theme.textGrey};
  margin-top: 3;
`;
const ProfileContainer = styled.TouchableOpacity`
  padding-vertical: 25;
  flex-direction: row;
`;
const Details = styled.TouchableOpacity`
  margin-left: 15;
`;
const BottomSpacing = styled.View`
  height: 100;
  width: 100%;
`;
const ProfileItems = styled.View`
  padding-horizontal: ${Platform.OS === 'ios' ? 0 : 5};
  margin-bottom: 15;
`;
const meQuery = gql`
  query meProfile {
    me {
      id
      email
      status
      mobile
      firstName
      lastName
      address {
        addressLine1
        addressLine2
        city
        postcode
      }
    }
  }
`;

const ProfileUpdate = ({ navigation }) => {
  const { loading, error, data } = useQuery(meQuery, {
    fetchPolicy: 'cache-and-network',
  });
  const profile = data && data.me ? data.me : {};

  // const { me: meData } = data;
  // const me = meData || {};
  // let { profile } = me;

  // if (!profile) {
  //   profile = {};
  // }
  // console.log('me data', me);

  // let mood =
  //   profile && profile.mood
  //     ? find(config.moods, { key: profile.mood })
  //     : undefined;
  // mood = mood ? mood.value : '';
  return (
    <Layout>
      <Wrapper>
        {error && <Error title={error.message} />}
        {loading && !profile && <Loading />}
        <Text bold size="extraLarge">
          My profile
        </Text>
        <ProfileContainer
          onPress={() =>
            navigation.navigate({
              // routeName: 'UserProfile',
              // params: {
              //   userId: me.id,
              // },
              // key: `UserProfile-${me.id}`,
            })
          }
        >
          <Avatar
          // source={
          //   profile && profile.image ? { uri: profile.image } : undefined
          // }
          />
          <Details>
            <Title semibold>
              {profile && profile.firstName && profile.lastName
                ? `${profile.firstName} ${profile.lastName}`
                : ''}
            </Title>
            <Email size="small">{profile.email}</Email>
          </Details>
        </ProfileContainer>
        <ProfileItems>
          {/* <ProfileUpdateItem icon id="ProfilePicture" title="Upload Photo" /> */}
          <ProfileUpdateItem
            icon
            id="ProfileUserName"
            title="Full Name"
            details={`${profile.firstName} ${profile.lastName}`}
          />
          <ProfileUpdateItem
            icon
            id="ProfileEmail"
            title="Email"
            details={profile.email}
          />
          <ProfileUpdateItem
            id="ProfileTelephone"
            icon
            title="Mobile"
            details={profile.mobile}
          />
          <ProfileUpdateItem
            icon
            id="ProfileShippingAddress"
            title="Shipping addresses"
            details={
              profile.address
                ? `${profile.address.addressLine1} ${profile.address.addressLine2}`
                : ''
            }
          />

          <ProfileUpdateItem
            id=""
            title="Payment methods"
            details="Pay at door step"
          />
        </ProfileItems>
        <BottomSpacing />
        <BottomSpacing />
      </Wrapper>
    </Layout>
  );
};
ProfileUpdate.navigationOptions = {
  headerShown: true,
  title: '',
  headerStyle: {
    backgroundColor: '#F6F5F5',
    elevation: 0,
    shadowOpacity: 0,
  },
};
export default ProfileUpdate;
