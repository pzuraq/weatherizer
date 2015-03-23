import Ember from 'ember';

// We setup the application route

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },

  setupController(controller, model) {
    this._super(controller, model);

    if (navigator.geolocation) {
      controller.set('loadingLocation', true);

      navigator.geolocation.getCurrentPosition(function(location) {
        if (location.latitude && location.longitude) {
          model.set('location', location.latitude + ',' + location.longitude);
        }

        controller.set('loadingLocation', false);
      });  
    }
  }
});
