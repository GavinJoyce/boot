import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
  	this._super(...arguments);
    this.set('users', Ember.A([
      { id: 1, name: 'Alex' },
      { id: 2, name: 'Ben' }
    ]));
    this.set('selectedUsers', []);
  }
});
