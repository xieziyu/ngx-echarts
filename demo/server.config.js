module.exports = {
  "port": 4202,
  "server": {
    "baseDir": "./demo/dist",
    middleware : { 1 : require('compression')()}
  }
};
