import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { gStyle } from '../constants';

// icons
import SvgSlackLogo from './icons/Svg.SlackLogo';

const HeaderLeft = ({ navigation }) => (
  <View style={gStyle.containerNavBlocks}>
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      onPress={() => {
        Keyboard.dismiss();
        navigation.openDrawer();
      }}
    >
      <SvgSlackLogo />
    </TouchableOpacity>
  </View>
);

HeaderLeft.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default withNavigation(HeaderLeft);
