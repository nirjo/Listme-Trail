import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { Alert, Dimensions, Keyboard } from 'react-native';
import * as yup from 'yup';

import { navigationOptions } from '../../components/TopNavigation';
import {
  Text,
  Button,
  TextInput,
  Error,
  Loading,
} from '../../components/elements';
import Layout from '../../components/Layout';

const { width } = Dimensions.get('window');

const Container = styled.ScrollView`
  background-color: ${props => props.theme.lightShades};
  padding-horizontal: 25;
  flex: 1;
`;

const Wrapper = styled.KeyboardAvoidingView`
  align-items: center;
`;

const TextContainer = styled.View`
  flex: 1;
  padding-vertical: 15;
`;

const TextStyled = styled(Text)`
  margin-vertical: 15;
  text-align: center;
`;

const SubTextStyled = styled(Text)`
  text-align: center;
  line-height: 24;
`;

const InputContainer = styled.View`
  width: 100%;
  margin-top: 20;
`;

const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const InputTextWrapper = styled(TextInput)`
  margin-bottom: 20;
`;

const ButtonWrapper = styled.View`
  width: ${width / 1.1};
  padding-right: 25;
  align-items: center;
`;
const ButtonContainer = styled.View`
  width: 100%;
`;

const Skip = styled(Text)`
  margin-top: 15;
`;

// const meQuery = gql`
//   {
//     me {
//       id
//       profile {
//         firstName
//         lastName
//       }
//     }
//   }
// `;

const verifyCreditCard = gql`
  mutation verifyCard($input: VerifyCardInput!) {
    verifyCard(input: $input) {
      token
    }
  }
`;

const addCardMutation = gql`
  mutation addCard($sourceToken: String!) {
    addCard(sourceToken: $sourceToken) {
      id
      last4
    }
  }
`;

const AddCreditCard = ({ navigation }) => {
  // const { loading, error, data } = useQuery(meQuery, {
  //   fetchPolicy: 'cache-and-network',
  // });
  const [
    executeVerifyCard,
    { loading: loadingVerifyCard, error: errorVerifyCard },
  ] = useMutation(verifyCreditCard);
  const [
    executeAddCard,
    { loading: loadingAddCard, error: errorAddCard },
  ] = useMutation(addCardMutation);
  // const { me } = data;
  // console.log('executeVerifyCard', executeVerifyCard);

  const goNext = useCallback(
    () => navigation.navigate('RegisterEventInstruction'),
    [navigation],
  );

  return (
    <Layout>
      <Container>
        <Wrapper behavior="padding" enabled>
          {errorVerifyCard && <Error title={errorVerifyCard.message} />}
          {errorAddCard && <Error title={errorAddCard.message} />}
          {(loadingVerifyCard || loadingAddCard) && <Loading />}
          <TextContainer>
            <TextStyled bold size="large">
              Enter your card details
            </TextStyled>
            <SubTextStyled lite size="small">
              Nothing will be taken from your account until you are accepted
              into the event.
            </SubTextStyled>
          </TextContainer>
          <Formik
            enableReinitialize
            onSubmit={async (values, { setSubmitting }) => {
              const cardData = await executeVerifyCard({
                variables: { input: values },
              });
              await executeAddCard({
                variables: { sourceToken: cardData.data.verifyCard.token },
              });
              setSubmitting(false);
              Alert.alert('Updated!');
            }}
            initialValues={{ number: '', expMonth: '', expYear: '', cvc: '' }}
            validationSchema={() =>
              yup.object().shape({
                number: yup.string().required('Number is required.'),
                expMonth: yup.string().required('Month is required.'),
                expYear: yup.string().required('Year is required.'),
                cvc: yup.string().required('CVC is required.'),
              })
            }
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <>
                <InputContainer>
                  <InputTextWrapper
                    placeholder="Name on card"
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                  />
                  <InputTextWrapper
                    placeholder="Card Number"
                    autoCompleteType="cc-number"
                    keyboardType="number-pad"
                    maxLength={16}
                    returnKeyType="next"
                    onChangeText={handleChange('number')}
                    onBlur={handleBlur('number')}
                    value={values.number}
                  />
                  <InputWrapper>
                    <InputTextWrapper
                      placeholder="Exp Month"
                      autoCompleteType="cc-exp-month"
                      keyboardType="number-pad"
                      maxLength={2}
                      returnKeyType="next"
                      onChangeText={handleChange('expMonth')}
                      onBlur={handleBlur('expMonth')}
                      value={values.expMonth}
                      width="30%"
                    />
                    <InputTextWrapper
                      placeholder="Exp Year"
                      autoCompleteType="cc-exp-year"
                      keyboardType="number-pad"
                      maxLength={4}
                      returnKeyType="next"
                      onChangeText={handleChange('expYear')}
                      onBlur={handleBlur('expYear')}
                      value={values.expYear}
                      width="30%"
                    />
                    <InputTextWrapper
                      placeholder="CVC"
                      autoCompleteType="cc-csc"
                      keyboardType="number-pad"
                      maxLength={3}
                      returnKeyType="go"
                      onChangeText={handleChange('cvc')}
                      onBlur={handleBlur('cvc')}
                      value={values.cvc}
                      width="30%"
                    />
                  </InputWrapper>
                </InputContainer>
                <ButtonContainer>
                  <Button title="Continue" onPress={handleSubmit} />
                </ButtonContainer>
              </>
            )}
          </Formik>
          {/* <ButtonWrapper>
            <Skip onPress={goNext}>Skip</Skip>
          </ButtonWrapper> */}
        </Wrapper>
      </Container>
    </Layout>
  );
};

AddCreditCard.navigationOptions = {
  headerShown: true,
  title: '',
  headerStyle: {
    backgroundColor: '#F6F5F5',
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default AddCreditCard;
