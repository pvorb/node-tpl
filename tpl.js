// tpl - a general purpose template cli
// (c) 2011 Paul Vorbach. Licensed under MIT.
;(function() {
  var version = 'v0.0.0';

  var fs = require('fs');
  var path = require('path');
  var confdir = require('confdir');
  var append = require('append');

  // default template engine
  var ejs = require('ejs');
  var tplEngine = ejs;

  // default
  var defaultConf = {
    parsers: {
      __default: 'markdown.js'
    },
    templates: {
      __default: 'default.ejs'
    },
    extensions: {
      __default: 'txt'
    },
  };

  function apply(content, cb) {
    // look for configuration directory
    confdir(process.cwd(), 'tpl', function(err, dir) {
      if (err) console.error(err);

      var json = fs.readFileSync(path.resolve(dir, 'conf.json'), 'utf8');
      var conf = JSON.parse(json);
      conf = append(defaultConf, conf);

    });
  }

  return {
    apply: apply,
    version: version
  };
}).call(this);
