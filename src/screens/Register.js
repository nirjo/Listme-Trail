import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Keyboard, Alert, AsyncStorage } from 'react-native';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useStoreActions } from 'easy-peasy';

import { Text, Image, FadeInAnimation } from '../components/elements';
import Layout from '../components/Layout';
import LoginEmailForm from '../components/forms/LoginEmailForm';
import logo from '../assets/images/logo.png';

const Container = styled.View`
  background-color: ${props => props.theme.lightShades};
  flex: 1;
`;
const Top = styled.View`
  justify-content: center;
  padding-horizontal: 50;
  padding-bottom: 20;
`;
const Middle = styled.View`
  flex: ${props => (props.isKeyboardActive ? 1.3 : 1)};
  padding-horizontal: 20;
`;

const registerMutation = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      jwt
      user {
        id
        email
        type
      }
    }
  }
`;

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  const [register, { error }] = useMutation(registerMutation);
  const setUser = useStoreActions(actions => actions.user.setUser);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setIsKeyboardActive(true));
    Keyboard.addListener('keyboardDidHide', () => setIsKeyboardActive(false));
  }, []);

  useEffect(() => {
    if (error) {
      setLoading(false);
      Alert.alert(error.message);
    }
  }, [error]);

  const handleSubmit = async data => {
    setLoading(true);
    const response = await register({ variables: { input: data } });
    const { register: registerRes } = response.data;
    await AsyncStorage.setItem('token', registerRes.jwt);
    setUser(registerRes.user);

    setTimeout(() => navigation.navigate('AllowNotifications'), 600);
  };

  return (
    <Layout>
      <Container>
        <Top isKeyboardActive={isKeyboardActive}>
          {/* <LogoLite source={logo} width={110} height={100} /> */}
        </Top>
        <Middle isKeyboardActive={isKeyboardActive}>
          <FadeInAnimation duration={800}>
            <LoginEmailForm loading={loading} handleSubmit={handleSubmit} />
          </FadeInAnimation>
        </Middle>
      </Container>
    </Layout>
  );
};

Register.navigationOptions = {
  headerShown: false,
};

export default Register;
