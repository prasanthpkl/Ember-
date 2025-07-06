import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AdminPageController extends Controller {
  @tracked name = '';
  @tracked description = '';
  @tracked eligibility = '';
  @service store;
  @service router;

  @action
  add_scheme() {
    let scheme_new = this.store.createRecord('scheme', {
      name: this.name,
      description: this.description,
      eligibility: this.eligibility,
    });

    scheme_new.save();

    this.name = '';
    this.description = '';
    this.eligibility = '';

    this.router.transitionTo('home-page').then(() => {
    // this.router.refresh();
    });

  }
}
