'use strict';

define("grocery-store/tests/acceptance/grocery-store-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | grocery store', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('GroceryStore');
      assert.dom('h2').hasText('Welcome to grocery store!');
      assert.dom('.jumbo a.button').hasText('About Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
    });
    (0, _qunit.test)('visiting /about', async function (assert) {
      await (0, _testHelpers.visit)('/about');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('GroceryStore');
      assert.dom('h2').hasText('About grocery store');
      assert.dom('.jumbo a.button').hasText('Contact Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/getting-in-touch');
    });
    (0, _qunit.test)('visiting /getting-in-touch', async function (assert) {
      await (0, _testHelpers.visit)('/getting-in-touch');
      assert.equal((0, _testHelpers.currentURL)(), '/getting-in-touch');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('GroceryStore');
      assert.dom('h2').hasText('Contact Us');
      assert.dom('.jumbo a.button').hasText('About');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
    });
    (0, _qunit.test)('navigating using the nav-bar', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('nav').exists();
      assert.dom('nav a.menu-index').hasText('GroceryStore');
      assert.dom('nav a.menu-about').hasText('About');
      assert.dom('nav a.menu-contact').hasText('Contact');
      await (0, _testHelpers.click)('nav a.menu-about');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
      await (0, _testHelpers.click)('nav a.menu-contact');
      assert.equal((0, _testHelpers.currentURL)(), '/getting-in-touch');
      await (0, _testHelpers.click)('nav a.menu-index');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("grocery-store/tests/integration/components/jumbo-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | jumbo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the content inside a jumbo header with a tomster', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)( /*
                                                                                    <Jumbo>Hello World</Jumbo>
                                                                                  */{
        "id": "I+q5iC61",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"Hello World\"]],[]]]]]],[],false,[\"jumbo\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.jumbo').exists();
      assert.dom('.jumbo').hasText('Hello World');
      assert.dom('.jumbo .tomster').exists();
    });
  });
});
define("grocery-store/tests/integration/components/store-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | store', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders information about a groceries', async function (assert) {
      this.setProperties({
        store: {
          title: 'Fresh Vegetables',
          homedelivery: 'Available',
          city: 'hyderabad',
          Rating: '5 star',
          location: {
            lat: 37.7749,
            lng: -122.4194
          },
          category: 'Vegetables',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRrke3Izx3RVURPmCwFKJGACwf2hXD-VIvg&usqp=CAU',
          description: 'These are organic vegetables also fresh and easy to buy now from our app.'
        }
      });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)( /*
                                                                                    <Store @store={{this.store}} />
                                                                                  */{
        "id": "ZXe/Gvwk",
        "block": "[[[8,[39,0],null,[[\"@store\"],[[30,0,[\"store\"]]]],null]],[],false,[\"store\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('article').hasClass('store');
      assert.dom('article .homedelivery').includesText('Available');
      assert.dom('article .location').includesText('hyderabad');
      assert.dom('article .Rating').includesText('5 star');
      assert.dom('article .image').exists();
    });
  });
});
define("grocery-store/tests/integration/components/store/image-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | store/image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given image', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)( /*
                                                                                    
                                                                                      <Store::Image
                                                                                      src="../assets/images/grocery-image.png"
                                                                                      alt="vegelogo"
                                                                                    />
                                                                                  
                                                                                  */{
        "id": "irOjW+Kp",
        "block": "[[[1,\"\\n    \"],[8,[39,0],[[24,\"src\",\"../assets/images/grocery-image.png\"],[24,\"alt\",\"vegelogo\"]],null,null],[1,\"\\n\"]],[],false,[\"store/image\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('.image img').exists().hasAttribute('src', '../assets/images/grocery-image.png').hasAttribute('alt', 'vegelogo');
    });
    (0, _qunit.test)('clicking on the component toggles its size', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)( /*
                                                                                    
                                                                                        <Store::Image
                                                                                          src="../assets/images/grocery-image.png"
                                                                                          alt="vegelogo"
                                                                                        />
                                                                                      
                                                                                  */{
        "id": "bDmTLRF5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,\"src\",\"../assets/images/grocery-image.png\"],[24,\"alt\",\"vegelogo\"]],null,null],[1,\"\\n    \"]],[],false,[\"store/image\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom('button.image').exists();
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
      await (0, _testHelpers.click)('button.image');
      assert.dom('.image').hasClass('large');
      assert.dom('.image small').hasText('View Smaller');
      await (0, _testHelpers.click)('button.image');
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
    });
  });
});
define("grocery-store/tests/test-helper", ["grocery-store/app", "grocery-store/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"grocery-store/app",0,"grocery-store/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('grocery-store/config/environment', [], function() {
  var prefix = 'grocery-store';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('grocery-store/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
