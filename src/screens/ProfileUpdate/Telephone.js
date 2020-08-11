// https://app.zeplin.io/project/5c95e8397168bc0657670fc6/screen/5d6a3f7cb97b6e156e7b7d80
import React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { Alert, Dimensions } from 'react-native';

import { navigationOptions } from '../../components/TopNavigation';
import {
  Text,
  Button,
  TextInput,
  InputGroup,
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
  query meTelephone {
    me {
      id
      mobile
    }
  }
`;

const updateMeMutation = gql`
  mutation updateMeTelephone($input: UpdateUserInput!) {
    updateMe(input: $input) {
      id
      mobile
    }
  }
`;
const Telephone = ({ navigation }) => {
  const { loading, error, data } = useQuery(meQuery, {
    fetchPolicy: 'cache-and-network',
  });
  const me = data && data.me ? data.me : {};
  const [executeUpdateMe] = useMutation(updateMeMutation);
  return (
    <Layout>
      <Container>
        <Wrapper behavior="padding" enabled>
          {error && <Error title={error.message} />}
          {loading && <Loading />}
          <TextContainer>
            <TextStyled bold size="large">
              You can update your contact
            </TextStyled>
          </TextContainer>
          <Formik
            enableReinitialize
            initialValues={{
              mobile: me.mobile || '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              executeUpdateMe({ variables: { input: values } });
              setSubmitting(false);
              Alert.alert('Updated!');
              setTimeout(() => navigation.goBack(), 2000);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <InputContainer>
                <InputTextWrapper
                  placeholder="Your mobile number"
                  onChangeText={handleChange('mobile')}
                  onBlur={handleBlur('mobile')}
                  value={values.mobile}
                  keyboardType="number-pad"
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
Telephone.navigationOptions = {
  headerShown: true,
  title: '',
  headerStyle: {
    backgroundColor: '#F6F5F5',
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default Telephone;
