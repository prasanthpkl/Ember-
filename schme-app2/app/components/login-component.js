import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginComponentComponent extends Component {
  @service login;
  @service router;

  @action
  login_user() {
    this.login.Login = true;
    this.router.transitionTo('home-page');
  }
}
