import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationComponent extends Component {
  @service router;
  @service store;
  @tracked name = '';
  @tracked email = '';
  @tracked mobile = '';
  @tracked scheme = this.args.scheme;

  @action
  apply_scheme() {
    let application_new = this.store.createRecord('application', {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      scheme: this.scheme,
    });

    application_new
      .save()
      .then(() => {
        this.name = '';
        this.email = '';
        this.mobile = '';
        (this.scheme = ''), this.router.transitionTo('home-page');
      })
      .catch((error) => {
        alert('Failed to add scheme: ' + error.message);
      });
  }
}
