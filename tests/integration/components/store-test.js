import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | store', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a groceries', async function (assert) {
    this.setProperties({
      store: {
        title: 'Fresh Vegetables',
        homedelivery: 'Available',
        city: 'hyderabad',
        Rating: '5 star',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: 'Vegetables',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRrke3Izx3RVURPmCwFKJGACwf2hXD-VIvg&usqp=CAU',
        description:
          'These are organic vegetables also fresh and easy to buy now from our app.',
      },
    });

    await render(hbs`<Store @store={{this.store}} />`);

    assert.dom('article').hasClass('store');
    assert.dom('article .homedelivery').includesText('Available');
    assert.dom('article .location').includesText('hyderabad');
    assert.dom('article .Rating').includesText('5 star');
    assert.dom('article .image').exists();
  });
});
