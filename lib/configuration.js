var config = require('./config');

function Configuration() {
  this.config = {
    crypto: {
      secretKey: 'o!rDE(Qbrq7u4OV',
      algorithm: 'AES-256-CBC',
      inputEncoding: 'utf8',
      outputEncoding: 'base64'
    },
    token: {
      life: 3600, //seconds
      length: 32, //bytes
      jwt: {
        enabled: false,
        ipcheck: false,
        uacheck: false,
        secretKey: 'K7pHX4OASe?c&lm',
        cert: null,
        algorithm: 'RS256'
      }
    }
  };
}
Configuration.prototype.init = function(options) {
  if (options === null || options === {}) {
    return;
  }
  if (options.token !== null) {
    this.config.token['life'] = options.token['life'] || this.config.token['life'];
    this.config.token['length'] = options.token['length'] || this.config.token['length'];
  }
}
Configuration.prototype.getParams = function() {
  return this.config;
}

exports = module.exports = new Configuration;