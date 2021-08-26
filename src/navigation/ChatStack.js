import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { gStyle } from '../constants';

// screens
import Chat from '../screens/ChatScreen';
import Notifications from '../screens/NotificationsScreen';

// components
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import TouchText from '../components/TouchText';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={({ navigation }) => ({
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight navigation={navigation} />,
        headerTitleStyle: gStyle.textLarsBold16
      })}
    />
    <Stack.Screen
      name="Notifications"
      component={Notifications}
      options={({ navigation }) => ({
        headerLeft: () => (
          <TouchText
            onPress={() => navigation.goBack(null)}
            style={gStyle.mL16}
            text="Cancel"
          />
        ),
        headerRight: () => (
          <TouchText
            onPress={() => navigation.goBack(null)}
            style={gStyle.mR16}
            text="Save"
            textStyle={gStyle.textCiruBook14}
          />
        ),
        headerTitleStyle: gStyle.textLarsBold16,
        title: 'Do Not Disturb'
      })}
    />
  </Stack.Navigator>
);
