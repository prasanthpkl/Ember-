import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SchemeComponentComponent extends Component {
  @service router;
  @service login;

  @action
  form_page() {
    if (this.login.Login == true) {
      this.router.transitionTo('form-page', {
        queryParams: { scheme: this.args.name },
      });
    } else {
      this.router.transitionTo('login-page');
    }
  }
}
