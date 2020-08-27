/* eslint-disable global-require */
/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import Layout from '../components/Layout';
import LoginButton  from '../components/elements/LoginButton';

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

const Rectangle4 = styled.View`
position: absolute;
left: 6.93%;
right: 5.87%;
top: 23.03%;
bottom: 76.85%;

border: 1px solid #B7007B;
`;

const Phonenumber = styled(TextInput)`
position: absolute;
left: 6.4%;
right: 35.2%;
top: 16.5%;
bottom: 81.77%;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;

color: #8D92A3;
`;

const BoxCopy = styled.View`
position: absolute;
left: 6.4%;
right: 6.4%;
top: 30.79%;
bottom: 69.09%;
`;

const Rectangle5 = styled.View`
position: absolute;
left: 6.4%;
right: 6.4%;
top: 30.79%;
bottom: 69.09%;

background: #F1F3F8;
`;

const VerificationCode = styled(TextInput)`
position: absolute;
left: 6.4%;
right: 35.2%;
top: 27.22%;
bottom: 70.44%;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #8D92A3;
`;

const Vector = styled.View`
position: absolute;
left: 6.93%;
right: 93.07%;
top: 18.84%;
bottom: 78.38%;

border: 2px solid #2F2E41;
border-radius: 6px;
`;

const LoginBox = styled.View`
position: absolute;
left: 6.4%;
right: 6.4%;
top: 54.93%;
bottom: 38.3%;

background: #B0B0B0;
border-radius: 5px;
`;

const SendingCodeScreen = ({ navigation }) => (
  <Layout>
    <Container>
    <LeftArrowImage source={require('../assets/images/LeftArrow.png')} />
    <Phonenumber 
    placeholder="PhoneNumber"
    keyboardType="numeric"
    autoCapitalize="none"
    autoCorrect={false}
    autoFocus={true}
  />
  <Vector />
  <Rectangle4 />
    <VerificationCode
    placeholder="VerificationCode"
    keyboardType="numeric"
    autoCapitalize="none"
    autoCorrect={false}
    autoFocus={true}
  />
  <Rectangle5 />
  <BoxCopy /> 
    <LoginBox>
      <LoginButton
        title="Log In"
        size="sm"
        onPress={() => {
          navigation.navigate('AddingSendButtonScreen');
        }}
      />
  </LoginBox>
  </Container>
  </Layout>
);
SendingCodeScreen.navigationOptions = {
  headerShown: false,
};
export default SendingCodeScreen;