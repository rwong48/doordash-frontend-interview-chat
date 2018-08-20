import Backbone from 'backbone';
import Message from '../models/Message';

export default Backbone.Collection.extend({
  model: Message
});
