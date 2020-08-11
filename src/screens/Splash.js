import React from 'react';
import styled from 'styled-components/native';

import { Text } from 'react-native';
import { Image } from '../components/elements';
import logoImg from '../assets/images/logo.png';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const LogoImage = styled(Image)`
  align-self: center;
`;

const TextStyle = styled(Text)`
  font-size: 35;
`;

const Slogan = styled(Text)`
  margin-top: 20;
`;

class SplashScreen extends React.Component {
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (this.props.navigation && data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 1300),
    );

  render() {
    return (
      <Container>
        {/* <LogoImage source={logoImg} width={200} /> */}
        <TextStyle center bold>
          Splash Screen
        </TextStyle>
        <Slogan>Loading...</Slogan>
      </Container>
    );
  }
}

export default SplashScreen;
