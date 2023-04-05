import * as React from 'react';
import { View } from 'react-native';
import { gStyle } from '../constants';

// components
import CustomSendButton from './CustomSendButton';

// icons
import SvgAt from '../icons/Svg.At';
import SvgImage from '../icons/Svg.Image';
import SvgPaperClip from '../icons/Svg.PaperClip';

function CustomAccessoryBar(props) {
  return (
    <View style={[gStyle.flexRowCenter, gStyle.pH8]}>
      <View style={[gStyle.flexRow, gStyle.flex4]}>
        <View style={gStyle.mR16}>
          <SvgAt />
        </View>
        <SvgPaperClip />
      </View>
      <View style={gStyle.flexRowCenterAlign}>
        <View style={gStyle.mR16}>
          <SvgImage />
        </View>
        <CustomSendButton {...props} />
      </View>
    </View>
  );
}

export default CustomAccessoryBar;
