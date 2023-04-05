import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// stacks
import ChatStack from './ChatStack';

// components
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="slide"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        hideStatusBar
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen name="ChatStack" component={ChatStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
