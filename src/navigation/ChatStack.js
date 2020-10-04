import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { gStyle } from '../constants';

// get modal routes
import ModalRoutes from './ModalRoutes';

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
        headerRight: <HeaderRight screenProps={screenProps} />
      })
    },
    Notifications
  },
  {
    initialRouteName: 'Chat',
    defaultNavigationOptions: {
      headerLeft: <HeaderLeft />,
      headerRight: <HeaderRight />,
      headerTitleStyle: gStyle.textLarsBold16
    },
    transitionConfig: ModalRoutes
  }
);

export default ChatStack;
