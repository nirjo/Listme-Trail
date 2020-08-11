import * as React from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import Text from './Text';

import img from '../../assets/images/profile.jpg';

const Container = styled.View`
  flex: 0.75;
  align-items: center;
  justify-content: center;
`;

export default class ImgPicker extends React.Component {
  state = {
    image: null,
  };

  render() {
    const { image } = this.state;

    return (
      <Container>
        {!image && (
          <>
            <TouchableOpacity onPress={this._pickImage}>
              <Image source={img} style={{ width: 200, height: 200 }} />
            </TouchableOpacity>
          </>
        )}
        {image && (
          <>
            <TouchableOpacity onPress={this._pickImage}>
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            </TouchableOpacity>
          </>
        )}
      </Container>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}
