import React from 'react';
import { StatusBar } from 'react-native';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import { colors, device, gStyle } from '../constants';

// get modal routes
import ModalRoutes from './ModalRoutes';

// screens
import Chat from '../screens/ChatScreen';
import Notifications from '../screens/NotificationsScreen';

// components
import CustomDrawerContent from '../components/CustomDrawerContent';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

// create stack navigator
const ChatStack = createStackNavigator(
  {
    Chat,
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

// create drawer navigator
const DrawerNavigator = createDrawerNavigator(
  {
    ChatStack
  },
  {
    contentComponent: CustomDrawerContent,
    drawerType: 'slide',
    drawerWidth: device.width - 32,
    initialRouteName: 'ChatStack',
    overlayColor: colors.black50
  }
);

const defaultGetStateForAction = DrawerNavigator.router.getStateForAction;

DrawerNavigator.router.getStateForAction = (action, state) => {
  if (action.type === 'Navigation/MARK_DRAWER_SETTLING') {
    if (action.willShow === false) {
      StatusBar.setBarStyle('dark-content');
    } else if (action.willShow === true) {
      StatusBar.setBarStyle('light-content');
    }
  }

  return defaultGetStateForAction(action, state);
};

const App = createAppContainer(DrawerNavigator);

export default App;
