import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors, device, gStyle } from '../constants';

class CustomDrawerContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      shouldHide: true
    };
  }

  componentDidUpdate() {
    const { navigation } = this.props;
    const { state: navState } = navigation;
    const { index } = this.state;

    if (index === 0 && navState.isDrawerOpen) {
      this.setState({
        index: 1,
        shouldHide: false
      });
    }
  }

  render() {
    const { index, shouldHide } = this.state;

    if (shouldHide) {
      return <View style={styles.slide} />;
    }

    return (
      <Swiper
        activeDotColor={colors.white}
        dotColor={colors.black40}
        index={index}
        loop={false}
        paginationStyle={styles.pagination}
      >
        <View style={styles.slide}>
          <Text style={styles.text}>Workspaces</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Threads</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Direct Messages</Text>
        </View>
      </Swiper>
    );
  }
}

CustomDrawerContent.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: colors.white10,
    borderRadius: 12,
    left: device.width / 2 - 26,
    paddingVertical: 2,
    bottom: device.iPhoneX ? 36 : 24,
    width: 54
  },
  slide: {
    alignItems: 'center',
    backgroundColor: colors.purple,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    ...gStyle.textLarsBold18,
    color: colors.white
  }
});

export default CustomDrawerContent;
