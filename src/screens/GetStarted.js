import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground, StyleSheet } from 'react-native';

import { Button } from '../components/elements';
import Layout from '../components/Layout';

import homeBg from '../assets/images/homeBg.png';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: 375,
    height: 804,
    left: 0,
    top: 0,
  },
});
const ButtonContainer = styled.View`
  padding-top: 20;
`;
const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.lightShades};
`;
const Top = styled.View`
  flex: 2.5;
  justify-content: center;
`;

const Middle = styled.View`
  padding-top: 30;
  flex: 1;
  padding-horizontal: 20;
`;
const GetStarted = ({ navigation }) => (
  <Layout>
    <Container>
      <Top>
        <ImageBackground source={homeBg} style={styles.imageContainer} />
      </Top>

      <Middle>
        <ButtonContainer>
          <Button
            title="Log In"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            title="Sign Up"
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
        </ButtonContainer>
      </Middle>
    </Container>
  </Layout>
);

GetStarted.navigationOptions = {
  headerShown: false,
};

export default GetStarted;
