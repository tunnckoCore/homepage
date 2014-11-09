#!/usr/bin/env node
/**
 * homepage <https://github.com/tunnckoCore/homepage>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */

var homepage = require('../index');
var meow = require('meow');

var cli = meow({
  pkg: '../package.json',
  help: [
    'Options',
    '  --help                Show this help',
    '  --version             Current version of package',
    '  -n | --name           Name of the npm package',
    '  -p | --promise        Handle response with promise - true/false or empty',
    '',
    'Usage',
    '  pkg-open <name> [promise]',
    '  pkg-open mocha',
    '  pkg-open gulp',
    '  pkg-open lodash -p',
    '  pkg-open --promise --name assemble',
    '  pkg-open -n express',
    '  pkg-open -n koa -p',
    '',
  ].join('\n')
})

var pkgn = cli.input[0] || cli.flags.n || cli.flags.name;
var prom = cli.input[1] || cli.flags.p || cli.flags.promise;

var opts = {};

opts.name = pkgn || 'homepage'
opts.prom = prom || false

if (opts.prom) {
  homepage(opts)
    .then(console.log)
    .catch(console.error)
  return;
}

homepage(opts, function(err, res) {
  console.log(err, res)
  return;
})
return;
