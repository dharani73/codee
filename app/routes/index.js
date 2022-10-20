import Route from '@ember/routing/route';

const GROCERY_CATEGORIES = ['Vegetables', 'Fruits', 'Cereals'];

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/stores.json');
    let { data } = await response.json();

    return data.map((model) => {
      let { attributes } = model;
      let type;

      if (GROCERY_CATEGORIES.includes(attributes.category)) {
        type = 'grocery';
      } else {
        type = 'all';
      }

      return { type, ...attributes };
    });
  }
}
