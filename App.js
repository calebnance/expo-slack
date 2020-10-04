import * as React from 'react';
import { AppLoading } from 'expo';
import { func } from './src/constants';

// main navigation stack
import MainStack from './src/navigation/MainStack';

import DrawerRight from './src/components/DrawerRight';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      drawerRightIsOpened: false
    };

    this.handleRightDrawer = this.handleRightDrawer.bind(this);
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
