import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { gStyle } from '../constants';

// icons
import SvgBell from './icons/Svg.Bell';
import SvgDotsVertical from './icons/Svg.DotsVertical';
import SvgSearch from './icons/Svg.Search';

const HeaderRight = ({ navigation, screenProps }) => (
  <View style={[gStyle.containerNavBlocks, gStyle.flexRowCenter]}>
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      hitSlop={{ top: 10, left: 16, bottom: 10, right: 8 }}
      onPress={() => navigation.navigate('Notifications')}
      style={gStyle.mR16}
    >
      <SvgBell />
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      hitSlop={{ top: 10, left: 8, bottom: 10, right: 8 }}
      onPress={() => null}
      style={gStyle.mR16}
    >
      <SvgSearch />
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      hitSlop={{ top: 10, left: 8, bottom: 10, right: 16 }}
      onPress={() => screenProps.handleRightDrawer(true)}
      style={gStyle.mR16}
    >
      <SvgDotsVertical />
    </TouchableOpacity>
  </View>
);

HeaderRight.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default withNavigation(HeaderRight);
