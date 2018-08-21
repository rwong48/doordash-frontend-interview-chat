import Marionette from 'backbone.marionette';
import MessageView from './Message';

export default Marionette.CollectionView.extend({
  childView: MessageView,

  initialize(options) {
    this.username = options.username;
  },

  childViewOptions(model) {
    return {
      messageBelongsToCurrentUser: model.get('name') === this.username
    };
  },

  onRenderChildren() {
    // TODO: Scroll all the way to the bottom.
    // Doesn't get all the way to the bottom of the children,
    // but the bottom of the last child's content (not even its margin)
    this.$el.children().last()[0].scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }
});
