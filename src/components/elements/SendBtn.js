/* eslint-disable linebreak-style */
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const SendcodeBox = styled(View)`
  position: absolute;
  left: 71.47%;
  right: 5.87%;
  top: 18.35%;
  bottom: 77.96%;

  background: #b7007b;
  border-radius: 3px;
`;
const ButtonTxt = styled(Text)`
  position: absolute;
  left: 10.93%;
  right: 10.33%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const SendButton = ({ navigation }) => (
  <SendcodeBox >
    <ButtonTxt>SendCode</ButtonTxt>
  </SendcodeBox>
);
export default SendButton;
