import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),

  rainfall:    DS.attr('number'),
  averageTemp: DS.attr('number'),
  humidity:    DS.attr('number'),

  createdAt: DS.attr('date')
});
