import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import User from './models/User';
import LoginView from './views/Login';
import ChatInterfaceView from './views/ChatInterface';
import Rooms from './collections/Rooms';

const channel = Radio.channel('chatApp');

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new LoginView());

    // Because the rooms are static, we can start fetching the rooms immediately.
    // In a real-world chat app, we'd fetch the rooms available to a specific user.
    const roomsCollection = new Rooms();
    // TODO: remove me
    window.roomsCollection = roomsCollection;
    const roomsJqXhr = roomsCollection.fetch();

    channel.reply('login', (username) => {
      const userModel = new User({
        name: username,
        created: new Date().getTime()
      });

      // TODO: remove me
      window.userModel = userModel;

      roomsJqXhr
      .fail((jqXhr, textStatus, errorThrown) => {
        // TODO: Do something
      })
      .done((data, textStatus, jqXhr) => {
        this.showView(new ChatInterfaceView({
          user: userModel,
          rooms: roomsCollection
        }));
      });
    });
  }
});
