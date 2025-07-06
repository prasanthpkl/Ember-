import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SignupComponentComponent extends Component {
  @service router;
  @service store;
  @tracked name = '';
  @tracked email = '';
  @tracked mobile = '';
  @tracked password = '';

  @action
  create_user() {
    let user = this.store.createRecord('user', {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      password: this.password,
    });

    user
      .save()
      .then(() => {
        this.name = '';
        this.email = '';
        this.mobile = '';
        this.password = '';
        this.router.transitionTo('login-page');
      })
      .catch((error) => {
        alert('Failed to add scheme: ' + error.message);
      });
  }
}
