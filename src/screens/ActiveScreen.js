/* eslint-disable global-require */
/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import Layout from '../components/Layout';
import LoginButton from '../components/elements/LoginButton';

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
  left: 6.4%;
  right: 6.4%;
  top: 23.77%;
  bottom: 76.11%;

  background: #f1f3f8;
`;

const Phonenumber = styled(TextInput)`
  position: absolute;
  left: 6.4%;
  right: 35.2%;
  top: 20.2%;
  bottom: 77.46%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #8d92a3;
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
  top: 23.77%;
  bottom: 76.11%;

  background: #f1f3f8;
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
  color: #8d92a3;
`;

const LoginBox = styled.View`
  position: absolute;
  left: 6.4%;
  right: 6.4%;
  top: 54.93%;
  bottom: 38.3%;

  background: #b0b0b0;
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
            navigation.navigate('AddingNumberScreen');
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
