import Marionette from 'backbone.marionette';
import UserInfoTemplate from './UserInfo.jst';

export default Marionette.View.extend({
  template: UserInfoTemplate,

  getUptimeMinutes() {
    const now = new Date().getTime();
    const created = this.created;
    const uptimeSeconds = (now - created) / 1000;
    return Math.round(uptimeSeconds / 60);
  },

  serializeData() {
    return _.extend({}, this.model.attributes, {
      getUptimeMinutes: this.getUptimeMinutes
    });
  }
});
