import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UserApplicationComponent extends Component {
  @service store;
  user_application = this.store.findAll('application');
}
