import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors, device } from '../constants';

const CustomDrawerContent = () => (
  <Swiper
    activeDotColor={colors.white}
    dotColor={colors.black40}
    index={0}
    loop={false}
    paginationStyle={{
      backgroundColor: colors.white10,
      borderRadius: 12,
      left: device.width / 2 - 26,
      paddingVertical: 2,
      bottom: device.iPhoneX ? 36 : 24,
      width: 54
    }}
  >
    <View style={styles.slide1}>
      <Text style={styles.text}>Workspaces</Text>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.text}>Threads</Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.text}>Direct Messages</Text>
    </View>
  </Swiper>
);

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F0E40'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F0E40'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F0E40'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default CustomDrawerContent;
