import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', {
  needs: ['controller:application', 'model:user', 'model:weatherDataPoint'],

  beforeEach: function() {
    var controller = this.subject();

    controller.set('results', [
      {
        id: 1,
        averageTemp: 70,
        humidity: 40,
        rainfall: 10,
        description: 'sunny'
      },
      {
        id: 1,
        averageTemp: 80,
        humidity: 50,
        rainfall: 20,
        description: 'cloudy'
      },
      {
        id: 1,
        averageTemp: 90,
        humidity: 60,
        rainfall: 30,
        description: 'cloudy'
      },
    ]);
  }
});


// Temperature computed property tests

test('has correct max temp', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('maxTemperature'), 90);
});

test('has correct min temp', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('minTemperature'), 70);
});

test('has correct average temp', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('averageTemperature'), 80);
});


// Rainfall computed property tests

test('has correct max rainfall', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('maxRainfall'), 30);
});

test('has correct min rainfall', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('minRainfall'), 10);
});

test('has correct average rainfall', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('maxRainfall'), 30);
});

test('has correct total rainfall', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('totalRainfall'), 60);
});


// Humidity computed property tests

test('has correct max humidity', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('maxHumidity'), 60);
});

test('has correct min humidity', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('minHumidity'), 40);
});

test('has correct max humidity', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('maxHumidity'), 60);
});


// Test day description percentages

test('has correct sunny day percentage', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('percentSunny'), 33.33);
});

test('has correct cloudy day percentage', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('percentCloudy'), 66.67);
});

test('has correct partly cloudy day percentage', function(assert) {
  var controller = this.subject();

  assert.equal(controller.get('percentPartial'), 0);
});