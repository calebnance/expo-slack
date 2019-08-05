import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

const Touch = ({ onPress, style }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={style}
  />
);

Touch.defaultProps = {
  onPress: () => null,
  style: {}
};

Touch.propTypes = {
  // optional
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
};

export default Touch;
