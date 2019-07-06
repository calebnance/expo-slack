import React from 'react';
import { View, ViewPropTypes, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar, Day, utils } from 'react-native-gifted-chat';
import CustomMessageBubble from './CustomMessageBubble';

const { isSameUser, isSameDay } = utils;

class Message extends React.Component {
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
      return <Day {...dayProps} />;
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginRight: 0
  },
  slackAvatar: {
    // the bottom should roughly line up with the first line of message text.
    borderRadius: 3,
    height: 40,
    width: 40
  }
});

Message.defaultProps = {
  currentMessage: {},
  containerStyle: {},
  nextMessage: {},
  previousMessage: {},
  renderAvatar: undefined,
  renderBubble: null,
  renderDay: null,
  user: {}
};

Message.propTypes = {
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

export default Message;
