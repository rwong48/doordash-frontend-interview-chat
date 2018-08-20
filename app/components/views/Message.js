import Marionette from 'backbone.marionette';
import MessageTemplate from './Message.jst';

export default Marionette.View.extend({
  template: MessageTemplate,
  initialize(options) {
    this.messageBelongsToCurrentUser = options.messageBelongsToCurrentUser;
  },
  serializeData() {
    return _.extend({}, this.model.attributes, {
      messageBelongsToCurrentUser: this.messageBelongsToCurrentUser
    });
  }
});
