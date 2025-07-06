import EmberRouter from '@ember/routing/router';
import config from 'scheme-app5/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login-page');
  this.route('home-page');
  this.route('form-page');
  this.route('admin-page');
  this.route('signup-page');
});
