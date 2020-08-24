'use strict';
module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: './node_modules/mochawesome',
  "reporter-options": "quiet=false,timestamp=isoDateTime,json=false,autoOpen=true,code=false",
  slow: 75,
  timeout: 60000
};


