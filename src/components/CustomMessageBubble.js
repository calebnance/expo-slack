import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Clipboard,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Platform
} from 'react-native';
import {
  MessageText,
  MessageImage,
  Time,
  utils
} from 'react-native-gifted-chat';

const { isSameUser, isSameDay } = utils;

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.onLongPress = this.onLongPress.bind(this);
  }

  onLongPress() {
    const { currentMessage, onLongPress } = this.props;

    if (onLongPress) {
      onLongPress(this.context, currentMessage);
    } else if (currentMessage.text) {
      const options = ['Copy Text', 'Cancel'];
      const cancelButtonIndex = options.length - 1;

      this.context.actionSheet().showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex
        },
        buttonIndex => {
          switch (buttonIndex) {
            default:
            case 0:
              Clipboard.setString(currentMessage.text);
              break;
          }
        }
      );
    }
  }

  renderMessageText() {
    const { currentMessage, renderMessageText } = this.props;

    if (currentMessage.text) {
      const {
        containerStyle,
        wrapperStyle,
        messageTextStyle,
        ...messageTextProps
      } = this.props;

      if (renderMessageText) {
        return renderMessageText(messageTextProps);
      }

      return (
        <MessageText
          {...messageTextProps}
          textStyle={{
            left: styles.slackMessageText
          }}
        />
      );
    }

    return null;
  }

  renderMessageImage() {
    const { currentMessage, renderMessageImage } = this.props;

    if (currentMessage.image) {
      const { containerStyle, wrapperStyle, ...messageImageProps } = this.props;

      if (renderMessageImage) {
        return renderMessageImage(messageImageProps);
      }
      return (
        <MessageImage
          {...messageImageProps}
          imageStyle={[styles.slackImage, messageImageProps.imageStyle]}
        />
      );
    }
    return null;
  }

  renderTicks() {
    const { currentMessage, renderTicks, tickStyle } = this.props;

    if (renderTicks) {
      return renderTicks(currentMessage);
    }

    if (currentMessage.user._id !== this.props.user._id) {
      return null;
    }

    if (currentMessage.sent || currentMessage.received) {
      return (
        <View style={[styles.headerItem, styles.tickView]}>
          {currentMessage.sent && (
            <Text style={[styles.standardFont, styles.tick, tickStyle]}>✓</Text>
          )}
          {currentMessage.received && (
            <Text style={[styles.standardFont, styles.tick, tickStyle]}>✓</Text>
          )}
        </View>
      );
    }

    return null;
  }

  renderUsername() {
    const { currentMessage, renderUsername, usernameStyle } = this.props;

    const username = currentMessage.user.name;

    if (username) {
      const { containerStyle, wrapperStyle, ...usernameProps } = this.props;

      if (renderUsername) {
        return renderUsername(usernameProps);
      }

      return (
        <Text
          style={[
            styles.standardFont,
            styles.headerItem,
            styles.username,
            usernameStyle
          ]}
        >
          {username}
        </Text>
      );
    }

    return null;
  }

  renderTime() {
    const { currentMessage, renderTime } = this.props;

    if (currentMessage.createdAt) {
      const { containerStyle, wrapperStyle, ...timeProps } = this.props;

      if (renderTime) {
        return renderTime(timeProps);
      }

      return (
        <Time
          {...timeProps}
          containerStyle={{ left: [styles.timeContainer] }}
          textStyle={{
            left: [
              styles.standardFont,
              styles.headerItem,
              styles.time,
              timeProps.textStyle
            ]
          }}
        />
      );
    }

    return null;
  }

  renderCustomView() {
    const { renderCustomView } = this.props;

    if (renderCustomView) {
      return renderCustomView(this.props);
    }

    return null;
  }

  render() {
    const {
      containerStyle,
      currentMessage,
      previousMessage,
      touchableProps,
      wrapperStyle
    } = this.props;

    const isSameThread =
      isSameUser(currentMessage, previousMessage) &&
      isSameDay(currentMessage, previousMessage);

    const messageHeader = isSameThread ? null : (
      <View style={styles.headerView}>
        {this.renderUsername()}
        {this.renderTime()}
        {this.renderTicks()}
      </View>
    );

    return (
      <View style={[styles.container, containerStyle]}>
        <TouchableOpacity
          onLongPress={this.onLongPress}
          accessibilityTraits="text"
          {...touchableProps}
        >
          <View style={[styles.wrapper, wrapperStyle]}>
            <View>
              {this.renderCustomView()}
              {messageHeader}
              {this.renderMessageImage()}
              {this.renderMessageText()}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// note: everything is forced to be "left" positioned with this component.
// the "right" position is only used in the default bubble.
const styles = StyleSheet.create({
  standardFont: {
    fontSize: 15
  },
  slackMessageText: {
    marginLeft: 0,
    marginRight: 0
  },
  container: {
    flex: 1,
    alignItems: 'flex-start'
  },
  wrapper: {
    marginRight: 60,
    minHeight: 20,
    justifyContent: 'flex-end'
  },
  username: {
    fontWeight: 'bold'
  },
  time: {
    textAlign: 'left',
    fontSize: 12
  },
  timeContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  headerItem: {
    marginRight: 10
  },
  headerView: {
    // try to align it better with the avatar on android.
    marginTop: Platform.OS === 'android' ? -2 : 0,
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  tick: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  tickView: {
    flexDirection: 'row'
  },
  slackImage: {
    borderRadius: 3,
    marginLeft: 0,
    marginRight: 0
  }
});

Bubble.contextTypes = {
  actionSheet: PropTypes.func
};

Bubble.defaultProps = {
  currentMessage: {
    createdAt: null,
    image: null,
    text: null
  },
  containerStyle: {},
  containerToNextStyle: {},
  containerToPreviousStyle: {},
  messageTextStyle: {},
  nextMessage: {},
  onLongPress: null,
  previousMessage: {},
  renderMessageImage: null,
  renderMessageText: null,
  renderCustomView: null,
  renderTime: null,
  tickStyle: {},
  touchableProps: {},
  wrapperStyle: {}
};

Bubble.propTypes = {
  containerStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style
  }),
  containerToNextStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style
  }),
  containerToPreviousStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style
  }),
  currentMessage: PropTypes.object,
  onLongPress: PropTypes.func,
  messageTextStyle: Text.propTypes.style,
  nextMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  renderCustomView: PropTypes.func,
  renderMessageImage: PropTypes.func,
  renderMessageText: PropTypes.func,
  renderTicks: PropTypes.func,
  renderTime: PropTypes.func,
  renderUsername: PropTypes.func,
  tickStyle: Text.propTypes.style,
  touchableProps: PropTypes.object,
  user: PropTypes.object,
  usernameStyle: Text.propTypes.style,
  wrapperStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style
  })
};

export default Bubble;
