import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import { colors, device } from '../constants';

// components
import CustomDrawerContent from '../components/CustomDrawerContent';
import HeaderLeft from '../components/HeaderLeft';

// grab screens
import ChatScreen from '../screens/ChatScreen';

// create stack navigator
const ChatStack = createStackNavigator(
  {
    ChatScreen
  },
  {
    defaultNavigationOptions: {
      headerLeft: <HeaderLeft />
    }
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

const App = createAppContainer(DrawerNavigator);

export default App;
