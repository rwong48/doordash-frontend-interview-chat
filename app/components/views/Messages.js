import Marionette from 'backbone.marionette';
import MessageView from './Message';

export default Marionette.CollectionView.extend({
  childView: MessageView,

  initialize(options) {
    this.username = options.username;
  },

  childViewOptions(model) {
    console.log(model, model.get('name'), this.username);
    return {
      messageBelongsToCurrentUser: model.get('name') === this.username
    };
  }
});
