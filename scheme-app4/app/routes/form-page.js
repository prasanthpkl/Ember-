import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FormPageRoute extends Route {
  @service login;
  @service router;
  beforemodel() {
    if (this.login.Login == false) {
      this.router.transitionTo('login-page');
    }
  }
}
