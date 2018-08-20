import Marionette from 'backbone.marionette';
import ChatInterfaceTemplate from './ChatInterface.jst';
import UserInfoView from './UserInfo';
import RoomsView from './Rooms';

export default Marionette.View.extend({
  template: ChatInterfaceTemplate,

  initialize(options) {
    this.userModel = options.user;
    this.roomsCollection = options.rooms;
  },

  regions: {
    userInfo: '#user-info',
    roomsList: '#rooms-list'
  },

  onRender() {
    const userInfoView = new UserInfoView({
      model: this.userModel
    });
    this.showChildView('userInfo', userInfoView);
    // Re-render every minute to reflect the latest uptime
    setInterval(() => userInfoView.render(), 1000 * 1);

    const roomsListView = new RoomsView({
      collection: this.roomsCollection
    });
    this.showChildView('roomsList', roomsListView);
  }
});
