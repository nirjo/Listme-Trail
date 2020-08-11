import React from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import Image from 'react-native-scalable-image';
import { isObject } from 'lodash';

const MyImage = ({ keepRatio, source, width, height, ...props }) => {
  if (!isObject(source)) {
    return <Image source={source} width={width} height={height} {...props} />;
  }

  return (
    <FastImage
      {...props}
      source={{
        priority: FastImage.priority.normal,
        ...source,
      }}
      resizeMode={
        keepRatio ? FastImage.resizeMode.contain : FastImage.resizeMode.cover
      }
      style={{ width, height }}
    />
  );
};

MyImage.defaultProps = {
  keepRatio: false,
};

MyImage.propTypes = {
  keepRatio: PropTypes.bool,
};

export default MyImage;
