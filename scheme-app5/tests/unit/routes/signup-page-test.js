import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | signup-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:signup-page');
    assert.ok(route);
  });
});
