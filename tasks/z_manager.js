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
        var css = fs.readFileSync(grunt.file.read(filepath)).toString();
        var z = new Zmanager(css);
        var res = z.adapt(zmanagerc);
      }).join(grunt.util.normalizelf(options.separator));

      src += options.punctuation;

      grunt.file.write(file.dest, src);

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
