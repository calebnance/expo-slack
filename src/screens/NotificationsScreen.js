import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

function NotificationsScreen() {
  return (
    <View style={[gStyle.flexCenter, gStyle.flex1]}>
      <Text style={gStyle.textLarsBold16}>Notifications</Text>
    </View>
  );
}

export default NotificationsScreen;
