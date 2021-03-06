import * as React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import { func } from './constants';

// main navigation stack
import MainStack from './navigation/MainStack';

// components
import DrawerRight from './components/DrawerRight';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      drawerRightIsOpened: false
    };

    this.handleRightDrawer = this.handleRightDrawer.bind(this);

    LogBox.ignoreAllLogs(true);
  }

  handleRightDrawer(show) {
    this.setState({
      drawerRightIsOpened: show
    });
  }

  render() {
    const { isLoading, drawerRightIsOpened } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onError={() => {
            // console.warn
          }}
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <MainStack
          screenProps={{
            drawerIsOpened: false,
            handleRightDrawer: this.handleRightDrawer
          }}
        />

        <DrawerRight
          handleRightDrawer={this.handleRightDrawer}
          show={drawerRightIsOpened}
        />

        <StatusBar barStyle="dark-content" />
      </React.Fragment>
    );
  }
}

registerRootComponent(App);
