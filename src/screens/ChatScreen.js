import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { images } from '../constants';

// components
import CustomMessage from '../components/CustomMessage';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstMessage: true,
      messages: []
    };

    this.onSend = this.onSend.bind(this);
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer!',
          createdAt: new Date(),

          user: {
            _id: 2,
            name: 'Caleb Nance',
            avatar: images.profile
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    const { firstMessage } = this.state;

    // add user image
    const formattedMessage = messages;

    // if first message, add avatar image
    if (firstMessage) {
      formattedMessage[0].user.avatar = images.user1;
      formattedMessage[0].user._id = 3;
      this.setState({
        firstMessage: false
      });
    }

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, formattedMessage)
    }));
  }

  render() {
    const { messages } = this.state;

    return (
      <GiftedChat
        messages={messages}
        onSend={msgs => this.onSend(msgs)}
        user={{ _id: 1 }}
        renderMessage={props => {
          return <CustomMessage {...props} />;
        }}
      />
    );
  }
}

export default ChatScreen;
