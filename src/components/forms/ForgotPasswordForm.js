import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

import { Button, TextInput } from '../elements';

const Container = styled.View``;

const InputContainer = styled.View`
  border-radius: 4;
  padding-bottom: 10;
`;

const Input = styled(TextInput)`
  border-width: 1;
  border-color: ${props => props.theme.borderColor};
  height: 55;
`;

const ForgotPasswordForm = props => {
  const {
    values,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    isLoading,
    errors,
    loading,
  } = props;
  const { t } = useTranslation();

  return (
    <Container>
      <InputContainer>
        <Input
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
      </InputContainer>
      <Button
        title={t('Continue')}
        onPress={handleSubmit}
        isLoading={isSubmitting || isLoading || loading}
      />
    </Container>
  );
};
const enhancer = withFormik({
  mapPropsToValues: () => ({
    email: '',
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Must be valid email')
      .required('Email address is required.'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'ForgotPasswordForm', // helps with React DevTools
});
export default enhancer(ForgotPasswordForm);
