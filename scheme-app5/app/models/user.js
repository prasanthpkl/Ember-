import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { hasMany } from '@ember-data/model';
export default class UserModel extends Model {
  @attr name;
  @attr email;
  @attr mobile;
  @attr password;
  @hasMany("application") applications;
}
