import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors, device, gStyle } from '../constants';

function CustomDrawerContent() {
  return (
    <Swiper
      activeDotColor={colors.white}
      dotColor={colors.black40}
      loop={false}
      paginationStyle={styles.pagination}
    >
      <View style={styles.slide}>
        <Text style={styles.text}>Workspaces</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Threads</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Direct Messages</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: colors.white10,
    borderRadius: 12,
    bottom: device.iPhoneNotch ? 36 : 24,
    left: device.width / 2 - 74,
    paddingVertical: 2,
    width: 54
  },
  slide: {
    alignItems: 'center',
    backgroundColor: colors.purple,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    ...gStyle.textLarsBold18,
    color: colors.white
  }
});

export default CustomDrawerContent;
