const { getOptions } = require('loader-utils');

module.exports = function(source, map) {
  // console.log(source, map);
  const options = getOptions(this);
  console.log(options);
  this.callback(null, source.replace(/console\.log\(.*\);?\n/g, ''), map);
};
