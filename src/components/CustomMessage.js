import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { Avatar, Day, utils } from 'react-native-gifted-chat';
import { colors, gStyle } from '../constants';

// components
import CustomMessageBubble from './CustomMessageBubble';

const { isSameUser, isSameDay } = utils;

class CustomMessage extends React.Component {
  getInnerComponentProps() {
    const { containerStyle, ...props } = this.props;

    return {
      ...props,
      position: 'left',
      isSameUser,
      isSameDay
    };
  }

  renderDay() {
    const { currentMessage, renderDay } = this.props;

    if (currentMessage.createdAt) {
      const dayProps = this.getInnerComponentProps();

      if (renderDay) {
        return renderDay(dayProps);
      }

      return (
        <Day
          {...dayProps}
          containerStyle={styles.containerDay}
          textStyle={styles.dayText}
        />
      );
    }

    return null;
  }

  renderBubble() {
    const { renderBubble } = this.props;

    const bubbleProps = this.getInnerComponentProps();

    if (renderBubble) {
      return renderBubble(bubbleProps);
    }

    return <CustomMessageBubble {...bubbleProps} />;
  }

  renderAvatar() {
    const { currentMessage, previousMessage } = this.props;
    let extraStyle;

    if (
      isSameUser(currentMessage, previousMessage) &&
      isSameDay(currentMessage, previousMessage)
    ) {
      // set the invisible avatar height to 0, but keep the width, padding, etc.
      extraStyle = { height: 0 };
    }

    const avatarProps = this.getInnerComponentProps();

    return (
      <Avatar
        {...avatarProps}
        imageStyle={{
          left: [styles.slackAvatar, avatarProps.imageStyle, extraStyle]
        }}
      />
    );
  }

  render() {
    const { containerStyle, currentMessage, nextMessage } = this.props;

    const marginBottom = isSameUser(currentMessage, nextMessage) ? 2 : 10;

    return (
      <View>
        {this.renderDay()}

        <View style={[styles.container, { marginBottom }, containerStyle]}>
          {this.renderAvatar()}
          {this.renderBubble()}
        </View>
      </View>
    );
  }
}

CustomMessage.defaultProps = {
  currentMessage: {},
  containerStyle: {},
  nextMessage: {},
  previousMessage: {},
  renderAvatar: undefined,
  renderBubble: null,
  renderDay: null,
  user: {}
};

CustomMessage.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style
  }),
  nextMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  renderAvatar: PropTypes.func,
  renderBubble: PropTypes.func,
  renderDay: PropTypes.func,
  user: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 8
  },
  containerDay: {
    alignItems: 'flex-start',
    borderBottomColor: colors.greyLine,
    borderBottomWidth: 1,
    marginHorizontal: 8
  },
  dayText: {
    ...gStyle.textLarsBold16,
    color: colors.slackBlack,
    paddingBottom: 2,
    textAlign: 'left'
  },
  slackAvatar: {
    // the bottom should roughly line up with the first line of message text.
    borderRadius: 3,
    height: 40,
    width: 40
  }
});

export default CustomMessage;
