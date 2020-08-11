import React from 'react';
import styled from 'styled-components/native';

import { Text, Image, Button } from '../components/elements';
import Layout from '../components/Layout';
import logoImg from '../assets/images/logo.png';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.lightShades};
`;
const Top = styled.View`
  flex: 1.4;
  justify-content: center;
`;

const Middle = styled.View`
  padding-top: 30;
  flex: 1;
  padding-horizontal: 20;
`;

const Logo = styled(Image)`
  margin-top: 250;
  margin-bottom: 20;
  align-self: center;
`;

const SignInLabel = styled(Text)`
  margin-top: 25;
  margin-bottom: 5;
`;
const SignInText = styled(Text)`
  color: ${props => props.theme.textBlue};
`;

const GetStarted = ({ navigation }) => (
  <Layout>
    <Container>
      <Top>
        {/* <Logo source={logoImg} width={200} height={130} /> */}
      </Top>
      <Middle>
        <Button
          title="Get Started"
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
        <SignInLabel center>Already have an account</SignInLabel>
        <SignInText
          center
          bold
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          Sign In
        </SignInText>
      </Middle>
    </Container>
  </Layout>
);

GetStarted.navigationOptions = {
  headerShown: false,
};

export default GetStarted;
