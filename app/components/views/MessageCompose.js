import Marionette from 'backbone.marionette';
import MessageComposeTemplate from './MessageCompose.jst';
import Radio from 'backbone.radio';

const channel = Radio.channel('chatApp');

export default Marionette.View.extend({
  template: MessageComposeTemplate,

  initialize(options) {
    this.username = options.username;
  },

  events: {
    'submit form': 'onFormSubmit'
  },

  ui: {
    messageInput: '.message-input',
    messageSendButton: '.message-send-button'
  },

  onFormSubmit(e) {
    e.preventDefault();
    const input = this.ui.messageInput;
    const message = input.val();
    channel.request('sendMessage', this.model.id, this.username, message);
    input.val('');
  }
});
