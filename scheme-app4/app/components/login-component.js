import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginComponentComponent extends Component {
  @service login;
  @service router;
  @tracked name="";
  @tracked password="";


  @action
  login_user() {

    
    this.login.Login = true;

    if(this.name === "admin")
    {
      this.router.transitionTo("admin-page");
    }
    else
    {
      this.router.transitionTo("home-page");
    }
    // this.router.transitionTo('home-page');
  }
}
