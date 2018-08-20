import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import LoginTemplate from './login.jst';

const loginChannel = Radio.channel('login');

export default Marionette.View.extend({
  template: LoginTemplate,

  events: {
    'submit form': 'onFormSubmit'
  },

  ui: {
    loginInput: '.login-input',
    loginButton: '.login-button'
  },

  onFormSubmit(e) {
    e.preventDefault();
    const username = this.ui.loginInput.val();
    loginChannel.request('login', username);
  }
});
