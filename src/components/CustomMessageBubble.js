import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Clipboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  MessageText,
  MessageImage,
  Time,
  utils
} from 'react-native-gifted-chat';
import { colors, device, gStyle } from '../constants';

const { isSameUser, isSameDay } = utils;

// modified but based off this example
// https://github.com/FaridSafi/react-native-gifted-chat/tree/master/example-slack-message

class CustomMessageBubble extends React.Component {
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
      const { actionSheet } = this.context;

      actionSheet().showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex
        },
        (buttonIndex) => {
          switch (buttonIndex) {
            case 0:
            default:
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
      const { ...messageTextProps } = this.props;

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
      const { ...messageImageProps } = this.props;

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

  renderUsername() {
    const { currentMessage, renderUsername } = this.props;

    const username = currentMessage.user.name;

    if (username) {
      const { ...usernameProps } = this.props;

      if (renderUsername) {
        return renderUsername(usernameProps);
      }

      return <Text style={styles.usernameText}>{username}</Text>;
    }

    return null;
  }

  renderTime() {
    const { currentMessage, renderTime } = this.props;

    if (currentMessage.createdAt) {
      const { ...timeProps } = this.props;

      if (renderTime) {
        return renderTime(timeProps);
      }

      return (
        <Time
          {...timeProps}
          containerStyle={{ left: [styles.containerTime] }}
          textStyle={{ left: [styles.timeText, timeProps.textStyle] }}
        />
      );
    }

    return null;
  }

  render() {
    const { currentMessage, previousMessage, touchableProps } = this.props;

    const isSameThread =
      isSameUser(currentMessage, previousMessage) &&
      isSameDay(currentMessage, previousMessage);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          accessibilityTraits="text"
          onLongPress={this.onLongPress}
          {...touchableProps}
        >
          <View style={styles.containerContent}>
            {isSameThread ? null : (
              <View style={styles.containerMsgHeader}>
                {this.renderUsername()}
                {this.renderTime()}
              </View>
            )}
            {this.renderMessageImage()}
            {this.renderMessageText()}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

CustomMessageBubble.contextTypes = {
  actionSheet: PropTypes.func
};

CustomMessageBubble.defaultProps = {
  currentMessage: {
    createdAt: null,
    image: null,
    text: null
  },
  nextMessage: {},
  onLongPress: null,
  previousMessage: {},
  renderMessageImage: null,
  renderMessageText: null,
  renderTime: null,
  renderUsername: null,
  touchableProps: {}
};

CustomMessageBubble.propTypes = {
  currentMessage: PropTypes.object,
  onLongPress: PropTypes.func,
  nextMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  renderMessageImage: PropTypes.func,
  renderMessageText: PropTypes.func,
  renderTime: PropTypes.func,
  renderUsername: PropTypes.func,
  touchableProps: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1
  },
  containerContent: {
    justifyContent: 'flex-end',
    minHeight: 16,
    paddingRight: 16
  },
  containerMsgHeader: {
    alignItems: 'baseline',
    flexDirection: 'row',
    marginTop: device.android ? -2 : 0
  },
  usernameText: {
    ...gStyle.textLarsBold14,
    color: colors.slackBlack,
    marginRight: 8
  },
  containerTime: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  },
  timeText: {
    ...gStyle.textCiruBook12,
    color: colors.greyTime
  },
  slackImage: {
    borderRadius: 3,
    marginLeft: 0,
    marginRight: 0
  },
  slackMessageText: {
    ...gStyle.textCiruBook14,
    marginLeft: 0,
    marginRight: 0
  }
});

export default CustomMessageBubble;
