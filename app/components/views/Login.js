import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import LoginTemplate from './login.jst';

const channel = Radio.channel('chatApp');

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
    channel.request('login', username);
  }
});
