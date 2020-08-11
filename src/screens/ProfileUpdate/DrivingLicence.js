import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { isNull } from 'lodash';
import { Alert, Dimensions } from 'react-native';

import { useFileUpload } from '../../hooks';
import { navigationOptions } from '../../components/TopNavigation';
import { Text, Button, Error, Loading, Image } from '../../components/elements';
import Layout from '../../components/Layout';

const { width } = Dimensions.get('window');

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 50;
  padding-horizontal: 25;
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
  width: ${width / 1.1};
  padding-right: 25;
  align-items: center;
`;

const Skip = styled(Text)`
  margin-top: 15;
`;

// const meQuery = gql`
//   query meDrivingLicence {
//     me {
//       id
//       profile {
//         identification
//       }
//     }
//   }
// `;

// const updateMeMutation = gql`
//   mutation updateMeDrivingLicence($input: UpdateUserInput) {
//     updateMe(input: $input) {
//       id
//     }
//   }
// `;

const DrivingLicence = ({ navigation }) => (
  // const { loading, error, data } = useQuery(meQuery, {
  //   fetchPolicy: 'cache-and-network',
  // });
  // const [handleUpload, { image, fileUrl, isLoading }] = useFileUpload();
  // const [executeUpdateMe] = useMutation(updateMeMutation);
  // const { me } = data;
  // const identificationImage =
  //   me && me.profile && me.profile.identification
  //     ? me.profile.identification
  //     : undefined;
  // console.log('me', me);

  // const goNext = useCallback(() => {
  //   navigation.navigate('RegisterPicture');
  // }, [navigation]);

  // useEffect(() => {
  //   if (!isNull(fileUrl)) {
  //     executeUpdateMe({ variables: { input: { identification: fileUrl } } });
  //     if (isRegister) {
  //       goNext();
  //     } else {
  //       Alert.alert('Updated!');
  //     }
  //   }
  // }, [executeUpdateMe, fileUrl, goNext, isRegister, navigation]);

  <Layout>
    <Wrapper>
      {/* {error && <Error title={error.message} />}
        {loading && !me && <Loading />}
        {isLoading && <Loading />} */}
      <TextWrapper>
        <TextStyled bold size="large">
          Grab your ID
        </TextStyled>
        <SubTextStyled lite>
          We ask this to make sure your identification matches.
        </SubTextStyled>
      </TextWrapper>
      {/* <CameraContainer onPress={handleUpload}>
          {image && <Image source={image} width="100%" height={200} />}
          {!image && identificationImage && (
            <Image
              source={{ uri: identificationImage }}
              width="100%"
              height={200}
            />
          )}
          {!image && !identificationImage && (
            <Text lite size="extraSmall">
              Place ID within lines
            </Text>
          )}
        </CameraContainer> */}
      <ButtonWrapper>
        {/* <Button title="Continue" onPress={goNext} />
          {isRegister && <Skip onPress={goNext}>Skip</Skip>} */}
      </ButtonWrapper>
    </Wrapper>
  </Layout>
);
DrivingLicence.navigationOptions = navigationOptions({
  title: '',
});

export default DrivingLicence;
