import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  user:            Ember.computed.alias('controllers.application.model'),
  loadingLocation: Ember.computed.alias('controllers.application.loadingLocation'),

  percentSunny: function() {
    var results = this.get('results');

    return (100 * (results.filterBy('description', 'sunny').length / results.get('length'))).toPrecision(4);
  }.property('results'),

  percentCloudy: function() {
    var results = this.get('results');
    
    return (100 * (results.filterBy('description', 'cloudy').length / results.get('length'))).toPrecision(4);
  }.property('results'),

  percentPartial: function() {
    var results = this.get('results');
    
    return (100 * (results.filterBy('description', 'partly cloudy').length / results.get('length'))).toPrecision(4);
  }.property('results'),

  // Temperature computed properties
  temperatures:     Ember.computed.mapBy('results', 'averageTemp'),
  maxTemperature:   Ember.computed.max('temperatures'),
  minTemperature:   Ember.computed.min('temperatures'),
  totalTemperature: Ember.computed.sum('temperatures'),
  averageTemperature: function() {
    return (this.get('totalTemperature') / this.get('results.length')).toPrecision(4);
  }.property('results.@each'),

  // Rainfall computed properties
  rainfalls:     Ember.computed.mapBy('results', 'rainfall'),
  maxRainfall:   Ember.computed.max('rainfalls'),
  minRainfall:   Ember.computed.min('rainfalls'),
  totalRainfall: Ember.computed.sum('rainfalls'),
  averageRainfall: function() {
    return (this.get('totalRainfall') / this.get('results.length')).toPrecision(4);
  }.property('results.@each'),

  // Humidity computed properties
  humidities:    Ember.computed.mapBy('results', 'humidity'),
  maxHumidity:   Ember.computed.max('humidities'),
  minHumidity:   Ember.computed.min('humidities'),
  totalHumidity: Ember.computed.sum('humidities'),
  averageHumidity: function() {
    return (this.get('totalHumidity') / this.get('results.length')).toPrecision(4);
  }.property('results.@each'),

  // When parameters change, update the data set
  updateData: function() {
    var controller = this,
        location   = this.get('user.location'),
        startDate  = this.get('startDate'),
        endDate    = this.get('endDate');

    if (location && startDate && endDate) {
      this.store.find('weatherDataPoint', {
        location:   location,
        start_date: startDate,
        end_date:   endDate
      }).then(function(results) {
        controller.set('results', results);
      });
    }
  }.observes('location', 'startDate', 'endDate')
});
