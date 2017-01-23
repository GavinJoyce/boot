import Ember from 'ember';
import delay from 'ember-delay/delay';

export default Ember.Route.extend({
  activate() {
    console.log(`GJ: ${this.routeName}.activate`);
  },
  beforeModel() {
    console.log(`GJ: ${this.routeName}.beforeModel`);
  },
  model(){
    console.log(`GJ: ${this.routeName}.model`);
    // return delay(1000);
  },
  afterModel() {
    console.log(`GJ: ${this.routeName}.afterModel`);
  },
  setupController() {
    this._super(...arguments);
    console.log(`GJ: ${this.routeName}.setupController`, arguments);
  },
  renderTemplate() {
    debugger;
    this._super(...arguments);
    console.log(`GJ: ${this.routeName}.renderTemplate`, arguments);
  },
});
