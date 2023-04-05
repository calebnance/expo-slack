import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gStyle } from '../constants';

// icons
import SvgBell from '../icons/Svg.Bell';
import SvgDotsVertical from '../icons/Svg.DotsVertical';
import SvgSearch from '../icons/Svg.Search';

function HeaderRight() {
  const navigation = useNavigation();

  return (
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
        onPress={() => null}
      >
        <SvgDotsVertical />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderRight;
