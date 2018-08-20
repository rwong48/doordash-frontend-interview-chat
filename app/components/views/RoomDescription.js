import Marionette from 'backbone.marionette';
import RoomDescriptionTemplate from './RoomDescription.jst';

export default Marionette.View.extend({
  template: RoomDescriptionTemplate,

  initialize(options) {
    this.username = options.username
  },

  serializeData() {
    return _.extend({}, this.model.attributes, {
      username: this.username
    });
  }
});
