import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { gStyle } from '../constants';

// screens
import Chat from '../screens/ChatScreen';
import Notifications from '../screens/NotificationsScreen';

// components
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

// create stack navigator
const ChatStack = createStackNavigator(
  {
    Chat: {
      screen: Chat,
      navigationOptions: ({ screenProps }) => ({
        headerRight: () => <HeaderRight screenProps={screenProps} />
      })
    },

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    Notifications
  },
  {
    initialRouteName: 'Chat',
    defaultNavigationOptions: {
      headerLeft: () => <HeaderLeft />,
      headerRight: () => <HeaderRight />,
      headerTitleStyle: gStyle.textLarsBold16
    },
    mode: 'modal'
  }
);

export default ChatStack;
