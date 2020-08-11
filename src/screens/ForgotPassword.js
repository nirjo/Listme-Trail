import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { Keyboard, Alert } from 'react-native';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { Text, Image, FadeInAnimation } from '../components/elements';
import Layout from '../components/Layout';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import logo from '../assets/images/logo.png';

const Container = styled.View`
  flex: 1;
`;
const Top = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 50;
  padding-bottom: 20;
`;
const Middle = styled.View`
  flex: ${props => (props.isKeyboardActive ? 0.6 : 1)};
  padding-horizontal: 20;
`;

const TextStyled = styled(Text)`
  align-self: center;
  color: ${props => props.theme.textColor};
`;
const LoginText = styled(TextStyled)`
  padding-vertical: 15;
`;
const LogoLite = styled(Image)`
  margin-bottom: 10;
  align-self: center;
`;

const forgotPasswordMutation = gql`
  mutation forgotPassword($input: ForgotPasswordInput!) {
    forgotPassword(input: $input) {
      success
    }
  }
`;

const ForgotPassword = ({ navigation }) => {
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  const [executeMutation] = useMutation(forgotPasswordMutation);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setIsKeyboardActive(true));
    Keyboard.addListener('keyboardDidHide', () => setIsKeyboardActive(false));
  }, []);

  return (
    <Layout>
      <Container>
        <Top isKeyboardActive={isKeyboardActive}>
          {/* <LogoLite source={logo} width={110} height={100} /> */}
          <TextStyled semibold size="medium">
            Forgot Password
          </TextStyled>
          <LoginText center size="small">
            Enter your mail to recover your password
          </LoginText>
        </Top>
        <Middle isKeyboardActive={isKeyboardActive}>
          <FadeInAnimation duration={800}>
            <ForgotPasswordForm
              handleSubmit={async data => {
                await executeMutation({ variables: { input: data } });
                Alert.alert('An email has been sent, please check your Inbox');
                setTimeout(() => navigation.goBack(), 600);
              }}
            />
          </FadeInAnimation>
        </Middle>
      </Container>
    </Layout>
  );
};

ForgotPassword.navigationOptions = {
  headerShown: false,
};

export default ForgotPassword;
