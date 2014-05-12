/*
 * grunt-z-manager
 * https://github.com/morishitter/grunt-z-manager
 *
 * Copyright (c) 2014 Masaaki Morishita
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    clean: {
      tests: ['tmp']
    },

    z_manager: {
      adapt: {
        files: {
          'tmp/out.css': ['test/fixtures/z-manager.css']
        }
      },
      create: {
        files: {
          './.zmanagerc': ['test/fixtures/z-manager.css']
        }
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'z_manager']);
  grunt.registerTask('default', ['jshint', 'test']);

};
