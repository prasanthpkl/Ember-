import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginComponentComponent extends Component {
  @service login;
  @service router;
  @service store;
  @tracked name = '';
  @tracked password = '';

  @action
  async login_user() {
    let users = await this.store.findAll("user");
    console.log( "Users:"+users);
    console.log("Login method")
    this.login.Login = true;

    if (this.name === 'admin') {
      this.router.transitionTo('admin-page');
    } else {
      this.router.transitionTo('home-page');
    }
    // this.router.transitionTo('home-page');
  }

  @action
  sign_user() {
    this.router.transitionTo('signup-page');
  }
}
