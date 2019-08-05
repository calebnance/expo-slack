import React from 'react';
import PropTypes from 'prop-types';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import { colors, device } from '../constants';

// components
import Touch from './Touch';

class DrawerRight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background: new Animated.Value(0),
      position: new Animated.Value(device.width),
      show: props.show
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleDrawerState = this.handleDrawerState.bind(this);
  }

  componentDidMount() {
    this.handleDrawerState();
  }

  componentDidUpdate(prevProps, prevState) {
    const { show } = this.props;

    if (prevState.show !== show) {
      this.toggleDrawer(show);
    }
  }

  toggleDrawer(show) {
    this.setState({ show }, this.handleDrawerState);
  }

  handleDrawerState() {
    const { background, position, show } = this.state;

    Animated.timing(background, {
      duration: show ? 300 : 100,
      toValue: show ? 60 : 0
    }).start();

    Animated.timing(position, {
      duration: 300,
      toValue: show ? 0 : device.width
    }).start();
  }

  render() {
    const { handleRightDrawer } = this.props;
    const { background, position } = this.state;

    const backgroundColor = background.interpolate({
      inputRange: [0, 60],
      outputRange: [colors.white0, colors.black30]
    });

    return (
      <Animated.View style={[styles.container, { left: position }]}>
        <View style={styles.containerFlex}>
          <Animated.View style={[styles.containerClose, { backgroundColor }]}>
            <Touch
              onPress={() => handleRightDrawer(false)}
              style={styles.touchArea}
            />
          </Animated.View>

          <ScrollView style={styles.scrollView}>
            <View />
          </ScrollView>
        </View>
      </Animated.View>
    );
  }
}

DrawerRight.defaultProps = {
  show: false
};

DrawerRight.propTypes = {
  // required
  handleRightDrawer: PropTypes.func.isRequired,

  // optional
  show: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  containerFlex: {
    flex: 1,
    flexDirection: 'row'
  },
  containerClose: {
    height: '100%',
    width: '20%'
  },
  touchArea: {
    height: '100%',
    width: '100%'
  },
  scrollView: {
    backgroundColor: colors.white,
    paddingTop: device.iPhoneX ? 44 : 0,
    width: '80%'
  }
});

export default DrawerRight;
