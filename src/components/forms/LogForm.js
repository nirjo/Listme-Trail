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
import SendBtn from '../elements/SendBtn';
import LoginButton from '../elements/LoginButton';

const Container = styled.View`
  width: 375px;
  height: 812px;
  background: #ffffff;
`;
/* UI Text/Heading/H4/G */

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
  border-bottom-color: #8d0000;

  color: #8d92a3;
`;
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

const Rectangle5 = styled.View`
  position: absolute;
  left: 6.4%;
  right: 6.4%;
  top: 23.77%;
  bottom: 76.11%;

  background: #b7007b;
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
export default class Log extends React.Component {
  selectColor = '#B7007B';

  deselctColor = '#f1f3f8';

  constructor(props) {
    super(props);

    this.state = {
      rectangle4Color: '#B7007B',
      rectangle5Color: '#f1f3f8',
    };

    // this.phoneNumberInfocus = this.phoneNumberInfocus.bind(this);
  }

  async componentDidMount() {}

  verifyInfocus = event => {
    // console.log()

    this.setState({
      rectangle4Color: '#B7007B',
    });
    this.setState({
      rectangle5Color: '#f1f3f8',
    });
  };

  phoneNumberInfocus = event => {
    this.setState({
      rectangle4Color: '#f1f3f8',
    });
    this.setState({
      rectangle5Color: '#B7007B',
    });
  };

  render() {
    return (
      <Container>
        <Phnumber
          placeholder="PhoneNumber"
          // ref={this.PhoneNumber}

          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          onFocus={this.phoneNumberInfocus}
        />
        <SendBtn />
        <Rectangle5 style={[{ backgroundColor: this.state.rectangle5Color }]} />
        <Verify
          placeholder="VerificationCode"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          onFocus={this.verifyInfocus}
        />
        <Rectangle4 style={[{ backgroundColor: this.state.rectangle4Color }]} />
      </Container>
    );
  }
}
// export default Log;
