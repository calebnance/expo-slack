import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { images } from '../constants';

// components
import CustomMessage from '../components/CustomMessage';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
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
