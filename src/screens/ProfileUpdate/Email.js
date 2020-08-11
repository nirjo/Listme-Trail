import React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { Alert, Dimensions, KeyboardAvoidingView } from 'react-native';
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
  padding-horizontal: 20;
`;

const TextStyled = styled(Text)`
  margin-vertical: 15;
  text-align: center;
`;

const SubTextStyled = styled(Text)`
  margin-horizontal: 2;
  text-align: center;
  line-height: 24;
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
  query meEmail {
    me {
      id
      email
    }
  }
`;

const updateMeMutation = gql`
  mutation updateMeEmail($input: UpdateUserInput!) {
    updateMe(input: $input) {
      id
      email
    }
  }
`;

const Email = ({ navigation }) => {
  const { loading, error, data } = useQuery(meQuery, {
    fetchPolicy: 'cache-and-network',
  });
  const updateEmail = data && data.me ? data.me : {};
  const [executeUpdateMe] = useMutation(updateMeMutation);
  // const { me: meData } = data;
  // const me = meData || {};
  // const { profile } = me;
  // console.log('me data', me);
  return (
    <Layout>
      <Container>
        <Wrapper behavior="padding" enabled>
          {error && <Error title={error.message} />}
          {loading && <Loading />}
          <TextContainer>
            <TextStyled bold size="large">
              Update your Email
            </TextStyled>
          </TextContainer>
          <Formik
            enableReinitialize
            initialValues={{
              email: updateEmail.email || '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              executeUpdateMe({ variables: { input: values } });
              setSubmitting(false);
              Alert.alert('Updated!');
              setTimeout(() => navigation.goBack(), 2000);
            }}
            validationSchema={() =>
              yup.object().shape({
                email: yup.string().required('Email is required.'),
              })
            }
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <>
                <InputContainer>
                  <InputTextWrapper
                    placeholder="Your email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <ButtonContainer>
                    <Button title="Continue" onPress={handleSubmit} />
                  </ButtonContainer>
                </InputContainer>
              </>
            )}
          </Formik>
        </Wrapper>
      </Container>
    </Layout>
  );
};
Email.navigationOptions = {
  headerShown: true,
  title: '',
  headerStyle: {
    backgroundColor: '#F6F5F5',
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default Email;
