import Marionette from 'backbone.marionette';
import RoomLinkTemplate from './RoomLink.jst';
import Radio from 'backbone.radio';
import $ from 'jquery';

const channel = Radio.channel('chatApp');

export default Marionette.View.extend({
  template: RoomLinkTemplate,

  events: {
    'click @ui.roomLink': 'loadRoom'
  },

  ui: {
    roomLink: '.room-link'
  },

  loadRoom(e) {
    e.preventDefault();
    this.ui.roomLink.closest('#rooms').find('.room-link').removeClass('active');
    this.ui.roomLink.addClass('active');
    channel.request('loadRoom', this.model.id);
  }
});
