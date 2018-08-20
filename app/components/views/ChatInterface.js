import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import ChatInterfaceTemplate from './ChatInterface.jst';
import UserInfoView from './UserInfo';
import RoomsView from './Rooms';
import RoomDescriptionView from './RoomDescription';
import MessagesView from './Messages';
import MessageComposeView from './MessageCompose';

const channel = Radio.channel('chatApp');

export default Marionette.View.extend({
  template: ChatInterfaceTemplate,

  initialize(options) {
    this.userModel = options.user;
    this.roomsCollection = options.rooms;

    this.userInfoView = new UserInfoView({
      model: this.userModel
    });

    this.roomListView = new RoomsView({
      collection: this.roomsCollection
    });

    channel.reply('loadRoom', (roomId) => {
      const room = this.roomsCollection.get(roomId);
      // Reload the messages. Because why not?
      room.getMessages();
      const username = this.userModel.get('name');
      this.showChildView('roomDescription', new RoomDescriptionView({
        model: room,
        username: username
      }));
      this.showChildView('messageList', new MessagesView({
        collection: room.get('messages'),
        username: username
      }));
      // ... If the user is allowed to send messages to this room...
      // (For now, always allow)
      this.showChildView('messageCompose', new MessageComposeView({
        model: room,
        username: username
      }));
    });

    channel.reply('refreshMessages', (roomId) => {
      return this.roomsCollection.get(roomId).getMessages();
    });

    channel.reply('sendMessage', (roomId, username, message) => {
      return this.roomsCollection.get(roomId).sendMessage(username, message);
    });
  },

  regions: {
    userInfo: '#user-info',
    roomList: '#rooms',
    roomDescription: '#room-description',
    messageList: '#messages',
    messageCompose: '#message-compose'
  },

  onRender() {
    this.showChildView('userInfo', this.userInfoView);
    // Re-render every minute to reflect the latest uptime
    setInterval(() => this.userInfoView.render(), 1000 * 60);

    this.showChildView('roomList', this.roomListView);
  }
});
