import Marionette from 'backbone.marionette';
import RoomLinkView from './RoomLink';

export default Marionette.CollectionView.extend({
  childView: RoomLinkView
});
