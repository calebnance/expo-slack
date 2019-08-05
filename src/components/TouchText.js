import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

const TouchText = ({ onPress, style, text, textStyle }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={style}
  >
    <Text style={[gStyle.textCiruBook14, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

TouchText.defaultProps = {
  style: {},
  textStyle: {}
};

TouchText.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

export default TouchText;
