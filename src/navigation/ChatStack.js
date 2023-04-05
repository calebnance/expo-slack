import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gStyle } from '../constants';

// screens
import Chat from '../screens/ChatScreen';
import Notifications from '../screens/NotificationsScreen';

// components
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import TouchText from '../components/TouchText';

const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
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
            <TouchText onPress={() => navigation.goBack(null)} text="Cancel" />
          ),
          headerRight: () => (
            <TouchText
              onPress={() => navigation.goBack(null)}
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
}

export default ChatStack;
