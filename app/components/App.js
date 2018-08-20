import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import LoginView from './views/Login';

const loginChannel = Radio.channel('login');

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new LoginView());

    loginChannel.reply('login', (username) => {
      console.log('reply', username);
    });
  }
});
