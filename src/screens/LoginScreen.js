/* eslint-disable global-require */
/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/native';
import LoginButton from '../components/elements/LoginButton';
import SignupButton from '../components/elements/SignupButton';

import Layout from '../components/Layout';
// import homeBg from '../assets/images/homeBg.png';

const AvatarBG = styled.ImageBackground`
  position: relative;
  width: 375px;
  height: 812px;
`;
const Container = styled.View`
  flex: 1;
`;

const LoginBox = styled.View`
  position: absolute;
  left: 6.4%;
  right: 6.4%;
  top: 73.15%;
  bottom: 20.07%;

  background: #b7007b;
  border-radius: 5px;
`;
const SignupBox = styled.View`
  position: absolute;
  left: 6.4%;
  right: 6.4%;
  top: 82.27%;
  bottom: 10.96%;

  border: 1px solid #b7007b;
  border-radius: 5px;
`;

const Bottom = styled.View`
  position: absolute;
  left: 32.27%;
  right: 32%;
  top: 98.4%;
  bottom: 0.99%;

  background: #ffffff;
  border-radius: 100px;
`;

const LoginScreen = ({ navigation }) => (
  <Layout>
    <Container>
      <AvatarBG source={require('../assets/images/homeBg.png')} />
      <LoginBox>
        <LoginButton
          title="Log In"
          onPress={() => {
            navigation.navigate('ActiveScreen');
          }}
        />
      </LoginBox>

      <SignupBox>
        <SignupButton
          title="Sign Up"
          onPress={() => {
            navigation.navigate('VerifyScreen');
          }}
        />
      </SignupBox>
      <Bottom></Bottom>
    </Container>
  </Layout>
);

LoginScreen.navigationOptions = {
  headerShown: false,
};

export default LoginScreen;
