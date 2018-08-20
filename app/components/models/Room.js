import Backbone from 'backbone';
import Messages from '../collections/Messages'

export default Backbone.Model.extend({
  urlRoot: 'http://localhost:8080/api/rooms',

  initialize() {
    const RoomMessages = Messages.extend({
      url: 'http://localhost:8080/api/rooms/' + this.id + '/messages'
    });
    const messages = new RoomMessages();
    this.set('messages', messages);

    const messagesJqXhr = messages.fetch();

    messagesJqXhr
    .fail((jqXhr, textStatus, errorThrown) => {
      // TODO: Do something useful
      if (confirm('Sorry, there was an error loading messages. Please reload the page and try again.')) {
        window.location.reload();
      }
    })
    .done((data, textStatus, jqXhr) => {
      // Don't actually need to do anything
    });

    // Get the users in this room
    this.fetch();
  },

  getMessages() {
    // Does the local collection keep an ordering?
    return this.get('messages').fetch();
  },

  sendMessage(name, message) {
    // Adds a message to the local collection and submits a network request
    // to create the message. Does the local collection keep an ordering?
    return this.get('messages').create({
      name: name,
      message: message
    });
  }
});
