// https://app.zeplin.io/project/5c95e8397168bc0657670fc6/screen/5d6a3f7cb97b6e156e7b7d80
import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { isNull } from 'lodash';
import { Alert, Dimensions } from 'react-native';

import { useFileUpload } from '../../hooks';
import { navigationOptions } from '../../components/TopNavigation';
import {
  Text,
  Button,
  Error,
  Loading,
  Image,
  ImgPicker,
} from '../../components/elements';
import Layout from '../../components/Layout';

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 50;
  padding-horizontal: 25;
  background-color: ${props => props.theme.lightShades};
`;

const TextWrapper = styled.View``;

const TextStyled = styled(Text)`
  margin-vertical: 15;
  text-align: center;
`;

const SubTextStyled = styled(Text)`
  margin-horizontal: 2;
  text-align: center;
  line-height: 24;
`;

const CameraContainer = styled.TouchableOpacity`
  width: 100%;
  height: 200;
  border-radius: 7px;
  border-width: 1;
  border-color: ${props => props.theme.borderColor};
  align-items: center;
  justify-content: center;
  margin-top: 30;
  margin-bottom: 60;
`;

const ButtonWrapper = styled.View`
  width: 100%;
`;

const Skip = styled(Text)`
  margin-top: 15;
`;

// const meQuery = gql`
//   query meProfilePicture {
//     me {
//       id
//       profile {
//         image
//       }
//     }
//   }
// `;

// const updateMeMutation = gql`
//   mutation updateMeProfilePicture($input: UpdateUserInput) {
//     updateMe(input: $input) {
//       id
//     }
//   }
// `;

const ProfilePicture = ({ navigation }) => {
  // const { loading, error, data } = useQuery(meQuery, {
  //   fetchPolicy: 'cache-and-network',
  // });
  const [handleUpload, { image, fileUrl, isLoading }] = useFileUpload();
  // const [executeUpdateMe] = useMutation(updateMeMutation);
  // const { me } = data;

  // const profileImage =
  //   me && me.profile && me.profile.image ? me.profile.image : undefined;
  // console.log('image upload', image, fileUrl, me);

  const goNext = useCallback(
    () => navigation.navigate('RegisterEmailLocation'),
    [navigation],
  );

  // useEffect(() => {
  //   if (!isNull(fileUrl)) {
  //     executeUpdateMe({ variables: { input: { image: fileUrl } } });
  //     if (isRegister) {
  //       goNext();
  //     } else {
  //       Alert.alert('Updated!');
  //     }
  //   }
  // }, [executeUpdateMe, fileUrl, goNext, isRegister, navigation]);

  return (
    <Layout>
      <Wrapper>
        {/* {error && <Error title={error.message} />}
        {loading && !me && <Loading />}
        {isLoading && <Loading />} */}
        <TextWrapper>
          <TextStyled bold size="large">
            Upload profile picture
          </TextStyled>
        </TextWrapper>
        <ImgPicker />
        <ButtonWrapper>
          <Button title="Continue" onPress={goNext} />
          {/* {isRegister && <Skip onPress={goNext}>Skip</Skip>} */}
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  );
};

ProfilePicture.navigationOptions = {
  headerShown: true,
  title: '',
  headerStyle: {
    backgroundColor: '#F6F5F5',
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default ProfilePicture;
