import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('settings', function() {
    this.route('general');
    this.route('appearance');
  })
});

export default Router;
