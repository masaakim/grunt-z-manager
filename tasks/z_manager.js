/*
 * grunt-z-manager
 * https://github.com/morishitter/grunt-z-manager
 *
 * Copyright (c) 2014 Masaaki Morishita
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var Zmanager = require('z-manager');
  var fs = require('fs');

  grunt.registerMultiTask('z_manager', 'grunt plugin for z-manager', function () {

    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    this.files.forEach(function (file) {
      var src = file.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        var zmanagerc = fs.readFileSync("./.zmanagerc").toString();
        var css = grunt.file.read(filepath);
        var z = new Zmanager(css);
        return z.adapt(zmanagerc);
      }).join(grunt.util.normalizelf(options.separator));

      grunt.file.write(file.dest, src);

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
