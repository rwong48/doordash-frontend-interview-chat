import Marionette from 'backbone.marionette';
import MessageView from './Message';

export default Marionette.CollectionView.extend({
  childView: MessageView
});
