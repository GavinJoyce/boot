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
  });

  this.route('actions', function() {
    this.route('classic');
    this.route('closure');
  });
});

export default Router;
