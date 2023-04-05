import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { gStyle } from '../constants';

// icons
import SvgSlackLogo from '../icons/Svg.SlackLogo';

function HeaderLeft() {
  const navigation = useNavigation();

  return (
    <View style={gStyle.containerNavBlocks}>
      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <SvgSlackLogo />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderLeft;
