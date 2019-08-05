import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { images } from '../constants';

// components
import CustomAccessoryBar from '../components/CustomAccessoryBar';
import CustomMessage from '../components/CustomMessage';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstMessage: true,
      messages: []
    };

    this.onSend = this.onSend.bind(this);
    this.autoRespond = this.autoRespond.bind(this);
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer!',
          createdAt: new Date(),

          user: {
            _id: 1,
            avatar: images.profile,
            name: 'Caleb Nance'
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
      formattedMessage[0].user.avatar = images.user2;
      formattedMessage[0].user.name = 'Developer';
      formattedMessage[0].user._id = 3;
      this.setState({
        firstMessage: false
      });

      // auto-respond
      this.autoRespond();
    }

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, formattedMessage)
    }));
  }

  autoRespond() {
    const responseMsg = [
      {
        _id: 4,
        text:
          'Thanks checking this app clone out!\rSee more app clones on my github:\rhttps://github.com/calebnance/',
        createdAt: new Date(),

        user: {
          avatar: images.profile,
          name: 'Caleb Nance'
        }
      }
    ];

    setTimeout(() => {
      this.onSend(responseMsg);
    }, 2000);
  }

  render() {
    const { messages } = this.state;

    return (
      <GiftedChat
        alwaysShowSend
        messages={messages}
        onSend={msgs => this.onSend(msgs)}
        renderAccessory={props => <CustomAccessoryBar {...props} />}
        renderMessage={props => <CustomMessage {...props} />}
        renderSend={() => null}
        user={{ _id: 1 }}
      />
    );
  }
}

export default ChatScreen;
