/* eslint-disable global-require */
/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import Layout from '../components/Layout';
import LoginButton  from '../components/elements/LoginButton';
import SendBtn  from '../components/elements/SendBtn';
import TimerBtn  from '../components/elements/TimerBtn';

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

const Phonenumber = styled.Text`
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


const UI = styled(TextInput)`
position: absolute;
left: 6.4%;
right: 35.2%;
top: 19.46%;
bottom: 78.2%;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #000000;
`;

const LoginBox = styled.View`
position: absolute;
left: 6.4%;
right: 6.4%;
top: 54.93%;
bottom: 38.3%;

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

const AddButtonScreen = ({ navigation }) => (
  <Layout>
    <Container>
    <LeftArrowImage source={require('../assets/images/LeftArrow.png')} />
    <SendBtn />
    <UI
  placeholder="548156166"
  keyboardType="numeric"
  autoCapitalize="none"
  autoCorrect={false}
  autoFocus={true}
/>
<Phonenumber>Phonenumber</Phonenumber>
<Rectangle4></Rectangle4>

    <VerificationCode
    placeholder="VerificationCode"
    keyboardType="numeric"
    autoCapitalize="none"
    autoCorrect={false}
    autoFocus={true}
  />
    <Rectangle5 />
    <LoginBox>
      <LoginButton
        title="Log In"
        size="sm"
        onPress={() => {
          navigation.navigate('TimerScreen');
        }}
      />
  </LoginBox>
  </Container>
  </Layout>
);
AddButtonScreen.navigationOptions = {
  headerShown: false,
};
export default AddButtonScreen;
