import React from 'react';
import styled from 'styled-components/native';
import { useStoreActions } from 'easy-peasy';
import { KeyboardAvoidingView } from 'react-native';

import { Text, Image, Button } from '../components/elements';
import Layout from '../components/Layout';
import logoImg from '../assets/images/logo.png';

const Container = styled.ScrollView`
  flex: 1;
  padding-horizontal: 20;
`;
const Logo = styled(Image)`
  margin-top: 220;
  margin-bottom: 20;
  align-self: center;
`;
const Top = styled.View`
  margin-top: 220;
  flex: 2;
  justify-content: center;
`;
const Middle = styled.View`
  padding-bottom: 30;
  padding-top: 10;
  flex: 1;
  padding-horizontal: 30;
`;
const TextStyled = styled(Text)`
  align-self: center;
  color: ${props => props.theme.textColor};
`;
const AboutText = styled(TextStyled)`
  line-height: 20;
  padding-top: 10;
`;
const SkipTextWrapper = styled.TouchableOpacity``;
const SkipText = styled(TextStyled)`
  padding-vertical: 35;
`;

const AllowNotifications = ({ navigation }) => {
  const isLoggedIn = useStoreActions(actions => actions.user.setIsLoggedIn);
  const handleLogin = () => {
    isLoggedIn(true);
    navigation.navigate('Dashboard');
  };
  return (
    <Layout>
      <Container>
        <KeyboardAvoidingView behavior="padding">
          <Top>
            {/* <Logo source={logoImg} width={110} height={100} /> */}
          </Top>
          <Middle>
            <TextStyled size="extraLarge" bold>
              Notifications
            </TextStyled>
            <AboutText center light size="small">
              Food on Mood app can send you gentle push Notifications
            </AboutText>
          </Middle>
          <Button title="Allow" onPress={handleLogin} />
          <SkipTextWrapper onPress={handleLogin}>
            <SkipText light semibold>
              Skip
            </SkipText>
          </SkipTextWrapper>
        </KeyboardAvoidingView>
      </Container>
    </Layout>
  );
};

AllowNotifications.navigationOptions = {
  headerShown: false,
};

export default AllowNotifications;
