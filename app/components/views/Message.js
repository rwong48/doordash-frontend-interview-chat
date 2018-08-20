import Marionette from 'backbone.marionette';
import MessageTemplate from './Message.jst';

export default Marionette.View.extend({
  template: MessageTemplate,
  className: 'message'
});
