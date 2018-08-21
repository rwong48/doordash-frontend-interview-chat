import Marionette from 'backbone.marionette';
import MessageTemplate from './Message.jst';

export default Marionette.View.extend({
  template: MessageTemplate,
  className: 'message',

  initialize(options) {
    this.messageBelongsToCurrentUser = options.messageBelongsToCurrentUser;
    /* TODO: is there a way to dynamically do this? */
    // if (this.messageBelongsToCurrentUser) {
    //   this.className += ' current-user';
    //   this.render();
    // }
  },
  serializeData() {
    return _.extend({}, this.model.attributes, {
      messageBelongsToCurrentUser: this.messageBelongsToCurrentUser
    });
  }
});
