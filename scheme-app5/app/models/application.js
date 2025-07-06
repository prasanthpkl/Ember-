import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';
export default class ApplicationModel extends Model {
  @attr name;
  @attr email;
  @attr mobile;
  @attr scheme;
  @attr status;
  @belongsTo("user") userId;

}
