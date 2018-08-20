import Marionette from 'backbone.marionette';
import RoomLinkTemplate from './RoomLink.jst';
import Radio from 'backbone.radio';

const channel = Radio.channel('chatApp');

export default Marionette.View.extend({
  template: RoomLinkTemplate,

  events: {
    'click .room': 'loadRoom'
  },

  loadRoom(e) {
    e.preventDefault();
    channel.request('loadRoom', this.model.id);
  }
});
