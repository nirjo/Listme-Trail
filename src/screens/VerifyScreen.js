/* eslint-disable global-require */
/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/native';

import Layout from '../components/Layout';
import LogForm from '../components/forms/LogForm';
import LoginButton from '../components/elements/LoginButton';

// Adding container and login button with login form

const LeftArrowImage = styled.Image`
  position: absolute;
  width: 19.38px;
  height: 14px;
  left: 30px;
  top: 62px;
`;

const Container = styled.View`
  width: 375px;
  height: 812px;
  background: #ffffff;
`;

const LoginBox = styled.View`
  position: absolute;
  left: 6.4%;
  right: 6.4%;
  top: 82.27%;
  bottom: 10.96%;

  background: #b0b0b0;
  border-radius: 5px;
`;
const BottomContainer = styled.View`
  position: absolute;
  left: 32.27%;
  right: 32%;
  top: 98.4%;
  bottom: 0.99%;

  background: #000000;
  border-radius: 100px;
`;
const VerifyScreen = ({ navigation }) => (
  <Layout>
    <Container>
      <LogForm />
      <LeftArrowImage source={require('../assets/images/LeftArrow.png')} />
      <LoginBox>
        <LoginButton
          title="Log In"
          size="sm"
          onPress={() => {
            navigation.navigate('AddingNumberScreen');
          }}
        />
      </LoginBox>
    </Container>
  </Layout>
);
VerifyScreen.navigationOptions = {
  headerShown: false,
};

export default VerifyScreen;
