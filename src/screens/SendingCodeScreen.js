/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
import { Text, ImageBackground,
  StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import LeftArrow from '../assets/images/LeftArrow.png';
import LoginButton  from '../components/elements/LoginButton';

const styles = StyleSheet.create({
  imageContainer: {
    width: 19.38,
    height: 14,
    left: 30,
    top: 62,
  },
});
const Container = styled.View`
  width: 375px;
  height: 812px;
  background: #ffffff;
`;
/* Group 1 */
const Group = styled.View`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0.99%;
`;
/* Navigation  */
const Navigation = styled.View`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 94.58%;
`;

/* Group18 */
const Group18 = styled.View`
position: absolute;
left: 6.4%;
right: 5.87%;
top: 16.5%;
bottom: 69.09%;
`;
/* Color/White Copy */
const WhiteCopy = styled.View`
position: absolute;
left: 6.93%;
right: 5.87%;
top: 23.03%;
bottom: 76.85%;
`;

/* Rectangle 4 */
const Rectangle4 = styled.View`
position: absolute;
left: 6.93%;
right: 5.87%;
top: 23.03%;
bottom: 76.85%;

border: 1px solid #B7007B;
`;


/* Phone number */
const Phonenumber = styled.View`
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
/* Color/White Copy */
const BoxCopy = styled.View`
position: absolute;
left: 6.4%;
right: 6.4%;
top: 30.79%;
bottom: 69.09%;
`;
/* Rectangle 5 */
const Rectangle5 = styled.View`
position: absolute;
left: 6.4%;
right: 6.4%;
top: 30.79%;
bottom: 69.09%;

background: #F1F3F8;
`;
/* VerificationCode */
const VerificationCode = styled.View`
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
color: #8D92A3;
`;
const SendcodeBox = styled.View`
position: absolute;
left: 71.47%;
right: 5.87%;
top: 18.35%;
bottom: 77.96%;

background: #B7007B;
border-radius: 3px;
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
    <ImageBackground source={LeftArrow} style={styles.imageContainer} />
    <Rectangle4></Rectangle4>
    <Phonenumber> 
      <Text>PhoneNumber</Text> 
    </Phonenumber>
    <SendcodeBox> 
      <Text>SendCode</Text> 
    </SendcodeBox>
    <BoxCopy></BoxCopy>
    <Rectangle5></Rectangle5>
    <VerificationCode> 
    <Text> VerificationCode </Text>
    </VerificationCode> 
    <LoginBox>
      <LoginButton
        title="Log In"
        size="sm"
        onPress={() => {
          navigation.navigate('GetStarted');
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
