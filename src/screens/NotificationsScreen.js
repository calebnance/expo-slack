import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <Text>Cancel</Text>,
    headerRight: <Text>Save</Text>,
    title: 'Do Not Disturb'
  };

  render() {
    return (
      <View style={[gStyle.flexCenter, gStyle.flex1]}>
        <Text style={gStyle.textLarsBold16}>Notifications</Text>
      </View>
    );
  }
}

export default NotificationsScreen;
