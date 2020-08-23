import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

import { Button, TextInput, Text } from '../elements';

const Container = styled.View`
	flex-direction: column ;
  
`;

const InputContainer = styled.View`
  border-radius: 4;
  padding-bottom: 15;
  padding-horizontal: 15;
  margin-top: 50;
`;

const InputFirst = styled(TextInput)`
  border-width: 1;
  border-color: ${props => props.theme.borderColor};
  border-radius: 4;
  margin-bottom: 15;
  
    
	border:none;
	border-bottom-width: 2px;
	border-bottom-color : #f1f3f8;
	
`;

const InputSecond = styled(TextInput)`
  border-width: 1;
  border-color: ${props => props.theme.borderColor};
  border-radius: 4;
  
	border:none;
	border-bottom-width: 2px;
	border-bottom-color : #f1f3f8
`;

const LoginButton = styled(Button)`
	align-self: flex-end;
	position: absolute;
    bottom:0;
    left:0;
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
          placeholder="Phone Number"
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
          placeholder="Verification Code"
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
	  {/*
	 <Button
        title="Log In"
        onPress={handleSubmit}
        isLoading={isSubmitting || isLoading || loading}
		
      />
	  */}
	  
	   
		<LoginButton
			 title="Log In"
			 onPress={handleSubmit}
			 isLoading={isSubmitting || isLoading || loading}
		>
		</LoginButton>
	  
    </Container>
  );
};
const enhancer = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'LoginEmailForm', // helps with React DevTools
});
export default enhancer(LoginEmailForm);
