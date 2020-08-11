import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker'; // No support for xpo
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Alert } from 'react-native';

import { navigationOptions } from '../../components/TopNavigation';
import { Text, Button, Error, Loading } from '../../components/elements';
import Layout from '../../components/Layout';

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-horizontal: 25;
`;
const DateWrapper = styled.View`
  width: 100%;
  min-height: 260;
`;

const TextContainer = styled.View``;
const ButtonContainer = styled.View`
  width: 100%;
`;

const TextStyled = styled(Text)`
  margin-vertical: 20;
  text-align: center;
`;

const SubTextStyled = styled(Text)`
  margin-horizontal: 25;
  text-align: center;
  line-height: 24;
`;

// const meQuery = gql`
//   query meDob {
//     me {
//       id
//       profile {
//         dob
//       }
//     }
//   }
// `;

// const updateMeMutation = gql`
//   mutation updateMeDob($input: UpdateUserInput) {
//     updateMe(input: $input) {
//       id
//     }
//   }
// `;

const DateOfBirth = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));

  // const { loading, error, data } = useQuery(meQuery, {
  //   fetchPolicy: 'cache-and-network',
  // });
  // const { me: meData } = data;
  // const me = meData || {};
  // const { profile } = me;
  // const [date, setDate] = useState(
  //   profile && profile.dob ? new Date(profile.dob) : new Date(),
  // );
  // const [executeUpdateMe] = useMutation(updateMeMutation);
  // console.log('me data', me);

  // useEffect(() => {
  //   if (profile && profile.dob) {
  //     setDate(new Date(profile.dob));
  //   }
  // }, [profile]);

  const handleUpdate = () => {
    // update DB
    // executeUpdateMe({ variables: { input: { dob: date } } });
    // if (isRegister) {
    //   // go to next screen
    //   navigation.navigate('RegisterDrivingLicence');
    // } else {
    //   Alert.alert('Updated!');
    // }
  };
  return (
    <Layout>
      <Wrapper>
        {/* {error && <Error title={error.message} />}
        {loading && <Loading />} */}
        <TextContainer>
          <TextStyled bold size="large">
            What is your DOB?
          </TextStyled>
          <SubTextStyled lite>
            We ask this to make sure your identification matches.
          </SubTextStyled>
        </TextContainer>
        <DateWrapper>
          <DateTimePicker
            value={date}
            mode="date"
            // is24Hour={true}
            display="default"
            // onChange={(e, newDate) => setDate(newDate)}
          />
        </DateWrapper>
        <ButtonContainer>
          <Button title="Continue" onPress={handleUpdate} />
        </ButtonContainer>
      </Wrapper>
    </Layout>
  );
};

DateOfBirth.navigationOptions = navigationOptions({
  title: '',
});

export default DateOfBirth;
