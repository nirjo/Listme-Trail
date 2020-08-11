import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

import { Button, TextInput, Text } from '../elements';

const Container = styled.View``;

const InputContainer = styled.View`
  border-radius: 4;
  padding-bottom: 15;
  padding-horizontal: 15;
`;

const InputFirst = styled(TextInput)`
  border-width: 1;
  border-color: ${props => props.theme.borderColor};
  border-radius: 4;
  margin-bottom: 15;
`;

const InputSecond = styled(TextInput)`
  border-width: 1;
  border-color: ${props => props.theme.borderColor};
  border-radius: 4;
`;

const ForgotText = styled.TouchableOpacity`
  align-items: flex-end;
  padding-bottom: 15;
  padding-horizontal: 15;
`;

const LoginEmailForm = props => {
  const {
    values,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    isLoading,
    errors,
    loading,
    hasForgotOption,
    navigation,
  } = props;

  return (
    <Container>
      <InputContainer>
        <InputFirst
          secondary
          placeholder="Email"
          onChangeText={email => setFieldValue('email', email)}
          value={values.email}
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          name="email"
          lite
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
        />
        <InputSecond
          secondary
          placeholder="Your Password"
          onChangeText={password => setFieldValue('password', password)}
          value={values.password}
          returnKeyType="go"
          name="password"
          // password={true}
          secureTextEntry={true}
          lite
          autoCapitalize="none"
          autoCorrect={false}
        />
      </InputContainer>
      {hasForgotOption && (
        <ForgotText onPress={() => navigation.navigate('ForgotPassword')}>
          <Text size="small"> Forgot Password?</Text>
        </ForgotText>
      )}
      <Button
        title="Continue"
        onPress={handleSubmit}
        isLoading={isSubmitting || isLoading || loading}
      />
    </Container>
  );
};
const enhancer = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Must be valid email')
      .required('Email address is required.'),
    password: yup.string().required('Please provide a valid password'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'LoginEmailForm', // helps with React DevTools
});
export default enhancer(LoginEmailForm);
