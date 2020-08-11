import React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { Alert, Dimensions } from 'react-native';
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
  padding-vertical: 50;
`;

const TextStyled = styled(Text)`
  margin-vertical: 15;
  text-align: center;
`;

const InputContainer = styled.View`
  width: ${width / 1.2};
  flex: 1;
  margin-bottom: 20;
`;

const InputTextWrapper = styled(TextInput)`
  margin-bottom: 20;
`;

const ButtonContainer = styled.View`
  width: 100%;
`;

const meQuery = gql`
  query meUsername {
    me {
      id
      firstName
      lastName
    }
  }
`;

const updateMeMutation = gql`
  mutation updateMeUsername($input: UpdateUserInput!) {
    updateMe(input: $input) {
      id
      firstName
      lastName
    }
  }
`;

const UserName = ({ navigation }) => {
  const { loading, error, data } = useQuery(meQuery, {
    fetchPolicy: 'cache-and-network',
  });
  const updateFullName = data && data.me ? data.me : {};
  const [executeUpdateMe] = useMutation(updateMeMutation);

  return (
    <Layout>
      <Container>
        <Wrapper behavior="padding">
          {error && <Error title={error.message} />}
          {loading && <Loading />}
          <TextContainer>
            <TextStyled bold size="large">
              Whats your Full Name?
            </TextStyled>
          </TextContainer>
          <Formik
            enableReinitialize
            initialValues={{
              firstName: updateFullName.firstName || '',
              lastName: updateFullName.lastName || '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              executeUpdateMe({ variables: { input: values } });
              setSubmitting(false);
              Alert.alert('Updated!');
              setTimeout(() => navigation.goBack(), 2000);
            }}
            validationSchema={() =>
              yup.object().shape({
                firstName: yup.string().required('First Name is required.'),
                lastName: yup.string().required('Surname is required.'),
              })
            }
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <InputContainer>
                <InputTextWrapper
                  placeholder="First name"
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  autoCorrect={false}
                />
                <InputTextWrapper
                  placeholder="Surname"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  autoCorrect={false}
                />
                <ButtonContainer>
                  <Button title="Continue" onPress={handleSubmit} />
                </ButtonContainer>
              </InputContainer>
            )}
          </Formik>
        </Wrapper>
      </Container>
    </Layout>
  );
};
UserName.navigationOptions = {
  headerShown: true,
  title: '',
  headerStyle: {
    backgroundColor: '#F6F5F5',
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default UserName;
