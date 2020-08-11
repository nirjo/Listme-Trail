import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  AppState,
  BackHandler,
  ScrollView,
} from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  modal: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#fff',
  },
  modalLite: {
    marginTop: 70,
    marginBottom: 25,
    marginLeft: 15,
    marginRight: 15,
  },
});

const borderRadius = 8;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
  border-top-right-radius: ${props => (!props.hasHeader ? borderRadius : 0)};
  border-top-left-radius: ${props => (!props.hasHeader ? borderRadius : 0)};
  border-bottom-right-radius: ${props => (props.lite ? borderRadius : 0)};
  border-bottom-left-radius: ${props => (props.lite ? borderRadius : 0)};
  padding-bottom: 30;
  border-radius: 8;
`;

const Top = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  padding-top: ${props =>
    !props.lite ? (Platform.OS === 'ios' ? 50 : 20) : 15};
  padding-bottom: 15;
  padding-left: 15;
  border-top-right-radius: ${props => (props.lite ? borderRadius : 0)};
  border-top-left-radius: ${props => (props.lite ? borderRadius : 0)};
`;

const Title = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled(Text)`
  margin-left: -10;
  font-size: ${props => props.theme.fontSizeMedium};
`;

const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 25;
  height: 25;
  width: 25;
  margin-right: 10;
  background: ${props => props.theme.primaryColor};
`;

const Bottom = styled.View`
  padding-bottom: 19;
  padding-top: 10;
  padding-horizontal: 20;
  background-color: ${props => props.theme.backgroundColor};
`;
const Middle = styled.View`
  background-color: ${props => props.theme.backgroundColor};
`;

class MyModal extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.onRequestClose();
    });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    const { disableAutoHide } = this.props;

    // bug fixed, close modal when app goes to backgroind
    if (nextAppState === 'background' && !disableAutoHide) {
      this.props.onRequestClose();
    }
  };

  render() {
    const {
      onRequestClose,
      children,
      isVisible,
      title,
      hasHeader,
      hasFooter,
      lite,
      bottom,
    } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        onBackButtonPress={onRequestClose}
        onBackdropPress={onRequestClose}
        style={!lite ? styles.modal : styles.modalLite}
      >
        {hasHeader && (
          <Top lite={lite}>
            <Title>
              <TitleText semibold>{title}</TitleText>
            </Title>
            <IconContainer onPress={onRequestClose}>
              <AntDesign name="close" size={15} color="#fff" />
            </IconContainer>
          </Top>
        )}
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            backgroundColor: '#fff',
            borderBottomRightRadius: lite ? borderRadius : 0,
            borderBottomLeftRadius: lite ? borderRadius : 0,
          }}
        >
          <Container lite={lite} hasHeader={hasHeader}>
            {children}
          </Container>
        </ScrollView>
        {hasFooter && <Bottom>{bottom}</Bottom>}
      </Modal>
    );
  }
}

MyModal.defaultProps = {
  title: '',
  hasHeader: true,
  onRequestClose: () => {},
};

MyModal.propTypes = {
  title: PropTypes.string,
  hasHeader: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyModal;
