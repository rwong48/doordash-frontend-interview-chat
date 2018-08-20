import Backbone from 'backbone';
import Room from '../models/Room';

export default Backbone.Collection.extend({
  model: Room,
  url: 'http://localhost:8080/api/rooms'
});
