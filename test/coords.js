var test = require('tape');
    icoords = require('../');

test('Simple format to coordinate conversion', function(t) {
  var coordinates = {
    'P1': [0, 0],
    'M2': [1, 2],
    'm-2': [-1, -1],
    'P4': [3, 5],
    'M7': [6, 11],
    'P8': [7, 12],
    'P15': [14, 24],
    'AA3': [2, 6],
    'd5': [4, 6],
    'm7': [6, 10],
    'M9': [8, 14],
    'm13': [12, 20],
    'A4': [3, 6],
    'dd22': [21, 34]
  };

  Object.keys(coordinates).forEach(function(simple) {
    t.deepEqual(icoords(simple), coordinates[simple]);
  });

  t.end();
});
