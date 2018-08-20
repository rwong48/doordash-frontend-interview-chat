import Backbone from 'backbone';
import Message from '../models/Message';

export default Backbone.Collection.extend({
  model: Message
  // `url` is defined with roomId when the Room instantiates the Messages collection.
});
