import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';

// grab screens
import ChatScreen from '../screens/ChatScreen';

// create stack navigator
const ChatStack = createStackNavigator({
  ChatScreen
});

// create drawer navigator
const DrawerNavigator = createDrawerNavigator(
  {
    ChatStack
  },
  {
    drawerType: 'slide',
    initialRouteName: 'ChatStack'
  }
);

const App = createAppContainer(DrawerNavigator);

export default App;
