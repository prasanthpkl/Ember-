import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class FormPageController extends Controller {
  queryParams = ['scheme'];
  @tracked scheme = '';
}
