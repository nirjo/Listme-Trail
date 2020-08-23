import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { Keyboard, Alert, AsyncStorage } from 'react-native';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useStoreActions } from 'easy-peasy';

import { Text, Image, FadeInAnimation } from '../components/elements';
import Layout from '../components/Layout';
import LoginEmailForm from '../components/forms/LoginEmailForm';
import logo from '../assets/images/logo.png';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.lightShades};
`;
const Top = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 50;
  padding-bottom: 15;
`;
const Middle = styled.View`
  flex: ${props => (props.isKeyboardActive ? 2 : 1)};
  padding-horizontal: 20;
`;

const TextStyled = styled(Text)`
  align-self: center;
  color: ${props => props.theme.textColor};
`;
const LoginText = styled(TextStyled)`
  padding-vertical: 10;
`;
const LogoLite = styled(Image)`
  margin-bottom: 10;
  align-self: center;
`;

const RegisterText = styled(Text)`
  text-align: center;
  margin-top: 25;
`;

const loginMutation = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      jwt
      user {
        id
        email
        type
      }
    }
  }
`;

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  const { t } = useTranslation();
  const [login, { error }] = useMutation(loginMutation);
  const setUser = useStoreActions(actions => actions.user.setUser);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setIsKeyboardActive(true));
    Keyboard.addListener('keyboardDidHide', () => setIsKeyboardActive(false));
  }, []);

  useEffect(() => {
    if (error) {
      setLoading(false);
      Alert.alert(t('Login Invalid'));
    }
  }, [error]);

  const handleSubmit = async data => {
    setLoading(true);
    const response = await login({ variables: { input: data } });
    const { login: loginRes } = response.data;
    await AsyncStorage.setItem('token', loginRes.jwt);
    setUser(loginRes.user);
    setTimeout(() => navigation.navigate('AllowNotifications'), 100);
  };
  // f1() =>{};
   	
// onFocus={() =>console.log("focus received" ) }
          // onBlur={() => console.log("focus lost") } 
  return (
    <Layout>
      <Container>
        {/*<Top isKeyboardActive={isKeyboardActive}>
         
          <TextStyled semibold size="medium">
            Log In
          </TextStyled>
          <LoginText size="small" center>
            Enter your login details to access your account
          </LoginText>
        </Top>*/}
        <Middle isKeyboardActive={isKeyboardActive}>
          <FadeInAnimation duration={800}>
            <LoginEmailForm
              loading={loading}
              handleSubmit={handleSubmit}
              navigation={navigation}
              
            />
			
			{/* hasForgotOption
            />
			*/}
			
			
			{/*
            <RegisterText
              size="small"
              onPress={() => navigation.navigate('Register')}
            >
              Create account
            </RegisterText>
			*/}
          </FadeInAnimation>
        </Middle>
      </Container>
    </Layout>
  );
};

Login.navigationOptions = {
  headerShown: false,
};

export default Login;
