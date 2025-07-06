import Model, { attr } from '@ember-data/model';

export default class SchemeModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('string') eligibility;
}
