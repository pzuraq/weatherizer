var url = require('url');

module.exports = function(app) {
  var express = require('express');
  var weatherDataPointRouter = express.Router();

  weatherDataPointRouter.get('/', function(req, res) {
    var urlParts = url.parse(req.url, true),
        descriptions = ['sunny', 'cloudy', 'partly cloudy'],
        mockData = [];

    for (var d = new Date(urlParts.query.start_date * 1000), end = new Date(urlParts.query.end_date * 1000); d <= end; d.setDate(d.getDate() + 1)) {
      var mockDataPoint = {};

      mockDataPoint.id           = getRandomInt(1, 10000);
      mockDataPoint.description  = descriptions[getRandomInt(0, 3)];
      mockDataPoint.average_temp = getRandomInt(60, 90);
      mockDataPoint.humidity     = getRandomInt(30, 60);
      mockDataPoint.rainfall     = getRandomInt(2, 23);
      mockDataPoint.created_at   = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

      mockData.push(mockDataPoint);
    }

    res.send({
      'weather_data_points': mockData
    });
  });

  weatherDataPointRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  weatherDataPointRouter.get('/:id', function(req, res) {
    res.send({
      'weather-data-point': {
        id: req.params.id
      }
    });
  });

  weatherDataPointRouter.put('/:id', function(req, res) {
    res.send({
      'weather-data-point': {
        id: req.params.id
      }
    });
  });

  weatherDataPointRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/weather_data_points', weatherDataPointRouter);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}