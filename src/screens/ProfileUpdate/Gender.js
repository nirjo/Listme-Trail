import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Alert } from 'react-native';

import { navigationOptions } from '../../components/TopNavigation';
import {
  Text,
  Button,
  SelectInput,
  Error,
  Loading,
} from '../../components/elements';
import Layout from '../../components/Layout';

const UpperShadow = styled.View`
  margin-top: 60;
  padding-horizontal: 35;
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-horizontal: 25;
`;

const TextContainer = styled.View``;

const TextStyled = styled(Text)`
  margin-vertical: 1;
  text-align: center;
  padding-horizontal: 25;
`;

const SubTextStyled = styled(Text)`
  margin-horizontal: 25;
  margin-vertical: 15;
  text-align: center;
  line-height: 24;
`;

const ButtonContainer = styled.View`
  width: 100%;
`;

// const meQuery = gql`
//   query meGender {
//     me {
//       id
//       profile {
//         sex
//       }
//     }
//   }
// `;

// const updateMeMutation = gql`
//   mutation updateMeGender($input: UpdateUserInput) {
//     updateMe(input: $input) {
//       id
//     }
//   }
// `;

const Gender = ({ navigation }) => {
  // const { loading, error, data } = useQuery(meQuery, {
  //   fetchPolicy: 'cache-and-network',
  // });
  // const [executeUpdateMe] = useMutation(updateMeMutation);

  // const { me: meData } = data;
  // const me = meData || {};
  // const { profile } = me;
  const [value, setValue] = useState('male');
  // console.log('me data', me);

  // useEffect(() => {
  //   if (profile && profile.sex) {
  //     setValue(profile.sex);
  //   }
  // }, [profile]);

  return (
    <Layout>
      <Wrapper>
        {/* {error && <Error title={error.message} />}
        {loading && <Loading />} */}
        <TextContainer>
          <TextStyled semibold size="medium">
            How do you identify yourself?
          </TextStyled>
        </TextContainer>
        <SelectInput
          options={[
            { key: 'male', value: 'Male' },
            { key: 'female', value: 'Female' },
          ]}
          // value={value}
          // onPress={val => setValue(val)}
        />
        <ButtonContainer>
          <Button
            title="Continue"
            onPress={() => {
              // executeUpdateMe({ variables: { input: { sex: value } } });
              // if (isRegister) {
              //   navigation.navigate('RegisterDateOfBirth');
              // } else {
              //   Alert.alert('Updated!');
              // }
            }}
          />
        </ButtonContainer>
      </Wrapper>
    </Layout>
  );
};

Gender.navigationOptions = navigationOptions({
  title: '',
});

export default Gender;
