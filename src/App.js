import * as React from 'react';
import { AppLoading, registerRootComponent } from 'expo';
import { func } from './constants';

// main navigation stack
import MainStack from './navigation/MainStack';

// components
import DrawerRight from './components/DrawerRight';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      drawerRightIsOpened: false
    };

    this.handleRightDrawer = this.handleRightDrawer.bind(this);

    console.disableYellowBox = true;
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
      </React.Fragment>
    );
  }
}

registerRootComponent(App);
