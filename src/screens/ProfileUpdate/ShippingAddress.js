import React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { Alert, Dimensions } from 'react-native';
import * as yup from 'yup';
import { isNull } from 'lodash';

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
  padding-vertical: 13;
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
  query meAddress {
    me {
      id
      address {
        addressLine1
        addressLine2
        city
        postcode
      }
    }
  }
`;

const updateMeMutation = gql`
  mutation updateMe(
    $addressLine1: String!
    $addressLine2: String
    $city: String!
    $postcode: String!
  ) {
    updateMe(
      input: {
        address: {
          addressLine1: $addressLine1
          addressLine2: $addressLine2
          city: $city
          postcode: $postcode
        }
      }
    ) {
      address {
        addressLine1
        addressLine2
        city
        postcode
      }
    }
  }
`;

const ShippingAddress = ({ navigation }) => {
  const { loading, error, data } = useQuery(meQuery, {
    fetchPolicy: 'cache-and-network',
  });
  const [executeUpdateMe] = useMutation(updateMeMutation);
  const me = data && data.me ? data.me : {};
  console.log('me data', me);

  return (
    <Layout>
      <Container>
        <Wrapper behavior="padding">
          {error && <Error title={error.message} />}
          {loading && <Loading />}
          <TextContainer>
            <TextStyled bold size="large">
              Your Shipping Address
            </TextStyled>
          </TextContainer>
          <Formik
            enableReinitialize
            initialValues={!isNull(me.address) ? me.address : {}}
            onSubmit={(values, { setSubmitting }) => {
              executeUpdateMe({ variables: values });
              setSubmitting(false);
              Alert.alert('Updated!');
              setTimeout(() => navigation.goBack(), 2000);
            }}
            validationSchema={() =>
              yup.object().shape({
                addressLine1: yup.string().required('Address 1 is required.'),
                addressLine2: yup.string().required('Address 1 is required.'),
                city: yup.string().required('City is required.'),
              })
            }
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <InputContainer>
                <InputTextWrapper
                  placeholder="Address 1"
                  onChangeText={handleChange('addressLine1')}
                  onBlur={handleBlur('addressLine1')}
                  value={values.addressLine1}
                  autoCorrect={false}
                />
                <InputTextWrapper
                  placeholder="Address 2"
                  onChangeText={handleChange('addressLine2')}
                  onBlur={handleBlur('addressLine2')}
                  value={values.addressLine2}
                  autoCorrect={false}
                />
                <InputTextWrapper
                  placeholder="City"
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
                  autoCorrect={false}
                />
                <InputTextWrapper
                  placeholder="Post Code"
                  onChangeText={handleChange('postcode')}
                  onBlur={handleBlur('postcode')}
                  value={values.postcode}
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
ShippingAddress.navigationOptions = {
  headerShown: true,
  title: '',
  headerStyle: {
    backgroundColor: '#F6F5F5',
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default ShippingAddress;
