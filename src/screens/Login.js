import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import {
  Keyboard,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useStoreActions } from 'easy-peasy';
import { FadeInAnimation } from '../components/elements';
import Layout from '../components/Layout';
import LoginEmailForm from '../components/forms/LoginEmailForm';

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
  return (
    <Layout>
      <Container>
        <Top isKeyboardActive={isKeyboardActive}></Top>
        <Middle isKeyboardActive={isKeyboardActive}>
          <FadeInAnimation duration={800}>
            <KeyboardAvoidingView>
              <LoginEmailForm
                loading={loading}
                handleSubmit={handleSubmit}
                navigation={navigation}
              />
            </KeyboardAvoidingView>
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
