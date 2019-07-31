import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors, device } from '../constants';

class CustomDrawerContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    // weird paint of swiper doesn't work when index is 1
    this.setState({
      index: 1
    });
  }

  render() {
    const { index } = this.state;

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
    backgroundColor: '#3F0E40',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default CustomDrawerContent;
