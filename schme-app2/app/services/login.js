import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginService extends Service {
  @tracked Login = false;
}
