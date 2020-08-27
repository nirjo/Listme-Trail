/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/native';
import {
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import LoginButton from '../elements/LoginButton';
import SendBtn from '../elements/SendBtn';

import Layout from '../Layout';

const Container = styled.View`
  position: absolute;
  width: 375px;
  height: 812px;
  background: #ffffff;
`;
/* UI Text/Heading/H4/G */

const Verify = styled(TextInput)`
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
  /* identical to box height */

  color: #8d92a3;
`;
const Rectangle4 = styled.View`
  position: absolute;
  left: 6.4%;
  right: 6.4%;
  top: 30.79%;
  bottom: 69.09%;

  background: #f1f3f8;
`;

/* 
const Rectangle4 = styled.View`
position: absolute;
left: 6.93%;
right: 5.87%;
top: 23.03%;
bottom: 76.85%;

border: 1px solid #B7007B;
`; 
*/

/* Phone number */
const Phnumber = styled(TextInput)`
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
const Rectangle5 = styled.View`
  position: absolute;
  left: 6.4%;
  right: 6.4%;
  top: 23.77%;
  bottom: 76.11%;

  background: #f1f3f8;
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

const LoginForm = ({ navigation }) => (
  <Layout>
    <Container>
      <Phnumber
        placeholder="PhoneNumber"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
      />
      <Rectangle5 />
      <Verify
        placeholder="VerificationCode"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
      />
      <Rectangle4 />
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

export default LoginForm;
