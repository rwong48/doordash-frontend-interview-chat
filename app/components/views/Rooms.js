import Marionette from 'backbone.marionette';
import RoomView from './Room';

export default Marionette.CollectionView.extend({
  childView: RoomView
});
